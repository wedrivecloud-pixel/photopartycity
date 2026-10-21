/** Illustrative scenes made for the rental site; these are not photographs of city venues. */
export interface CityIllustration {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const hero = (slug: string, alt: string): CityIllustration => ({
  src: `/media/cities/${slug}.webp`,
  alt,
  width: 960,
  height: 1200,
});

export const cityHeroImages: Record<string, CityIllustration> = {
  fontana: hero('fontana', 'Illustrative sunny outdoor birthday scene with two friends beside a Helio Sport photo booth'),
  riverside: hero('riverside', 'Illustrative evening garden reception with three guests beside a Lumia M Pro photo booth'),
  'rancho-cucamonga': hero('rancho-cucamonga', 'Illustrative leafy patio celebration with two friends beside a Posh Pro photo booth'),
  ontario: hero('ontario', 'Illustrative modern company party with three coworkers beside a Lumia M Pro photo booth'),
  'san-bernardino': hero('san-bernardino', 'Illustrative indoor graduation celebration with three adults beside a Helio Sport photo booth'),
  corona: hero('corona', 'Illustrative courtyard anniversary celebration with a couple beside a Posh Pro photo booth'),
  eastvale: hero('eastvale', 'Illustrative backyard birthday party with three friends beside a Helio Sport photo booth'),
  upland: hero('upland', 'Illustrative garden wedding scene with a couple beside a Lumia M Pro photo booth'),
  'jurupa-valley': hero('jurupa-valley', 'Illustrative rustic garden party with three friends beside a Helio Sport photo booth'),
  chino: hero('chino', 'Illustrative indoor family banquet with three adults beside a Lumia M Pro photo booth'),
  norco: hero('norco', 'Illustrative rustic courtyard gathering with three friends beside a Posh Pro photo booth'),
};

export const cityServiceImages: Record<'full' | 'self', CityIllustration> = {
  full: {
    src: '/media/cities/full-service.webp',
    alt: 'Illustrative full-service experience with an attendant helping two guests use a Lumia M Pro photo booth',
    width: 1200,
    height: 800,
  },
  self: {
    src: '/media/cities/self-service.webp',
    alt: 'Illustrative self-service experience with two adult friends operating a Helio Sport photo booth',
    width: 1200,
    height: 800,
  },
};
