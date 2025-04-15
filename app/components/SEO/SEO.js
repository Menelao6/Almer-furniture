// src/components/SEO/SEO.js
import Head from 'next/head';

const SEO = ({ title, description, keywords }) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.almer-furniture.vercel.app';
  
  return (
    <Head>
      {/* Basic SEO */}
      <title>{title ? `${title} | Almer` : 'Almer - Punime Artizanale me Dru'}</title>
      <meta name="description" content={description || 'Punime me cilësi të lartë në dru dhe alumin për ambiente elegante. Dizajne të personalizuara për çdo hapësirë.'} />
      <meta name="keywords" content={keywords || 'punime dru, mobilje me dru, dizajn interiori, artizanat shqiptare, punime alumini'} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title || 'Almer - Punime Artizanale me Dru'} />
      <meta property="og:description" content={description || 'Punime me cilësi të lartë në dru dhe alumin për ambiente elegante.'} />
      <meta property="og:image" content={`${baseUrl}/images/workshop.jpg`} />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || 'Almer - Punime Artizanale me Dru'} />
      <meta name="twitter:description" content={description || 'Punime me cilësi të lartë në dru dhe alumin për ambiente elegante.'} />
      <meta name="twitter:image" content={`${baseUrl}/images/workshop.jpg`} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Almer",
          "image": `${baseUrl}/logo1.png`,
          "url": baseUrl,
          "telephone": "+355123456789",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rruga e Dibrës",
            "addressLocality": "Tirana",
            "postalCode": "1001",
            "addressCountry": "AL"
          }
        })}
      </script>
    </Head>
  );
};

export default SEO;