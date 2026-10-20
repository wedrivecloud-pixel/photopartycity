import { bookingLinks } from '../data/rentals';
import { logBookingResult } from './tracking';

const form = document.querySelector<HTMLFormElement>('#date-check-form');
if (form) {
  const date = form.elements.namedItem('date') as HTMLInputElement;
  const zip = form.elements.namedItem('zip') as HTMLInputElement;
  const eventType = form.elements.namedItem('event') as HTMLSelectElement;
  const status = document.querySelector<HTMLElement>('#date-check-status')!;
  const results = document.querySelector<HTMLElement>('#date-check-results')!;
  const heading = document.querySelector<HTMLElement>('#date-check-results-heading')!;
  const note = document.querySelector<HTMLElement>('#date-check-note')!;
  const params = new URLSearchParams(location.search);
  date.min = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Los_Angeles', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
  if (params.has('date')) date.value = params.get('date') || '';
  if (params.has('zip')) zip.value = params.get('zip') || '';
  if (params.has('event')) eventType.value = params.get('event') || '';
  const booth = params.get('booth') || '';
  const boothOptions: Record<string, string> = { full: bookingLinks.full, self: bookingLinks.self, mail: bookingLinks.mail, booth360: bookingLinks.general };
  document.querySelectorAll<HTMLAnchorElement>('[data-booking-choice]').forEach((link) => {
    link.href = boothOptions[link.dataset.bookingChoice || ''] || bookingLinks.general;
  });

  const clearResults = () => { results.hidden = true; status.textContent = ''; };
  form.addEventListener('input', clearResults);
  async function showResults(): Promise<void> {
    results.hidden = true;
    status.textContent = '';
    zip.setCustomValidity(/^\d{5}$/.test(zip.value.trim()) ? '' : 'Enter a five-digit ZIP code.');
    if (!form!.reportValidity()) return;
    const checkedDate = date.value;
    const checkedZip = zip.value;
    status.textContent = 'Checking your rental options…';
    let booking: typeof import('../lib/booking');
    try { booking = await import('../lib/booking'); }
    catch { status.textContent = 'We could not check your ZIP right now. Please call or text (909) 403-7143 to confirm your options.'; return; }
    if (date.value !== checkedDate || zip.value !== checkedZip) return;
    status.textContent = '';
    date.setCustomValidity(booking.validEventDate(checkedDate) ? '' : 'Choose today or a future event date.');
    if (!form!.reportValidity()) return;
    const result = booking.classifyZip(checkedZip);
    logBookingResult(result.kind);
    if (result.kind === 'invalid') {
      status.textContent = 'We could not verify that ZIP code. Check the five digits, or call or text us so we can confirm your options.';
      return;
    }
    if (result.kind === 'unsupported') {
      status.textContent = 'Online rental options currently cover the contiguous United States. For Alaska, Hawaii, territories, or military addresses, call or text us to discuss your event.';
      return;
    }
    const local = result.kind === 'local';
    heading.textContent = local ? 'You’re in our local service area.' : 'We can ship a booth to your event.';
    note.textContent = local
      ? 'Choose how you’d like to rent. Continue to Eventdeskly to confirm the date, package, and final availability.'
      : 'Full service, self-service and 360 are only available near Mira Loma, CA. Booth by Mail is available in the contiguous United States. Continue to confirm shipping timing and availability.';
    document.querySelectorAll<HTMLElement>('[data-local-choice]').forEach((card) => { card.hidden = !local; });
    const selected360 = document.querySelector<HTMLElement>('[data-booth360-notice]');
    if (selected360) selected360.hidden = !(booth.startsWith('360') && local);
    results.hidden = false;
    results.focus({ preventScroll: true });
    results.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
  }
  form.addEventListener('submit', (event) => { event.preventDefault(); void showResults(); });
  date.addEventListener('input', () => date.setCustomValidity(''));
  zip.addEventListener('input', () => zip.setCustomValidity(''));
  if (date.value && zip.value) void showResults();
}
