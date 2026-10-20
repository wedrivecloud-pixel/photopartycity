export const dedicatedRentalSlugs = ['photo-booth-packages','full-service-photo-booth-rental','self-service-photo-booth-rental','digital-photo-booth-rental','360-photo-booth-rental','photo-booth-by-mail','contact-us','check-your-date'];
export const infoSlugs = ['photo-booth-rental-cost','about-photo-party-city','photobooth-props','refund-policy'];
export const eventSlugs = ['wedding-photo-booth-rental','corporate-photo-booth-rental'];
export const retiredRoutes:Record<string,string> = {
 'photobooth-rental':'/photo-booth-packages/',
 '24-hours-self-service':'/check-your-date/',
 'full-service-form':'/check-your-date/',
 '360-booth-service-form':'/check-your-date/?booth=360',
 'home2':'/',
 'category/blog':'/blog/',
 '2-photo-booth-rental-packages-you-can-get-right-now':'/types-of-photo-booths/',
};
export function isRetired(slug:string){return slug in retiredRoutes || slug.startsWith('author/');}
export function usesRentalTemplate(page:{slug:string;type:string}){return infoSlugs.includes(page.slug)||eventSlugs.includes(page.slug)||page.slug.startsWith('photo-booth-rental-')&&page.slug!=='photo-booth-rental-cost'||page.type==='post';}
