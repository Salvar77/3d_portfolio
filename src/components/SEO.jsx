import { Helmet } from "react-helmet-async";

const SEO = () => (
  <Helmet>
    <title>Search IT | Strony i Sklepy Internetowe</title>
    <meta
      name="description"
      content="Nowoczesne strony internetowe i sklepy e-commerce zaprojektowane i stworzone w React i Next.js. Szybkie, responsywne i zoptymalizowane pod SEO."
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link rel="canonical" href="https://www.searchit.pl" />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          url: "https://www.searchit.pl",
          name: "Search IT",
          description:
            "Projektuję i tworzę funkcjonalne, responsywne strony WWW i aplikacje zoptymalizowane pod kątem SEO. Oferuję kompleksowe rozwiązania i wsparcie techniczne.",
          logo: "https://www.searchit.pl/logofav4.webp",
          telephone: "+48-123-456-789",
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
            latitude: "52.2297",
            longitude: "21.0122",
          },
          openingHours: ["Mo-Fr 09:00-18:00"],
          priceRange: "PLN",
          sameAs: [
            "https://www.linkedin.com/in/%C5%82ukasz-ku%C5%9B-1b5318323/",
            "https://aleo.com/pl/firma/lukasz-kus-search-it",
            "https://useme.com/pl/roles/contractor/search-it,387103/",
            "https://panoramafirm.pl/opolskie,,opole,wojska_polskiego,1_3_lok._40/lukasz_kus_search_it-bowyhg_fph.html",
          ],
          makesOffer: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Projektowanie i tworzenie stron WWW",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Tworzenie sklepów internetowych",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Optymalizacja SEO",
              },
            },
          ],
        }),
      }}
    />
  </Helmet>
);

export default SEO;
