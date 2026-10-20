/** Local planning guidance. Venue rules and delivery are confirmed for the exact address. */
export interface RentalCity {
  slug: string;
  name: string;
  zip: string;
  officialUrl: string;
  planning: string[];
  planningTitles: string[];
  venue: string;
  nearby: string[];
}

export const rentalCities: RentalCity[] = [
  {
    slug: 'fontana', name: 'Fontana', zip: '92335',
    officialUrl: 'https://rentals.fontanaca.gov/158/Rental-Information',
    planningTitles: ['A home celebration', 'A family milestone', 'A rented room'],
    planning: [
      'A 24-hour self-service rental lets a designated helper run the booth throughout the celebration. Tell us about outdoor placement so we can discuss cover, weather, power, and sharing requirements.',
      'For a quinceañera, wedding, or birthday, coordinate the photo design with your event colors. Leave booth time around dinner, speeches, and formal dances.',
      'Share the venue’s loading route, approved booth position, and cleanup deadline. Setup and removal need to fit inside the access window your coordinator approves.',
    ],
    venue: 'Hosting at a Fontana community facility? The City’s rental directory includes the Jessie Turner Center and other reservable spaces. Ask the venue coordinator where the booth may go, when equipment can arrive, and which vendor documents they need. Send us the exact address and access details before confirming delivery.',
    nearby: ['rancho-cucamonga', 'riverside', 'ontario', 'jurupa-valley', 'san-bernardino', 'eastvale'],
  },
  {
    slug: 'riverside', name: 'Riverside', zip: '92501',
    officialUrl: 'https://www.riversideca.gov/park_rec/facilities-parks/indoor-facilities/ballrooms',
    planningTitles: ['Reception timing', 'Company gatherings', 'Family parties'],
    planning: [
      'Choose booth hours around the moments when guests can take photos. Cocktail hour, dinner, speeches, and dancing help shape the right attended coverage.',
      'Share your event schedule, expected guest count, and branding requests. Arrange the booth around presentation breaks and social time, with room for a guest queue.',
      'Decide whether you want an attendant for the busiest hours or a digital booth your designated helper manages for 24 hours. Printing is optional with self-service.',
    ],
    venue: 'Riverside’s municipal ballroom information says venue rental time must cover decorating, the event, and cleanup. Build your booth arrival and removal arrangements around the access time your venue approves. For a gathering at Fairmount Park’s Izaak Walton Building, or another indoor venue, include the booth and guest queue in the room plan and confirm vendor requirements with the coordinator.',
    nearby: ['jurupa-valley', 'fontana', 'corona', 'norco', 'eastvale', 'san-bernardino'],
  },
  {
    slug: 'rancho-cucamonga', name: 'Rancho Cucamonga', zip: '91730',
    officialUrl: 'https://www.cityofrc.us/everything-we-do/event-space-park-shelter-reservations',
    planningTitles: ['Make space for photos', 'Choose your camera', 'Coordinate the schedule'],
    planning: [
      'Include the booth, backdrop, and room for guests in your floor plan. Keep the queue clear of entrances, dining areas, and the dance floor.',
      'Compare the Helio Sport iPad camera, Lumia M Pro DSLR option, and Posh Pro display. Choose the capture and presentation features that fit your celebration.',
      'Confirm arrival access and the venue’s removal deadline separately from guest-facing booth hours. Share any required vendor documents before booking.',
    ],
    venue: 'Planning a gathering at Central Park’s Goldy S. Lewis Community Center, the James L. Brulte Center, or the Victoria Gardens Cultural Center? The City lists these facilities in its event-space directory. Central Park’s room guide notes that added equipment can reduce seating space, so include the booth, backdrop, and guest queue in your layout before final approval.',
    nearby: ['upland', 'ontario', 'fontana', 'chino', 'eastvale', 'jurupa-valley'],
  },
  {
    slug: 'ontario', name: 'Ontario', zip: '91761', officialUrl: 'https://www.ontarioca.gov/',
    planningTitles: ['Room and loading access', 'A celebration with prints', 'A booth you manage'],
    planning: [
      'For a hotel, reception room, or meeting space, ask your coordinator about the loading entrance, elevators, room location, and equipment access window.',
      'Attended packages include a personalized photo design and printing during your booked hours. Share your names, colors, or approved company artwork with the team.',
      'Self-service gives you 24 hours with the booth. Choose a designated helper, arrange pickup and return, and confirm internet and any optional printing requirements.',
    ],
    venue: 'For your Ontario venue, confirm the exact room and address before arranging the rental. Ask the venue contact to approve the booth location, available power, and guest queue. Share loading instructions, stairs or elevator access, and the setup and removal deadlines with our team. If you are using a City facility, check its current rules directly with the City and facility coordinator.',
    nearby: ['rancho-cucamonga', 'upland', 'chino', 'eastvale', 'fontana', 'jurupa-valley'],
  },
  {
    slug: 'san-bernardino', name: 'San Bernardino', zip: '92401', officialUrl: 'https://sanbernardino.gov/',
    planningTitles: ['Match the gathering', 'Coordinate venue access', 'Plan for sharing'],
    planning: [
      'A family celebration, school gathering, and company event each have different busy periods. Share when guests will be free to use the booth and who will manage it.',
      'Ask about the approved booth area and the route from loading to the room. Confirm any stairs, limited parking, vendor documents, and arrival restrictions.',
      'Tell us about venue internet access and your preferred digital sharing. If prints are part of the plan, compare attended packages with self-service print extras.',
    ],
    venue: 'For a San Bernardino reception room, private venue, or community space, confirm the booking and vendor requirements with its coordinator. Request a level booth position with suitable power and room for guests to queue. Send our team the full address, approved access times, and any indoor or outdoor placement details. The official City website is a starting point for City-managed facility information.',
    nearby: ['fontana', 'riverside', 'rancho-cucamonga', 'jurupa-valley', 'ontario', 'eastvale'],
  },
  {
    slug: 'corona', name: 'Corona', zip: '92879', officialUrl: 'https://www.coronaca.gov/',
    planningTitles: ['A reception timeline', 'A party at home', 'A clear rental plan'],
    planning: [
      'Choose booth hours around dinner, speeches, and dancing. Send the venue access window separately so arrival and removal can be planned before booking.',
      'Keep the booth and queue clear of doors and food service. If you are considering outdoor placement, share the cover, surface, power, and weather exposure.',
      'Decide whether your team will manage a digital booth or you would like an attendant and prints. Request a proposal that includes selected extras and delivery arrangements.',
    ],
    venue: 'Ask your Corona venue contact to approve the booth position and access route before finalizing the rental. Share the exact address, room, loading or parking instructions, and removal deadline. For an outdoor or City-managed space, confirm current event and vendor rules with the responsible coordinator; do not assume a booth can be set up in every area.',
    nearby: ['norco', 'eastvale', 'riverside', 'jurupa-valley', 'chino', 'ontario'],
  },
  {
    slug: 'eastvale', name: 'Eastvale', zip: '92880', officialUrl: 'https://www.eastvaleca.gov/',
    planningTitles: ['A home or community party', 'Keepsakes for guests', 'Pickup or delivery'],
    planning: [
      'Plan a level booth position, suitable power, and a clear guest queue. Share outdoor placement details so equipment and weather requirements can be reviewed.',
      'Choose attended printing for a guided photo experience, or keep a self-service rental digital. Optional print equipment and media are separate from self-service base rates.',
      'Arrange self-service pickup and return in Mira Loma, or ask for delivery, setup, and collection in your proposal. Exact coverage is confirmed for your event address.',
    ],
    venue: 'For an Eastvale event at a private home or reservable community space, check the approved equipment area, power, guest flow, and access hours with the host or facility coordinator. Send any vendor documentation and loading instructions to our team before booking. Use the official City website to find current City information, and confirm facility-specific rules with the operator of your chosen venue.',
    nearby: ['jurupa-valley', 'norco', 'corona', 'ontario', 'chino', 'riverside'],
  },
  {
    slug: 'upland', name: 'Upland', zip: '91786', officialUrl: 'https://uplandca.gov/',
    planningTitles: ['Reception room layout', 'The right operating hours', 'Your photo design'],
    planning: [
      'Include the booth, backdrop, and guests in your room layout. Ask the venue to approve the position and keep the queue away from entrances and dining service.',
      'For attended coverage, focus on when guests will be ready for photos. A self-service rental offers 24 hours with a designated helper running the booth.',
      'Share event names, colors, or approved brand artwork. Attended packages include personalized print design; self-service offers premade templates and optional custom design.',
    ],
    venue: 'For an Upland venue, ask about the loading route, stairs or elevators, available power, and approved setup and removal times. Share the exact room and address with our team so equipment access can be reviewed. If you are reserving a City-managed room, confirm its current rental and vendor conditions directly with the facility coordinator through official City information.',
    nearby: ['rancho-cucamonga', 'ontario', 'chino', 'fontana', 'eastvale', 'jurupa-valley'],
  },
  {
    slug: 'jurupa-valley', name: 'Jurupa Valley', zip: '91752', officialUrl: 'https://www.jurupavalley.gov/',
    planningTitles: ['A nearby pickup', 'Indoor or outdoor plans', 'Room for your guests'],
    planning: [
      'Our pickup address is 3827 Wacker Dr., Mira Loma. Arrange exact pickup and return times with the team, including arrangements for weekend events.',
      'Tell us about the surface, shelter, power, and internet at the proposed booth location. Outdoor suitability needs to be confirmed for the selected setup.',
      'Plan space for people to pose and queue without blocking entrances or food service. Share your guest count and the busiest part of the event schedule.',
    ],
    venue: 'For your Jurupa Valley event, confirm the venue address and booth location before arranging pickup or delivery. Ask the host or venue coordinator about power, loading access, permitted equipment, and any setup or removal deadline. If the space is managed by a public agency or separate facility operator, confirm its current vendor requirements directly; the official City website provides local information.',
    nearby: ['eastvale', 'riverside', 'fontana', 'norco', 'ontario', 'corona'],
  },
  {
    slug: 'chino', name: 'Chino', zip: '91710', officialUrl: 'https://www.cityofchino.org/',
    planningTitles: ['A family celebration', 'The venue floor plan', 'A predictable proposal'],
    planning: [
      'Coordinate the booth window around meals, cake, and formalities. Choose attended prints for guest keepsakes or a digital booth managed by your designated helper.',
      'Leave room for the booth, backdrop, and guest queue. Ask the venue to confirm power, approved equipment placement, and any outdoor restrictions.',
      'Discuss printing, a physical backdrop, and delivery before booking. A proposal confirms selected extras and any applicable travel or venue-related charges.',
    ],
    venue: 'For a Chino reception, community room, or private event, share the full venue address and the approved booth position. Confirm how equipment can move from parking or loading to the room, including stairs and narrow access. Ask the venue coordinator for access times and required vendor documents. Use the official City website for current City-managed venue information and confirm the details directly with the facility.',
    nearby: ['ontario', 'upland', 'eastvale', 'rancho-cucamonga', 'norco', 'corona'],
  },
  {
    slug: 'norco', name: 'Norco', zip: '92860', officialUrl: 'https://www.norco.ca.us/',
    planningTitles: ['Outdoor placement', 'Weddings and reunions', 'Birthdays and team parties'],
    planning: [
      'Share the proposed event area, surface, available cover, power, and internet. Confirm weather and placement requirements before assuming an outdoor setup will work.',
      'Coordinate photo time with meals and formalities. Attended packages include guest guidance and prints; self-service puts a designated helper in control of a 24-hour rental.',
      'Compare iPad capture, DSLR options, and the Posh Pro display. Discuss your template, sharing preferences, and any physical backdrop or print extras in your proposal.',
    ],
    venue: 'For your Norco event, describe how equipment will move from approved parking or loading to its position. Share any stairs, narrow access, floor changes, or restricted arrival times. Keep room for guests to pose and queue without blocking entrances or food service. Confirm venue rules with your coordinator and final booth, backdrop, power, and sharing requirements with our team; the official City website provides local information.',
    nearby: ['corona', 'eastvale', 'jurupa-valley', 'riverside', 'chino', 'ontario'],
  },
];

export const cities = rentalCities;
export const cityPath = (slug: string) => `/photo-booth-rental-${slug}/`;
export const findCity = (slug: string) => rentalCities.find(city => city.slug === slug.replace(/^photo-booth-rental-/, ''));
