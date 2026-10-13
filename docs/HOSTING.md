# Static hosting

Build with `npm ci && npm run build`; publish `dist/`. The repository includes redirects/headers for compatible static hosts. No server process is needed in production.

For an Nginx host, use the following equivalents inside the existing site configuration (set the root to the actual deployed dist path):

```nginx
location = /sitemap_index.xml { return 301 /sitemap-index.xml; }
location = /sitemap.xml { return 301 /sitemap-index.xml; }
location / { try_files $uri $uri/index.html =404; }
error_page 404 /404.html;
location /media/ { expires 1y; add_header Cache-Control "public, immutable"; }
location /_astro/ { expires 1y; add_header Cache-Control "public, immutable"; }
location /wp-content/uploads/ { expires 30d; }
```

Keep the existing HTTPS and www-to-apex redirects. Point the production domain at this build only after checking the backend limitations, conflicting source prices, and outstanding visual/integration QA documented in MIGRATION.md.
