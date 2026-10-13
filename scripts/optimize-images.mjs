import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';
const assets=JSON.parse(await fs.readFile('src/data/assets.json','utf8'));
const replacements=[];
for(const asset of assets){
 if(asset.status!=='downloaded'||!asset.local)continue;
 const source=path.join('public',asset.original || asset.local);
 if(!/\.(png|jpe?g|webp)$/i.test(source))continue;
 const metadata=await sharp(source).metadata();
 if((metadata.pages??1)>1)continue;
 const target=asset.local.replace(/\.[^.]+$/,'.webp');
 // Keep originals at their historic upload URLs; serve compact derivatives on new pages.
 const bytes=await sharp(source).rotate().resize({width:1400,withoutEnlargement:true}).webp({quality:82}).toBuffer();
 if(bytes.length<(await fs.stat(source)).size || target!==asset.local){
  await fs.writeFile(path.join('public',target),bytes);
  replacements.push([asset.local,target]);asset.optimized=target;
 }
}
for(const file of ['src/data/pages.json','src/pages/index.astro']){
 let source=await fs.readFile(file,'utf8');
 for(const [from,to]of replacements)source=source.replaceAll(from,to);
 await fs.writeFile(file,source);
}
await fs.writeFile('src/data/assets.json',JSON.stringify(assets,null,2)+'\n');
console.log(`Optimized ${replacements.length} images while retaining original upload URLs.`);
