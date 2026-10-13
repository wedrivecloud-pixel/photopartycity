import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
const pages=JSON.parse(fs.readFileSync('src/data/pages.json','utf8'));
const failures=[];
for(const page of pages){
 const file=path.join('dist',page.slug,'index.html');
 if(!fs.existsSync(file)){failures.push(`Missing route: ${page.path}`);continue;}
 const html=fs.readFileSync(file,'utf8');
 const expected=page.title.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;');
 if(!html.includes(`<title>${expected}</title>`))failures.push(`Changed title: ${page.path}`);
 if(!html.includes(`rel="canonical" href="${page.canonical}"`))failures.push(`Changed canonical: ${page.path}`);
 if((html.match(/<h1(?:\s|>)/g)||[]).length!==1)failures.push(`Expected one H1: ${page.path}`);
 for(const match of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)){
  try{JSON.parse(match[1]);}catch{failures.push(`Invalid schema: ${page.path}`);}
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
assert(home.includes('88aeb400-c578-40f7-8adc-96e170181c01'),'Original Eventdeskly business ID');
assert(home.includes('72420.48'),'45-mile service radius in metres');
assert(home.includes('909-403-7143')||home.includes('909) 403-7143'),'Original business telephone');
assert(fs.existsSync('dist/sitemap-index.xml'),'Sitemap');
if(failures.length){console.error(failures.join('\n'));process.exit(1);}
console.log(`Verified ${pages.length} source routes, unchanged titles/canonicals, valid JSON-LD, local images, business details, and booking ID.`);
