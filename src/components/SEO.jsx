import { Helmet } from "react-helmet-async";

const SEO = () => (
  <Helmet>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Search IT | Strony i Sklepy Internetowe Opole</title>
    <meta
      name="description"
      content="Nowoczesne strony internetowe Opole i sklepy e-commerce stworzone w React i Next.js - Opole. Szybkie, responsywne i zoptymalizowane pod SEO."
    />
    <link rel="canonical" href="https://www.searchit.pl" />
    <meta
      property="og:title"
      content="Search IT | Strony i Sklepy Internetowe Opole"
    />
    <meta
      property="og:description"
      content="Nowoczesne strony internetowe i sklepy e-commerce stworzone w React i Next.js - Opole. Szybkie, responsywne i zoptymalizowane pod SEO."
    />
    <meta property="og:image" content="https://www.searchit.pl/logofav5.webp" />
    <meta property="og:url" content="https://www.searchit.pl" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="Search IT | Strony i Sklepy Internetowe Opole"
    />
    <meta
      name="twitter:description"
      content="Nowoczesne strony internetowe i sklepy e-commerce stworzone w React i Next.js - Opole. Szybkie, responsywne i zoptymalizowane pod SEO."
    />
    <meta
      name="twitter:image"
      content="https://www.searchit.pl/logofav5.webp"
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          url: "https://www.searchit.pl",
          name: "Search IT | Strony i Sklepy Internetowe Opole",
          description:
            "Nowoczesne strony internetowe i sklepy e-commerce stworzone w React i Next.js - Opole. Szybkie, responsywne i zoptymalizowane pod SEO.",
          logo: "https://www.searchit.pl/logofav5.webp",
          telephone: "+48-694-004-530",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+48-694-004-530",
            contactType: "Customer Support",
            areaServed: "Polska",
            availableLanguage: ["Polish", "English"],
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: "ul. Wojska Polskiego 1/40",
            addressLocality: "Opole",
            postalCode: "45-862",
            addressCountry: "PL",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "50.6751",
            longitude: "17.9213",
          },
          openingHours: ["Mo-Fr 09:00-18:00"],
          priceRange: "PLN",
          sameAs: [
            "https://www.linkedin.com/in/%C5%82ukasz-ku%C5%9B-1b5318323/",
            "https://aleo.com/pl/firma/lukasz-kus-search-it",
            "https://useme.com/pl/roles/contractor/search-it,387103/",
            "https://panoramafirm.pl/opolskie,,opole,wojska_polskiego,1_3_lok._40/lukasz_kus_search_it-bowyhg_fph.html",
            "https://www.gowork.pl/opinie_czytaj,25128869",
          ],
          makesOffer: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Projektowanie i tworzenie stron internetowych Opole",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Tworzenie sklepów internetowych Opole",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Optymalizacja SEO Opole",
              },
            },
          ],
        }),
      }}
    />
  </Helmet>
);

export default SEO;
