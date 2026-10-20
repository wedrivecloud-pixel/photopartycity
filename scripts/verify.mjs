import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {retiredRoutes,isRetired,dedicatedRentalSlugs,usesRentalTemplate} from '../src/data/redesign-routes.ts';
import {fullServiceTiers,selfServiceTiers,bookingLinks,addons,booth360Rates,mailRental} from '../src/data/rentals.ts';
const pages=JSON.parse(fs.readFileSync('src/data/pages.json','utf8'));
const escapeHtml=value=>value.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;');
const failures=[];
const htmlFiles=[];
function walk(directory){for(const entry of fs.readdirSync(directory,{withFileTypes:true})){const file=path.join(directory,entry.name);if(entry.isDirectory())walk(file);else if(entry.name.endsWith('.html'))htmlFiles.push(file);}}
walk('dist');
const redesignPaths=new Set();
for(const page of pages){
 if(isRetired(page.slug))continue;
 const file=path.join('dist',page.slug,'index.html');
 if(!fs.existsSync(file)){failures.push(`Missing route: ${page.path}`);continue;}
 const html=fs.readFileSync(file,'utf8');
 const redesigned=page.slug===''||dedicatedRentalSlugs.includes(page.slug)||usesRentalTemplate(page);
 if(redesigned)redesignPaths.add(file);
 const expectedTitle=page.slug===''?'Photo Booth Rentals in Mira Loma & Nationwide | Photo Party City':page.slug==='photobooth-event-benefits'?'5 Reasons to Have a Photo Booth at Your Event | Photo Party City':page.slug==='contact-us'?'Contact Photo Party City | Photo booth rentals':page.title;
 if(!html.includes(`<title>${escapeHtml(expectedTitle)}</title>`))failures.push(`Unexpected title: ${page.path}`);
 if(!html.includes(`rel="canonical" href="${page.canonical}"`))failures.push(`Changed canonical: ${page.path}`);
 if(page.slug!==''){
  const description=page.slug==='contact-us'?'Call or text Photo Party City at (909) 403-7143. Visit our Mira Loma pickup location or ask about local and shipped photo booth rentals.':page.slug==='photobooth-props'?'Choose photo booth backdrops and prop themes for weddings, parties and corporate events. Plan your rental details with Photo Party City.':page.description;
  const descriptionAttribute=description ? `content="${escapeHtml(description)}"` : 'content';
  if(!html.includes(`<meta name="description" ${descriptionAttribute}>`))failures.push(`Changed meta description: ${page.path}`);
 }
 if(!redesigned){
  const firstSchema=html.match(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/);
  try{assert.deepEqual(JSON.parse(firstSchema?.[1]),page.schema||{});}catch{failures.push(`Changed shop/legacy schema: ${page.path}`);}
  if(html.includes('redesign.'))failures.push(`Rental styles leaked into shop/legacy route: ${page.path}`);
 }
 if(page.type==='product'){
  const price=page.content.match(/<p class="catalog-price">([\s\S]*?)<\/p>/)?.[1];
  if(!price||!html.includes(price))failures.push(`Changed published catalog price: ${page.path}`);
  const links=new Set([...html.matchAll(/href="([^"]+)"/g)].map(m=>m[1].replaceAll('&amp;','&')));
  for(const m of page.content.matchAll(/href="([^"]+)"/g))if(!links.has(m[1].replaceAll('&amp;','&')))failures.push(`Missing product link: ${page.path}`);
 }
}
for(const slug of ['photo-booth-by-mail','check-your-date','types-of-photo-booths','blog']){
 const file=`dist/${slug}/index.html`;assert(fs.existsSync(file),`New rental route ${slug}`);redesignPaths.add(file);
}
for(const file of htmlFiles){
 const html=fs.readFileSync(file,'utf8');
 if((html.match(/<h1(?:\s|>)/g)||[]).length!==1)failures.push(`Expected one H1: ${file}`);
 if(/(?:lh7-rt\.googleusercontent\.com|s\.w\.org|(?:[\w-]+\.)?sinfo-t\.jp)/i.test(html))failures.push(`Unmigrated image host: ${file}`);
 if(/ScrewFast|screwfast\.uk|images\.unsplash\.com/.test(html))failures.push(`Demo content: ${file}`);
 for(const match of html.matchAll(/<img[^>]*src="([^"]+)"/g)){const src=match[1];if(src.startsWith('/')&&!fs.existsSync(path.join('dist',src)))failures.push(`Missing local image: ${file} ${src}`);}
 for(const match of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)){try{JSON.parse(match[1]);}catch{failures.push(`Invalid schema: ${file}`);}}
 if(redesignPaths.has(file)){
  if(/<form[^>]*(?:action="mailto:|data-inquiry-form)/.test(html))failures.push(`Retired email draft form: ${file}`);
  if(/https:\/\/(?:[^/]+\.)?photopartycity\.pages\.dev/.test(html))failures.push(`Preview-domain link in rental content: ${file}`);
  if(!html.includes('72420.48'))failures.push(`Missing LocalBusiness service radius: ${file}`);
  if(!html.includes('909-403-7143')&&!html.includes('909) 403-7143'))failures.push(`Missing contact phone: ${file}`);
 }
}
const redirects=fs.readFileSync('public/_redirects','utf8');
for(const [slug,target] of Object.entries(retiredRoutes)){assert(redirects.includes(`/${slug}/ ${target} 301`),`301 redirect ${slug}`);assert(!fs.existsSync(`dist/${slug}/index.html`),`Retired route must not shadow redirect: ${slug}`);}
assert(redirects.includes('/author/* /blog/ 301'),'Author redirect');
const packages=fs.readFileSync('dist/photo-booth-packages/index.html','utf8');
for(const id of ['fullservice','selfservice','ata-photobooths-packages','rental-planning-links'])assert(packages.includes(`id="${id}"`),`Protected package anchor ${id}`);
assert.deepEqual(fullServiceTiers.map(t=>t.price),[695,895,1095]);assert.deepEqual(selfServiceTiers.map(t=>t.price),[199,350,525]);
assert.deepEqual(booth360Rates,{full:{2:450,3:600,4:750},self:{2:300,3:400,4:550}});assert.equal(mailRental.price,275);assert.equal(addons.mailHotspot,40);
for(const tier of [...fullServiceTiers,...selfServiceTiers])assert(packages.includes(tier.href),`Original package booking URL ${tier.name}`);
assert(bookingLinks.general.includes('88aeb400-c578-40f7-8adc-96e170181c01'));
const mail=fs.readFileSync('dist/photo-booth-by-mail/index.html','utf8');assert(mail.includes(bookingLinks.mail.replaceAll('&','&amp;')),'Mail rental booking link');
const contact=fs.readFileSync('dist/contact-us/index.html','utf8');assert(contact.includes('action="/api/contact"'),'Real contact endpoint');
assert(fs.existsSync('functions/api/contact.ts'),'Cloudflare email handler');assert(fs.existsSync('dist/sitemap-index.xml'),'Sitemap');
if(failures.length){console.error(failures.join('\n'));process.exit(1);}
console.log(`Verified ${htmlFiles.length} generated pages, ${redesignPaths.size} rental routes, preserved catalog prices/links/schema, rental metadata, redirects, booking links, local images and JSON-LD.`);
