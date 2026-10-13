import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
export default defineConfig({site:'https://photopartycity.com',trailingSlash:'always',integrations:[sitemap({filter:(url)=>!['cart','checkout','my-account','thank-you','rental-search','search-item-list','rent-grid','rent-list','evercompare','404'].some(slug=>url.endsWith('/'+slug+'/'))})],vite:{plugins:[tailwindcss()]}});
