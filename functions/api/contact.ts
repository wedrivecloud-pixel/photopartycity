export interface ContactEnv {
  RESEND_API_KEY?: string;
  CONTACT_FROM?: string;
  CONTACT_TO?: string;
  TURNSTILE_SECRET_KEY?: string;
}
type ContactContext = { request: Request; env: ContactEnv };
type ContactMessage = { name: string; email: string; phone: string; date: string; zip: string; message: string; website: string; turnstileToken: string };
const MAX_BYTES = 12_000;
const respond = (status: number, message: string, ok = false): Response => new Response(JSON.stringify({ ok, message }), {
  status, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' },
});
const emailPattern = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;

/** Dependency injection lets tests assert provider behavior without sending an email. */
export async function handleContactRequest(request: Request, env: ContactEnv, fetcher: typeof fetch = fetch): Promise<Response> {
  if (request.method !== 'POST') return respond(405, 'Use the contact form to send a message.');
  const origin = request.headers.get('Origin');
  if (!origin || origin !== new URL(request.url).origin || request.headers.get('Sec-Fetch-Site') === 'cross-site') {
    return respond(403, 'Please send your message from the Photo Party City contact page.');
  }
  const length = Number(request.headers.get('Content-Length') || 0);
  if (length > MAX_BYTES) return respond(413, 'Your message is too long. Please keep it under 4,000 characters.');
  const type = request.headers.get('Content-Type')?.split(';')[0].trim();
  if (type !== 'application/json' && type !== 'application/x-www-form-urlencoded') return respond(415, 'Please submit the contact form.');
  let raw: Record<string, unknown>;
  try {
    // Bound streamed request size as well as Content-Length; do not buffer an unbounded body.
    const reader = request.body?.getReader();
    if (!reader) return respond(400, 'Your message was empty. Please complete the contact form.');
    const chunks: Uint8Array[] = [];
    let size = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > MAX_BYTES) { await reader.cancel(); return respond(413, 'Your message is too long. Please keep it under 4,000 characters.'); }
      chunks.push(value);
    }
    const bytes = new Uint8Array(size);
    let offset = 0;
    for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
    const text = new TextDecoder().decode(bytes);
    raw = type === 'application/json' ? JSON.parse(text) : Object.fromEntries(new URLSearchParams(text));
    if (!raw || typeof raw !== 'object' || Array.isArray(raw)) throw new Error('Invalid message');
  } catch { return respond(400, 'We could not read your message. Please try again.'); }
  const value = (key: string): string => typeof raw[key] === 'string' ? (raw[key] as string).trim() : '';
  const message: ContactMessage = {
    name: value('name'), email: value('email'), phone: value('phone'), date: value('date'), zip: value('zip'),
    message: value('message'), website: value('website'), turnstileToken: value('cf-turnstile-response'),
  };
  // A filled hidden field is rejected; the handler never claims it delivered a message.
  if (message.website) return respond(400, 'We could not send this message. Please call or text (909) 403-7143.');
  if (!message.name || message.name.length > 100 || /[\r\n]/.test(message.name)) return respond(400, 'Enter your name, up to 100 characters.');
  if (message.email.length > 254 || !emailPattern.test(message.email) || /[\r\n]/.test(message.email)) return respond(400, 'Enter a valid email address.');
  if (message.phone.length > 40 || (message.phone && !/^[+()\d\s.-]{7,40}$/.test(message.phone))) return respond(400, 'Check your phone number, or leave it blank.');
  if (message.date && !/^\d{4}-\d{2}-\d{2}$/.test(message.date)) return respond(400, 'Check the event date, or leave it blank.');
  if (message.zip && !/^\d{5}$/.test(message.zip)) return respond(400, 'Enter a five-digit ZIP code, or leave it blank.');
  if (message.message.length < 10 || message.message.length > 4000) return respond(400, 'Write a message between 10 and 4,000 characters.');
  if (!env.RESEND_API_KEY || !env.CONTACT_FROM) return respond(503, 'Online messages are not available yet. Please call or text (909) 403-7143, or email hello@photopartycity.com.');
  if (env.TURNSTILE_SECRET_KEY) {
    if (!message.turnstileToken) return respond(400, 'Please complete the security check and try again.');
    try {
      const verification = await fetcher('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST', body: new URLSearchParams({ secret: env.TURNSTILE_SECRET_KEY, response: message.turnstileToken }), signal: AbortSignal.timeout(10_000),
      });
      const result = await verification.json() as { success?: boolean; hostname?: string };
      if (!verification.ok || !result.success || result.hostname !== new URL(request.url).hostname) return respond(400, 'The security check expired. Please try again.');
    } catch { return respond(503, 'The security check is temporarily unavailable. Please call or text us.'); }
  }
  try {
    const response = await fetcher('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: env.CONTACT_FROM, to: [env.CONTACT_TO || 'hello@photopartycity.com'], reply_to: message.email,
        subject: `Photo Party City website inquiry — ${message.name}`,
        text: [
          `Name: ${message.name}`, `Email: ${message.email}`, `Phone: ${message.phone || 'Not provided'}`,
          `Event date: ${message.date || 'Not provided'}`, `Event ZIP: ${message.zip || 'Not provided'}`, '', message.message,
        ].join('\n'),
      }), signal: AbortSignal.timeout(10_000),
    });
    const receipt = await response.json() as { id?: string };
    if (!response.ok || !receipt.id) return respond(502, 'Your message could not be sent. Please try again, or call or text (909) 403-7143.');
    return respond(200, 'Your message has been sent. Our team will reply to your email.', true);
  } catch { return respond(502, 'Your message could not be sent. Please try again, or call or text (909) 403-7143.'); }
}

export const onRequest = ({ request, env }: ContactContext): Promise<Response> => handleContactRequest(request, env);
