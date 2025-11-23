// src/components/SEO.tsx
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article';
  canonicalUrl?: string;
  keywords?: string;
}

export default function SEO({ 
  title, 
  description, 
  image = '/logo.png',
  type = 'website',
  canonicalUrl,
  keywords,
}: SEOProps) {
  const siteTitle = 'Vatsalya Studio | Architecture & Interior Design';
  const siteUrl = 'https://vatsalyahomeinteriors.com';
  const fullTitle = title.includes('Vatsalya') ? title : `${title} | ${siteTitle}`;
  const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;
  const fullCanonicalUrl = canonicalUrl || `${siteUrl}${window.location.pathname}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:site_name" content={siteTitle} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />
    </Helmet>
  );
}