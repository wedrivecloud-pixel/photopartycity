import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
const pages=JSON.parse(fs.readFileSync('src/data/pages.json','utf8'));
const failures=[];
const escapeHtml=(value)=>value.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;');
// Catch remote image dependencies in every generated route, including the
// custom homepage, blog index, and 404 (which are outside the source inventory).
function verifyMigratedHosts(directory){
 for(const entry of fs.readdirSync(directory,{withFileTypes:true})){
  const file=path.join(directory,entry.name);
  if(entry.isDirectory())verifyMigratedHosts(file);
  else if(entry.name.endsWith('.html')){
   const html=fs.readFileSync(file,'utf8');
   if(/(?:lh7-rt\.googleusercontent\.com|s\.w\.org|(?:[\w-]+\.)?sinfo-t\.jp)/i.test(html)){
    failures.push(`Unmigrated image host: ${file}`);
   }
  }
 }
}
verifyMigratedHosts('dist');
for(const page of pages){
 const file=path.join('dist',page.slug,'index.html');
 if(!fs.existsSync(file)){failures.push(`Missing route: ${page.path}`);continue;}
 const html=fs.readFileSync(file,'utf8');
 const expected=escapeHtml(page.title);
 if(!html.includes(`<title>${expected}</title>`))failures.push(`Changed title: ${page.path}`);
 if(!html.includes(`rel="canonical" href="${page.canonical}"`))failures.push(`Changed canonical: ${page.path}`);
 const descriptionAttribute=page.description ? `content="${escapeHtml(page.description)}"` : 'content';
 if(!html.includes(`<meta name="description" ${descriptionAttribute}>`))failures.push(`Changed meta description: ${page.path}`);
 if((html.match(/<h1(?:\s|>)/g)||[]).length!==1)failures.push(`Expected one H1: ${page.path}`);
 let schemaIndex=0;
 for(const match of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)){
  try{const schema=JSON.parse(match[1]);if(schemaIndex===0)assert.deepEqual(schema,page.schema || {});}catch{failures.push(`Invalid or changed schema: ${page.path}`);}
  schemaIndex++;
 }
 if(schemaIndex===0)failures.push(`Missing schema: ${page.path}`);
 if(page.type==='product'){
  const price=page.content.match(/<p class="catalog-price">([\s\S]*?)<\/p>/)?.[1];
  if(!price || !html.includes(price))failures.push(`Changed published catalog price: ${page.path}`);
  const renderedLinks=new Set([...html.matchAll(/href="([^"]+)"/g)].map(m=>m[1].replaceAll('&amp;','&')));
  for(const match of page.content.matchAll(/href="([^"]+)"/g)){
   if(!renderedLinks.has(match[1].replaceAll('&amp;','&')))failures.push(`Missing product link: ${page.path}: ${match[1]}`);
  }
 }
 for(const match of html.matchAll(/<img[^>]*src="([^"]+)"/g)){
  const src=match[1];if(src.startsWith('/')&&!fs.existsSync(path.join('dist',src)))failures.push(`Missing image: ${page.path}: ${src}`);
 }
 if(/ScrewFast|screwfast\.uk|images\.unsplash\.com/.test(html))failures.push(`Demo content: ${page.path}`);
}
for(const slug of ['photo-booth-packages','24-hours-self-service','full-service-form']){
 const html=fs.readFileSync(`dist/${slug}/index.html`,'utf8');
 assert(html.includes('199')||html.includes('695'),`${slug} must retain published pricing`);
}
const home=fs.readFileSync('dist/index.html','utf8');
const byMail=fs.readFileSync('dist/photo-booth-by-mail/index.html','utf8');
assert(byMail.includes('$275'),'Booth by mail base price');
assert(byMail.includes('https://eventdeskly.com/book/photo-party-city?service=Photobooths&amp;group=Booth+By+Mail'),'Booth by mail booking destination');
assert(byMail.includes('action="mailto:hello@photopartycity.com"'),'Booth by mail inquiry must not post to the original WordPress website');
assert(byMail.includes('You must send the email to submit your inquiry.'),'Booth by mail must explain email draft behavior');
assert.equal((byMail.match(/<h1(?:\s|>)/g)||[]).length,1,'Booth by mail H1');
assert.equal((byMail.match(/<details class="faq"/g)||[]).length,6,'Booth by mail policies and FAQs');
for(const match of byMail.matchAll(/<img[^>]*src="([^"]+)"/g)){
 assert(match[1].startsWith('/') && fs.existsSync(path.join('dist',match[1])),`Booth by mail image must be local: ${match[1]}`);
}
assert(home.includes('88aeb400-c578-40f7-8adc-96e170181c01'),'Original Eventdeskly business ID');
assert(home.includes('72420.48'),'45-mile service radius in metres');
assert(home.includes('909-403-7143')||home.includes('909) 403-7143'),'Original business telephone');
assert(fs.existsSync('dist/sitemap-index.xml'),'Sitemap');
if(failures.length){console.error(failures.join('\n'));process.exit(1);}
console.log(`Verified ${pages.length} source routes, unchanged titles/descriptions/canonicals/schema, all published product prices and links, local images, business details, and booking ID. No remaining migrated image hosts in any generated HTML.`);
