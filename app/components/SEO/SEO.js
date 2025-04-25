// src/components/SEO/SEO.js
import Head from 'next/head';
import { useRouter } from 'next/naviagation';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image = '/logo1.png',
  noIndex = false
}) => {
  const router = useRouter();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.almer-furniture.vercel.app';
  const canonicalUrl = baseUrl + router.asPath;

  // Default values with target keywords
  const seoConfig = {
    title: title || 'Mobileri Almer - Prodhim dhe Instalim Mobiljesh në Tiranë',
    description: description || 'Mobileri me porosi: Kuzhina, Dhoma Gjumi, Sallon, Dyer & Dritare në Tiranë. Punime artizanale me dru në çmim kompetitiv.',
    keywords: keywords || [
      'mobileri', 
      'mobileri ne tirane',
      'kuzhina me porosi',
      'dhoma gjumi moderne',
      'dyer dritare alumini',
      'sallon me dru',
      'mobilje kuzhine',
      'mobilje salloni',
      'mobileri shqip',
      'dizajn interiori'
    ].join(', '),
    image: `${baseUrl}${image}`
  };

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{seoConfig.title}</title>
      <meta name="description" content={seoConfig.description} />
      <meta name="keywords" content={seoConfig.keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* No Index */}
      {noIndex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={seoConfig.title} />
      <meta property="og:description" content={seoConfig.description} />
      <meta property="og:image" content={seoConfig.image} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="sq_AL" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoConfig.title} />
      <meta name="twitter:description" content={seoConfig.description} />
      <meta name="twitter:image" content={seoConfig.image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          "name": "Almer",
          "image": `${baseUrl}/logo1.png`,
          "url": baseUrl,
          "telephone": "+355123456789",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rruga e Dibrës",
            "addressLocality": "Tirana",
            "postalCode": "1001",
            "addressCountry": "AL"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "41.3275",
            "longitude": "19.8187"
          },
          "sameAs": [
            "https://www.facebook.com/almerfurniture",
            "https://www.instagram.com/almerfurniture"
          ],
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "08:00",
            "closes": "18:00"
          }
        })}
      </script>
    </Head>
  );
};

export default SEO;