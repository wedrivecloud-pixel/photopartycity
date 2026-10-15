export const booking = 'https://eventdeskly.com/reservation/start?business=88aeb400-c578-40f7-8adc-96e170181c01';
export const cities = ['Fontana','Riverside','Rancho Cucamonga','Ontario','San Bernardino','Corona','Eastvale','Upland','Jurupa Valley','Chino','Norco'];
export const services = [
 {name:'24-hour self-service',url:'/self-service-photo-booth-rental/'},
 {name:'Full service with prints',url:'/full-service-photo-booth-rental/'},
 {name:'Digital photo booths',url:'/digital-photo-booth-rental/'},
 {name:'360 video booths',url:'/360-photo-booth-rental/'},
 {name:'Wedding rentals',url:'/wedding-photo-booth-rental/'},
 {name:'Corporate events',url:'/corporate-photo-booth-rental/'},
 {name:'Photo booth by mail',url:'/photo-booth-by-mail/'},
];
export const business = {
 '@context':'https://schema.org','@type':'LocalBusiness','@id':'https://photopartycity.com/#localbusiness',
 name:'Photo Party City',url:'https://photopartycity.com/',telephone:'+1-909-403-7143',email:'hello@photopartycity.com',
 image:'https://photopartycity.com/media/52b598863a8e1582.png',
 address:{'@type':'PostalAddress',streetAddress:'3827 Wacker Dr.',addressLocality:'Mira Loma',addressRegion:'CA',postalCode:'91752',addressCountry:'US'},
 areaServed:{'@type':'GeoCircle',name:'Event locations within 45 miles of Mira Loma, California',geoRadius:'72420.48',geoMidpoint:{'@type':'Place',name:'Mira Loma, California',address:{'@type':'PostalAddress',addressLocality:'Mira Loma',addressRegion:'CA',addressCountry:'US'}}},
 openingHoursSpecification:[{'@type':'OpeningHoursSpecification',dayOfWeek:['Monday','Tuesday','Wednesday','Thursday','Friday'],opens:'09:00',closes:'17:00'}],
 description:'Photo booth rentals for weddings, parties, and corporate events within 45 miles of Mira Loma, California. Coverage and final charges are confirmed for your exact event address.'
};
