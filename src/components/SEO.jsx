import { Helmet } from "react-helmet-async";
import { realizations, projects } from "../constants";

const SEO = () => {
  const domain = "https://www.searchit.pl";

  // 1. CreativeWork - Galeria Realizacji i Projektów
  const portfolioItems = [...realizations, ...projects].map((p, index) => ({
    "@type": "CreativeWork",
    "name": p.title || p.name,
    "description": p.description,
    "url": p.link || p.vercel_link || domain,
    "image": p.image ? `${domain}/${p.image}` : `${domain}/logofav5.webp`,
    "author": {
      "@type": "Person",
      "name": "Łukasz Kuś"
    }
  }));

  // 2. BreadcrumbList
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Start", "item": domain },
      { "@type": "ListItem", "position": 2, "name": "O mnie", "item": `${domain}/#about` },
      { "@type": "ListItem", "position": 3, "name": "Realizacje", "item": `${domain}/#work` },
      { "@type": "ListItem", "position": 4, "name": "Projekty", "item": `${domain}/#projects` },
      { "@type": "ListItem", "position": 5, "name": "Oferta", "item": `${domain}/#oferta` }
    ]
  };

  // 3. FAQPage - Pytania i Odpowiedzi
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Ile trwa stworzenie strony internetowej?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Czas realizacji zależy od stopnia skomplikowania projektu. Prosta wizytówka firmy może być gotowa w 7-10 dni, natomiast rozbudowane sklepy e-commerce lub aplikacje webowe wymagają od 3 do 6 tygodni pracy."
        }
      },
      {
        "@type": "Question",
        "name": "Czy moje strony są zoptymalizowane pod SEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, każdy projekt realizowany przez Search IT jest od początku budowany z myślą o wyszukiwarkach. Stosujemy nowoczesne standardy semantycznego HTML5, optymalizację szybkości ładowania oraz dane strukturalne JSON-LD."
        }
      },
      {
        "@type": "Question",
        "name": "W jakich technologiach budowane są strony i sklepy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Specjalizuję się w nowoczesnym stacku technologicznym: React, Next.js, TypeScript oraz Tailwind CSS. Dla sklepów e-commerce oferuję autorskie rozwiązania lub integracje z systemami takimi jak Stripe."
        }
      }
    ]
  };

  // 4. SiteNavigationElement
  const navigationSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      { "@type": "SiteNavigationElement", "position": 1, "name": "O mnie", "url": `${domain}/#about` },
      { "@type": "SiteNavigationElement", "position": 2, "name": "Realizacje", "url": `${domain}/#work` },
      { "@type": "SiteNavigationElement", "position": 3, "name": "Projekty", "url": `${domain}/#projects` },
      { "@type": "SiteNavigationElement", "position": 4, "name": "Oferta", "url": `${domain}/#oferta` },
      { "@type": "SiteNavigationElement", "position": 5, "name": "Kontakt", "url": `${domain}/#contact` }
    ]
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "url": domain,
    "name": "Search IT | Strony i Sklepy Internetowe Opole",
    "description": "Nowoczesne strony internetowe i sklepy e-commerce stworzone v React i Next.js - Opole. Szybkie, responsywne i zoptymalizowane pod SEO.",
    "logo": `${domain}/logofav5.webp`,
    "telephone": "+48-694-004-530",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "15"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+48-694-004-530",
      "contactType": "Customer Support",
      "areaServed": "Polska",
      "availableLanguage": ["Polish", "English"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Wojska Polskiego 1/40",
      "addressLocality": "Opole",
      "postalCode": "45-862",
      "addressCountry": "PL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "50.6751",
      "longitude": "17.9213"
    },
    "openingHours": ["Mo-Fr 09:00-18:00"],
    "priceRange": "PLN",
    "sameAs": [
      "https://www.linkedin.com/in/%C5%82ukasz-ku%C5%9B-1b5318323/",
      "https://aleo.com/pl/firma/lukasz-kus-search-it",
      "https://useme.com/pl/roles/contractor/search-it,387103/",
      "https://panoramafirm.pl/opolskie,,opole,wojska_polskiego,1_3_lok._40/lukasz_kus_search_it-bowyhg_fph.html",
      "https://www.gowork.pl/opinie_czytaj,25128869"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Projektowanie i tworzenie stron internetowych Opole"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Tworzenie sklepów internetowych Opole"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Optymalizacja SEO Opole"
        }
      }
    ]
  };

  return (
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Search IT | Strony i Sklepy Internetowe Opole</title>
      <meta
        name="description"
        content="Nowoczesne strony internetowe Opole i sklepy e-commerce stworzone v React i Next.js - Opole. Szybkie, responsywne i zoptymalizowane pod SEO."
      />
      <link rel="canonical" href={domain} />
      
      {/* JSON-LD Schemas */}
      <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(navigationSchema)}</script>
      {portfolioItems.map((item, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(item)}</script>
      ))}

      {/* OG & Twitter Tags */}
      <meta property="og:title" content="Search IT | Strony i Sklepy Internetowe Opole" />
      <meta property="og:description" content="Nowoczesne strony internetowe i sklepy e-commerce stworzone v React i Next.js - Opole. Szybkie, responsywne i zoptymalizowane pod SEO." />
      <meta property="og:image" content={`${domain}/logofav5.webp`} />
      <meta property="og:url" content={domain} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Search IT | Strony i Sklepy Internetowe Opole" />
      <meta name="twitter:description" content="Nowoczesne strony internetowe i sklepy e-commerce stworzone v React i Next.js - Opole. Szybkie, responsywne i zoptymalizowane pod SEO." />
      <meta name="twitter:image" content={`${domain}/logofav5.webp`} />
    </Helmet>
  );
};

export default SEO;
