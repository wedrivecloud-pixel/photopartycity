/** Published rental prices and booking destinations, shared by every rental template. */
export const bookingLinks = {
  full: 'https://eventdeskly.com/reservation/start?business=88aeb400-c578-40f7-8adc-96e170181c01&service=Photobooths&group=Full+Service+Photobooth+Rental',
  self: 'https://eventdeskly.com/reservation/start?business=88aeb400-c578-40f7-8adc-96e170181c01&service=Photobooths&group=Self+Service+Photobooth+Rental',
  mail: 'https://eventdeskly.com/book/photo-party-city?service=Photobooths&group=Booth+By+Mail',
  booth360: '/check-your-date/?booth=360',
  general: 'https://eventdeskly.com/reservation/start?business=88aeb400-c578-40f7-8adc-96e170181c01',
};

export interface RentalTier {
  slug: string;
  name: string;
  model: string;
  price: number;
  hours: number;
  href: string;
  features: string[];
}

const packageLink = (id: string) => `https://eventdeskly.com/book/photo-party-city/package/${id}`;
export const fullServiceTiers: RentalTier[] = [
  {slug:'silver', name:'Silver', model:'Helio Sport', price:695, hours:3, href:packageLink('4b01576a-0a6c-4f79-94af-83b5374a6d63'), features:['iPad camera booth','Attendant on site','Unlimited prints']},
  {slug:'gold', name:'Gold', model:'Lumia M Pro', price:895, hours:4, href:packageLink('9c2f5061-4898-4de7-9bd5-20ab1aa6fc54'), features:['iPad + DSLR camera','Attendant on site','Unlimited prints']},
  {slug:'platinum', name:'Platinum', model:'Posh Pro', price:1095, hours:5, href:packageLink('685d2b8e-ea41-43d2-b391-01fe7fc31200'), features:['iPad + DSLR camera','37-inch display for slideshows or branding','Attendant and unlimited prints']},
];
export const selfServiceTiers: RentalTier[] = [
  {slug:'starter', name:'Starter', model:'Helio Sport', price:199, hours:24, href:packageLink('fa8083c9-0fdf-4387-9151-4f7ce7e8d5ee'), features:['Built-in iPad camera','Unlimited digital photos and sharing','Videos, GIFs and boomerangs']},
  {slug:'showbiz', name:'Showbiz', model:'Lumia M Pro', price:350, hours:24, href:packageLink('3308ef3e-f828-4636-a9a7-9fd12dd1737e'), features:['iPad + DSLR camera','Unlimited digital photos and sharing','Optional prints']},
  {slug:'hollywood', name:'Hollywood', model:'Posh Pro', price:525, hours:24, href:packageLink('c13f6c7a-4721-494c-9e83-c138c496fdca'), features:['iPad + DSLR camera','37-inch display for videos, slideshows or branding','Optional prints']},
];
export const addons = {extraHour:150, printer:65, mediaKit:65, customTemplate:25, backdrop:25, mailHotspot:40};
export const booth360Rates = {full:{2:450,3:600,4:750}, self:{2:300,3:400,4:550}};
export const mailRental = {name:'Photo Booth By Mail',price:275,href:bookingLinks.mail};
export const mailTerms = {lateReturnPerDay:100,cancellationFee:50};
export const money = (value: number) => new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(value);

export const serviceSchema = (name: string, url: string, tiers: {name:string;price:number;href:string}[]) => ({
  '@context':'https://schema.org','@type':'Service',name,url,
  provider:{'@id':'https://photopartycity.com/#localbusiness'},
  areaServed: name === mailRental.name ? {'@type':'Place',name:'Continental United States'} : {'@type':'GeoCircle',name:'Within 45 miles of Mira Loma, California',geoRadius:72420.48,geoMidpoint:{'@type':'GeoCoordinates',latitude:33.9931,longitude:-117.5202}},
  offers:tiers.map(tier=>({'@type':'Offer',name:tier.name,price:tier.price,priceCurrency:'USD',url:tier.href})),
});

/** Keep prices in migrated FAQ prose tied to the same rental data as cards and tables. */
export function rentalCopy(value:string):string {
 const sourcePrices:Record<string,number>={'$1,095':fullServiceTiers[2].price,'$695':fullServiceTiers[0].price,'$895':fullServiceTiers[1].price,'$199':selfServiceTiers[0].price,'$350':selfServiceTiers[1].price,'$525':selfServiceTiers[2].price,'$275':mailRental.price,'$150':addons.extraHour,'$40':addons.mailHotspot};
 return value.replace(/\$(?:1,095|695|895|199|350|525|275|150|40)(?![\d,])/g,amount=>money(sourcePrices[amount]));
}
