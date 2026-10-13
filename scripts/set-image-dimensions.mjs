import sharp from 'sharp';
import fs from 'node:fs/promises';
const pages=JSON.parse(await fs.readFile('src/data/pages.json','utf8'));
const files=new Set(pages.flatMap(p=>Array.from(p.content.matchAll(/<img[^>]*src="(\/media\/[^\"]+)"/g),m=>m[1])));
const dimensions=new Map();
for(const src of files){const m=await sharp('public'+src).metadata();if(m.width&&m.height)dimensions.set(src,[m.width,m.height]);}
for(const page of pages){page.content=page.content.replace(/<img\b[^>]*>/g,tag=>{
 if(/\bwidth=/.test(tag))return tag;
 const src=tag.match(/src="([^\"]+)"/)?.[1];const size=dimensions.get(src);
 return size?tag.replace(/\/?>(?=$)/,` width="${size[0]}" height="${size[1]}"/>`):tag;
});}
await fs.writeFile('src/data/pages.json',JSON.stringify(pages,null,2)+'\n');
console.log(`Reserved intrinsic layout dimensions for ${dimensions.size} local images.`);
