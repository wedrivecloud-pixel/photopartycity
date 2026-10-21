type ConversionEvent = { event: string; conversion_type?: string; source: string; booth_type?: string; service_result?: string };
declare global {
  interface Window { dataLayer?: unknown[]; ppcTrackingReady?: boolean }
}

function push(event: ConversionEvent): void {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}

/** No date, ZIP, name, message, or contact information is included. */
export function logBookingResult(result: string, source = 'check-your-date'): void {
  push({ event: 'booking_area_result', source, service_result: result });
}

if (typeof document !== 'undefined' && !window.ppcTrackingReady) {
  window.ppcTrackingReady = true;
  document.addEventListener('click', (event) => {
    const target = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href]') : null;
    if (!target) return;
    const href = target.getAttribute('href') || '';
    let type = '';
    if (/^tel:/i.test(href)) type = 'phone';
    else if (/^sms:/i.test(href)) type = 'text';
    else {
      try { if (new URL(href, location.href).hostname === 'eventdeskly.com') type = 'eventdeskly'; } catch { return; }
    }
    if (!type) return;
    const context = target.closest<HTMLElement>('[data-source]');
    const source = target.dataset.source || context?.dataset.source || (target.closest('header') ? 'header' : target.closest('footer') ? 'footer' : 'page');
    const booth = target.dataset.booth || target.closest<HTMLElement>('[data-booth]')?.dataset.booth || 'general';
    push({ event: 'rental_conversion', conversion_type: type, source, booth_type: booth });
  });
}
