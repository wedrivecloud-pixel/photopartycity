import {addons,fullServiceTiers,mailRental,money,selfServiceTiers} from './rentals';

export type OccasionKey = 'birthday' | 'quinceanera' | 'graduation' | 'school';

interface OccasionPoint {
  title: string;
  copy: string;
}

export interface OccasionEvent {
  key: OccasionKey;
  slug: string;
  navLabel: string;
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  intro: string;
  hero: {src:string;alt:string;width:1200;height:900};
  fullServiceImage: {src:string;alt:string;width:1200;height:800;caption:string};
  fitHeading: string;
  fitPoints: OccasionPoint[];
  styleHeading: string;
  styleCopy: string[];
  supportImage: {src:string;alt:string;width:1200;height:800};
  planningHeading: string;
  planningIntro: string;
  steps: OccasionPoint[];
  brief: string[];
  faqs: {question:string;answer:string}[];
  ctaHeading: string;
}

/** Event-specific planning copy; prices and package details stay in the shared rental data. */
export const occasionEvents: OccasionEvent[] = [
  {
    key:'birthday',
    slug:'birthday-photo-booth-rental',
    navLabel:'Birthdays',
    title:'Birthday Photo Booth Rentals | Photo Party City',
    description:'Plan a birthday photo booth for friends and family. Compare attended prints and 24-hour self-service rentals near Mira Loma, California.',
    eyebrow:'Birthday photo booth rentals',
    heading:'Another year. A whole lot of good photos.',
    intro:'Bring your favorite people together for a milestone, a backyard gathering or a birthday night out. Choose an attended booth with prints or a local self-service rental you manage throughout the party.',
    hero:{
      src:'/media/occasions/birthday.webp',
      alt:'Illustrative birthday celebration with three adult friends beside a Helio Sport photo booth',
      width:1200,height:900,
    },
    fullServiceImage:{
      src:'/media/occasions/birthday-prints.webp',
      alt:'Illustrative patio birthday with three adult friends holding photo strips and a small print',
      width:1200,height:800,
      caption:'Illustrative birthday print experience.',
    },
    fitHeading:'A photo corner for your kind of birthday.',
    fitPoints:[
      {title:'Bring the guest list together',copy:'Family, old friends and new faces can share a moment in front of the camera. Think about the age range of your guests when choosing props and planning the photo corner.'},
      {title:'Choose how you want to host',copy:'An attended package includes someone to help with the booth during your booked hours. With self-service, a trusted helper can manage the booth while you enjoy the celebration.'},
      {title:'Make the keepsake feel personal',copy:'A birthday name, a favorite color or a party theme can guide the photo design. Confirm your template, physical backdrop and any printing options with your package.'},
    ],
    styleHeading:'Make it feel like their party.',
    styleCopy:[
      'Start with the person you’re celebrating. A simple color palette, a playful prop selection or a photo design with their name can tie the booth into the rest of the birthday without making the setup complicated.',
      'For a mixed-age guest list, leave a clear route to the photo corner and choose props everyone can enjoy. If you want guests to take prints home, full-service packages include printing; self-service printing and a physical backdrop are optional additions.',
    ],
    supportImage:{
      src:'/media/homepage/birthday.webp',
      alt:'Illustrative birthday group of four friends smiling with party props in front of lilac draping',
      width:1200,height:800,
    },
    planningHeading:'Give the booth a place in the party.',
    planningIntro:'A few details help the photo corner fit around food, cake and the people you’re celebrating. Local rentals serve event locations within 45 miles of Mira Loma, with arrangements confirmed for your exact address.',
    steps:[
      {title:'Share the plan and choose your style',copy:'Send the date, address, guest count, age range and party hours. Choose attended coverage for a defined part of the celebration, or a 24-hour digital self-service rental with pickup and return agreed in advance.'},
      {title:'Leave room for the photo corner',copy:'Choose a spot with space for the booth, backdrop and a small queue. Ask the venue about power and access; discuss shelter and weather plans before choosing an outdoor location.'},
      {title:'Work around the cake moment',copy:'Tell us when the main birthday activities happen so booked operating hours and setup access can be planned around them. Your proposal confirms the final arrangements.'},
    ],
    brief:[
      'Event date, full address and indoor or outdoor setting',
      'Guest count and age range',
      'Party theme, preferred backdrop and whether you want prints',
      'Venue access window, power location and cake or entertainment schedule',
    ],
    faqs:[
      {question:'Which booth works well for a milestone birthday?',answer:'Start with how you want to host. Full service includes an attendant and printing during booked booth time. Self-service gives you a 24-hour digital rental to manage with a helper. Compare the booth model and display as well as the time included; your proposal confirms availability and selected extras.'},
      {question:'Can we have prints at a self-service birthday party?',answer:`Yes, printing is an optional addition. Printer rental is ${money(addons.printer)} and a media kit for 100 4×6 prints is ${money(addons.mediaKit)}. A ${selfServiceTiers[0].name} rental plus those two items totals ${money(selfServiceTiers[0].price+addons.printer+addons.mediaKit)} before other applicable charges. Confirm the print quantity and transport arrangements in your proposal.`},
      {question:'Can the birthday photos match our party theme?',answer:`Tell us the name, colors and theme you want to use. Full-service photo packages include a personalized photo design. For self-service, a custom-designed template is an optional ${money(addons.customTemplate)} addition; share your design details early so the team can confirm the preparation time and selections.`},
      {question:'What should we plan for a party with children and adults?',answer:'Choose age-appropriate props, leave a clear path to the booth and nominate an adult to help younger guests and manage the queue. Let us know the guest mix when requesting your rental so equipment placement and your preferred photo experience can be discussed before booking.'},
      {question:'What if our birthday party is outside the local area?',answer:`Local full-service and self-service rentals serve event locations within 45 miles of Mira Loma, California. For a party elsewhere in the contiguous United States, Photo Booth By Mail starts at ${money(mailRental.price)}. Confirm delivery timing, available options and return arrangements for your event before booking.`},
    ],
    ctaHeading:'Make this birthday one for the photo album.',
  },
  {
    key:'quinceanera',
    slug:'quinceanera-photo-booth-rental',
    navLabel:'Quinceañeras',
    title:'Quinceañera Photo Booth Rentals | Photo Party City',
    description:'Plan a quinceañera photo booth around your family timeline. Explore attended prints, personalized photo designs and self-service rentals near Mira Loma.',
    eyebrow:'Quinceañera photo booth rentals',
    heading:'Her celebration. Everyone in the frame.',
    intro:'Make room for photos with parents, family and friends between the celebration’s big moments. Choose an attended booth with printed keepsakes, or a self-service rental your family can manage.',
    hero:{
      src:'/media/occasions/quinceanera.webp',
      alt:'Illustrative quinceañera scene with the honoree and her parents beside a Posh Pro photo booth',
      width:1200,height:900,
    },
    fullServiceImage:{
      src:'/media/occasions/quinceanera-prints.webp',
      alt:'Illustrative quinceañera honoree and family smiling over a small photo print and a photo strip',
      width:1200,height:800,
      caption:'Illustrative quinceañera print experience.',
    },
    fitHeading:'Plan around the people and moments that matter.',
    fitPoints:[
      {title:'Family photos, at their own pace',copy:'A dedicated photo corner gives relatives and friends a place to gather. Leave enough space for group photos and for guests to approach comfortably in formal clothing.'},
      {title:'A keepsake with her style',copy:'Use the celebration’s colors and the honoree’s name as a starting point for the photo design. Confirm the design, backdrop and props alongside your chosen package.'},
      {title:'Coverage that fits the reception',copy:'Share the entrance, dinner, dances and cake timeline before choosing booth hours. An attended package lets the family hand booth operation to an attendant during the booked period.'},
    ],
    styleHeading:'Carry her colors into the photo corner.',
    styleCopy:[
      'A quinceañera often brings several generations together. Choose a backdrop and prop theme that suits the honoree and the family, then keep the photo design simple enough for every group shot to feel connected to the celebration.',
      'Printed photo keepsakes are included with full-service photo packages. If your family prefers a self-service rental, discuss optional printing and a physical backdrop before booking; the base self-service experience is digital.',
    ],
    supportImage:{
      src:'/media/homepage/quinceanera.webp',
      alt:'Illustrative quinceañera portrait of an honoree in a lilac dress with family and friends',
      width:1200,height:800,
    },
    planningHeading:'Fit the booth into your family’s timeline.',
    planningIntro:'Start with the reception schedule and the person coordinating it. Local rentals serve event locations within 45 miles of Mira Loma; the proposal confirms coverage and arrangements for your address.',
    steps:[
      {title:'Share your contact and timeline',copy:'Send one family or coordinator contact, the venue address and event date. Include the entrance, meal, dances, speeches and cake schedule so booth coverage can be chosen around the important moments.'},
      {title:'Confirm the look and location',copy:'Discuss the honoree’s name, celebration colors, backdrop and photo design. Keep the booth route clear of the dance floor and formal entrance path.'},
      {title:'Agree access and the final plan',copy:'Confirm the venue’s setup window, power location and end-of-night collection details. Your proposal sets out the selected package, extras and final charges.'},
    ],
    brief:[
      'Date, reception venue and one family or coordinator contact',
      'Guest count and the entrance, dance and cake schedule',
      'Honoree’s name, celebration colors and photo design preferences',
      'Venue access times, available power and preferred booth location',
    ],
    faqs:[
      {question:'When should the booth run during a quinceañera?',answer:'Use your reception timeline to choose the operating window. Think about when family photos, dinner, formal dances and the cake happen, and when guests will have time to visit the booth. Send the schedule with your inquiry; your proposal confirms the booked booth hours and setup arrangements.'},
      {question:'Can the photo design include the honoree’s name and colors?',answer:'Full-service photo packages include a personalized photo design. Share the honoree’s preferred name, celebration colors and any artwork you want reviewed. Ask about preparation timing before booking, and confirm the final design details with the team rather than assuming a specific background or graphic is included.'},
      {question:'What if our reception needs more booth time?',answer:`Full-service packages include ${fullServiceTiers[0].hours}, ${fullServiceTiers[1].hours} or ${fullServiceTiers[2].hours} hours depending on the tier. Extra attended time is listed at ${money(addons.extraHour)} per hour, subject to availability. Tell us your planned timeline so any added coverage and final charges can be confirmed in the proposal.`},
      {question:'Would self-service suit a family-run quinceañera?',answer:'Self-service can suit a celebration with a trusted adult available to collect, set up, manage and return the booth. The rental period is 24 hours, and printing and a physical backdrop are optional. Choose full service if you want an attendant handling the booth during the selected hours; confirm each arrangement before booking.'},
      {question:'Can you bring a booth to our reception venue?',answer:'Local rentals serve event locations within 45 miles of Mira Loma, California. Send the full venue address, access window and any equipment requirements so coverage, setup and applicable charges can be reviewed. Photo Booth By Mail is a separate self-setup option for celebrations elsewhere in the contiguous United States.'},
    ],
    ctaHeading:'Save a little space for everyone’s favorite photos.',
  },
  {
    key:'graduation',
    slug:'graduation-photo-booth-rental',
    navLabel:'Graduations',
    title:'Graduation Photo Booth Rentals | Photo Party City',
    description:'Celebrate a graduation with photo booth keepsakes for friends and family. Plan an open house or attended party near Mira Loma, California.',
    eyebrow:'Graduation photo booth rentals',
    heading:'One big milestone. Plenty of good company.',
    intro:'Give the graduate and their guests a place to gather for one more photo. Plan a hosted celebration with attended prints, or choose digital self-service for a come-and-go open house.',
    hero:{
      src:'/media/occasions/graduation.webp',
      alt:'Illustrative graduation celebration with three adult graduates beside a Lumia M Pro photo booth',
      width:1200,height:900,
    },
    fullServiceImage:{
      src:'/media/occasions/graduation-prints.webp',
      alt:'Illustrative garden party with three adult graduates in caps and gowns holding photo keepsakes',
      width:1200,height:800,
      caption:'Illustrative graduation print experience.',
    },
    fitHeading:'A photo moment for every arrival.',
    fitPoints:[
      {title:'Welcome the open-house crowd',copy:'Guests may arrive at different times after a ceremony. Think about the main arrival window before choosing a defined attended session or a 24-hour self-service rental.'},
      {title:'Celebrate the people behind the milestone',copy:'Make room for photos with friends, siblings, parents and mentors. Choose a location where small groups can pause without blocking the food table or entry.'},
      {title:'Keep the next chapter personal',copy:'The graduate’s name, graduation year and a chosen color palette can guide the photo design. Ask about the available design and printing options for your package.'},
    ],
    styleHeading:'Their name. Their colors. Their next chapter.',
    styleCopy:[
      'A graduation photo corner can be simple: a backdrop that fits your party, a few age-appropriate props and room for the people who want a photo with the graduate. Bring a cap if you want it in the pictures, and leave a safe place nearby for belongings.',
      'For printed keepsakes, choose a full-service photo package or discuss adding a printer and media to a self-service rental. Digital sharing needs an internet connection; confirm the connection plan for your event location before the day.',
    ],
    supportImage:{
      src:'/media/homepage/graduation.webp',
      alt:'Illustrative group of three graduates in caps and gowns laughing over a printed photo strip',
      width:1200,height:800,
    },
    planningHeading:'Plan for the ceremony and the arrivals after it.',
    planningIntro:'A useful booth schedule starts with when guests can actually join the party. Local rentals serve event locations within 45 miles of Mira Loma, with your exact address and transport arrangements confirmed in the proposal.',
    steps:[
      {title:'Match the rental to guest arrivals',copy:'Share the ceremony timing, party address and arrival pattern. Choose attended coverage for the main gathering, or arrange self-service with a responsible helper for a come-and-go open house.'},
      {title:'Prepare the photo corner',copy:'Confirm a suitable location, power and an internet plan for digital sharing. Discuss an outdoor setup and weather protection before placing equipment on a patio or lawn.'},
      {title:'Confirm collection and return',copy:'Agree setup access for full service or pickup and return times for self-service. Check that those arrangements fit your ceremony travel and hosting commitments.'},
    ],
    brief:[
      'Graduation date, party address and ceremony timing',
      'Guest count and whether the party is an open house or fixed session',
      'Graduate’s preferred name, year, colors and printing preference',
      'Power, internet, setup access and pickup or return availability',
    ],
    faqs:[
      {question:'Which rental suits a graduation open house?',answer:'A 24-hour self-service rental can suit staggered guest arrivals if you have someone to collect, operate and return the equipment. Full service works for a defined part of the celebration when you want an attendant and included prints. Plan around the main guest window and confirm the arrangements in your proposal.'},
      {question:'Can we include the graduation year on our photos?',answer:'Tell the team the graduate’s name, year and preferred colors when discussing the photo design. Full-service packages include a personalized design; a custom-designed template is an optional addition for self-service. Share any artwork early and confirm preparation timing and final selections before your event.'},
      {question:'How do we budget for graduation photo keepsakes?',answer:`Digital self-service starts with ${selfServiceTiers[0].name} at ${money(selfServiceTiers[0].price)} for 24 hours. Full-service photo packages start with ${fullServiceTiers[0].name} at ${money(fullServiceTiers[0].price)} for ${fullServiceTiers[0].hours} hours and include printing. Self-service printing, a physical backdrop and delivery are additional options; your proposal confirms the final total.`},
      {question:'Can guests receive digital photos during the party?',answer:'Digital sharing is part of the digital photo booth experience, and sending photos needs an internet connection. Ask the venue or host about reliable Wi-Fi where the booth will stand. Confirm the sharing setup with the team, especially if the graduation party is outdoors or away from the main building.'},
      {question:'Is there an option for graduates celebrating in another state?',answer:`Photo Booth By Mail serves the contiguous United States and starts at ${money(mailRental.price)}. It is a self-setup rental, so plan time to receive the booth before your celebration and return it afterward. Local full-service and self-service rentals are available for event locations within 45 miles of Mira Loma, California.`},
    ],
    ctaHeading:'Mark the milestone with everyone who helped you get here.',
  },
  {
    key:'school',
    slug:'school-event-photo-booth-rental',
    navLabel:'School events',
    title:'School Event Photo Booth Rentals | Photo Party City',
    description:'Plan a photo booth for a school dance, banquet or celebration. Review attended and self-service options, setup access and coordinator details near Mira Loma.',
    eyebrow:'School event photo booth rentals',
    heading:'A shared memory from a big school moment.',
    intro:'From dances and banquets to end-of-year celebrations, give classmates and club groups a place to make memories together. Choose attended prints or a digital self-service booth with an organizer to run it.',
    hero:{
      src:'/media/occasions/school.webp',
      alt:'Illustrative school celebration with three young adult guests beside a Helio Sport photo booth',
      width:1200,height:900,
    },
    fullServiceImage:{
      src:'/media/occasions/school-prints.webp',
      alt:'Illustrative school-event guests sharing printed photo keepsakes',
      width:1200,height:800,
      caption:'Illustrative school-event print experience.',
    },
    fitHeading:'A photo moment for your school community.',
    fitPoints:[
      {title:'Make room for every group',copy:'Classmates, clubs and friends can gather for photos between the event’s main activities. Share your guest count and schedule so the booth fits your celebration.'},
      {title:'A photo corner with room to move',copy:'Plan the booth, backdrop and queue together. Keep entrance routes and exits clear, and ask the venue contact to confirm power, access and any equipment placement rules.'},
      {title:'A look that fits the occasion',copy:'Bring your school colors, event theme and approved artwork into the photo design. Choose props that fit the dance, banquet or celebration you have planned.'},
    ],
    styleHeading:'Put a little school spirit in every photo.',
    styleCopy:[
      'A dance, club banquet and end-of-year party each have their own look. Match the photo design to your colors and event theme, and leave room for classmates to get together in the frame.',
      'Full service includes an attendant and printed keepsakes during booked hours. A teacher or parent volunteer can manage a digital self-service rental; printing and a physical backdrop are optional extras.',
    ],
    supportImage:{
      src:'/media/homepage/school.webp',
      alt:'Illustrative group of four young guests posing in formal clothes at a school celebration with lilac decorations',
      width:1200,height:800,
    },
    planningHeading:'Build the booth into the event brief.',
    planningIntro:'Share the event date, guest count and venue so we can help fit the booth into your schedule. Local rentals cover event locations within 45 miles of Mira Loma, with arrangements confirmed for your address.',
    steps:[
      {title:'Gather the coordinator’s details',copy:'Send the date, venue address, guest count and coordinator contact. Tell us whether you are planning a dance, banquet, club gathering or another school celebration.'},
      {title:'Choose a spot for group photos',copy:'Plan the booth and backdrop together, with room for friends to gather and a queue beside the main activity area. Confirm power and access with your venue contact.'},
      {title:'Confirm access and operation',copy:'Choose booth hours around the event’s main activities. With self-service, agree pickup and return and name the adult who will manage the booth. Your proposal confirms equipment and transport arrangements.'},
    ],
    brief:[
      'Event date, venue address, age group and expected attendance',
      'Coordinator contact, event theme and approved design artwork',
      'Printing preference and the organizer managing a self-service booth',
      'Load-in route, power, event schedule and collection or return arrangements',
    ],
    faqs:[
      {question:'What should a school coordinator send with an inquiry?',answer:'Send the date, venue address, guest count, event schedule and coordinator contact. Add your theme, preferred photo design and whether you want printed keepsakes. The team will confirm the package and final arrangements in your booking proposal.'},
      {question:'Can a teacher or parent volunteer manage a self-service booth?',answer:'Yes. A designated adult can collect, set up, operate and return a self-service booth as agreed. If you would prefer someone to run the booth during your booked hours, choose a full-service package with an attendant.'},
      {question:'Can the photo design match our school event?',answer:`Yes. Send your event theme, colors and approved artwork. Personalized photo design is included with full-service photo packages. For self-service, a custom-designed template is an optional ${money(addons.customTemplate)} addition; confirm the design details before event day.`},
      {question:'Are printed keepsakes included for a dance or banquet?',answer:`Full-service photo packages include printing during booked booth time. Self-service is digital at the base rate: optional printer rental is ${money(addons.printer)} and a media kit for 100 4×6 prints is ${money(addons.mediaKit)}. Share attendance and your printing preference so the equipment, quantities and final charges can be confirmed.`},
      {question:'Can you set up at our school or another event venue?',answer:'Local rentals serve event locations within 45 miles of Mira Loma, California, subject to the arrangements confirmed for your full address. Ask the venue to review equipment access, power, floor placement and setup timing. For a school event elsewhere in the contiguous United States, discuss the separate self-setup Booth By Mail option and its delivery and return schedule.'},
    ],
    ctaHeading:'Give your school celebration a photo moment of its own.',
  },
];

export const occasionByKey = Object.fromEntries(
  occasionEvents.map(event=>[event.key,event]),
) as Record<OccasionKey,OccasionEvent>;

/** Shared event destinations for the header, footer and rental navigation. */
export const eventNavigation: {name:string;href:string}[] = [
  {name:'Weddings',href:'/wedding-photo-booth-rental/'},
  {name:'Birthdays',href:`/${occasionByKey.birthday.slug}/`},
  {name:'Corporate',href:'/corporate-photo-booth-rental/'},
  {name:'Quinceañeras',href:`/${occasionByKey.quinceanera.slug}/`},
  {name:'Graduations',href:`/${occasionByKey.graduation.slug}/`},
  {name:'School events',href:`/${occasionByKey.school.slug}/`},
];
