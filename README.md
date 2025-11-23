# Vatsalya Studio - Interior Design Website

Modern, SEO-optimized React website for Vatsalya Studio built with Vite, TypeScript, and Tailwind CSS.

##  Quick Deploy to Hostinger

### 1. Build the Site
```bash
npm install
npm run build
```

### 2. Upload to Hostinger
1. Login to Hostinger File Manager
2. Navigate to `public_html` folder
3. Upload all contents from the `dist` folder
4. Ensure `.htaccess` file is uploaded

### 3. Done! 
Visit your domain: https://vatsalyahomeinteriors.com

##  Development

```bash
npm run dev    # Start development server
npm run build  # Build for production
npm run lint   # Run linting
```

##  Features

-  Lightning fast with Vite
-  Beautiful responsive design
-  SEO optimized (sitemap, meta tags, structured data)
-  PWA ready
-  Smooth animations (Framer Motion & GSAP)
-  Lazy image loading
-  Security headers configured

##  SEO Files

- `public/sitemap.xml` - Search engine sitemap
- `public/robots.txt` - Crawler instructions
- `public/google16dbe21a4cdc2ca9.html` - Google verification
- `public/manifest.json` - PWA manifest
- `public/.htaccess` - Apache configuration

##  Troubleshooting

**Routes not working?**
- Ensure `.htaccess` is uploaded to Hostinger
- Check mod_rewrite is enabled

**Images not loading?**
- Clear browser cache
- Check image paths in code

---

Built with  for Vatsalya Studio
