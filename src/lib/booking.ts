import zipPart0 from '../data/zip-centroids/part-0.json' with {type:'json'};
import zipPart1 from '../data/zip-centroids/part-1.json' with {type:'json'};
import zipPart2 from '../data/zip-centroids/part-2.json' with {type:'json'};
const centroidData = {...zipPart0,...zipPart1,...zipPart2};

/** Coordinates are GeoNames ZIP centroids, stored as integer degrees × 10,000. */
const centroids = centroidData as unknown as Record<string, [number, number, string]>;
const contiguousStates = new Set('AL AZ AR CA CO CT DE DC FL GA ID IL IN IA KS KY LA ME MD MA MI MN MS MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI WY'.split(' '));
export const LOCAL_RADIUS_MILES = 45;
export const LOCAL_CENTER_ZIP = '91752';

export type ZipResult = {
  kind: 'local' | 'ship' | 'unsupported' | 'invalid';
  distanceMiles?: number;
  state?: string;
};

export function haversineMiles(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const radians = (degrees: number) => degrees * Math.PI / 180;
  const dLat = radians(lat2 - lat1);
  const dLon = radians(lon2 - lon1);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(radians(lat1)) * Math.cos(radians(lat2)) * Math.sin(dLon / 2) ** 2;
  return 3958.7613 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(Math.max(0, 1 - a)));
}

/** Unknown ZIPs remain unknown: a prefix never substitutes for the centroid check. */
export function classifyZip(value: string): ZipResult {
  const zip = value.trim();
  if (!/^\d{5}$/.test(zip)) return { kind: 'invalid' };
  const location = centroids[zip];
  if (!location) return { kind: 'invalid' };
  const [lat, lon, state] = location;
  if (!contiguousStates.has(state)) return { kind: 'unsupported', state };
  const center = centroids[LOCAL_CENTER_ZIP];
  const distanceMiles = haversineMiles(center[0] / 10000, center[1] / 10000, lat / 10000, lon / 10000);
  return { kind: distanceMiles <= LOCAL_RADIUS_MILES ? 'local' : 'ship', distanceMiles, state };
}

/** Pacific calendar date; no visitor date or ZIP is sent to analytics. */
export function todayPacific(): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Los_Angeles', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
}

export function validEventDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T12:00:00Z`);
  return !Number.isNaN(date.valueOf()) && date.toISOString().slice(0, 10) === value && value >= todayPacific();
}
