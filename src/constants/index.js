import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  kabe,
  seasun,
  fazar,
  logo2,
  fazar2,
  stripe,
  Ai,
  Ai2,
  Ps,
  eadmin,
  efront,
  universe,
  gwat,
  cobra,
  library,
  estate,
  awards,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "O mnie",
  },
  {
    id: "work",
    title: "Realizacje",
  },
  {
    id: "projects",
    title: "Projekty",
  },
  {
    id: "oferta",
    title: "Oferta",
  },
  {
    id: "contact",
    title: "Kontakt",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Stripe",
    icon: stripe,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Adobe Illustrator",
    icon: Ai2,
  },
  {
    name: "Adobe Photoshop",
    icon: Ps,
  },
];

const realizations = [
  {
    title: "Kabe Tint&Leather",
    icon: logo2,
    description:
      "Usługi przyciemniania szyb samochodowych i regeneracji tapicerki skórzanej.",
    image: kabe,
    link: "https://www.kabetintleather.opole.pl/",
  },
  {
    title: "Sea & Sun Sarbinowo",
    icon: logo2,
    description: "Nowo wybudowane, klimatyzowane, komfortowe domki na wynajem.",
    image: seasun,
    link: "https://www.seasunsarbinowo.pl/",
  },
  {
    title: "Fazar",
    icon: logo2,
    description: "Wizytówka dla usług elektrycznych i teletechnicznych.",
    image: fazar,
    modals: fazar2,
    link: "#",
  },
  {
    title: "G-WAT",
    icon: logo2,
    description: "Pomiary elektryczne oraz serwis instalacji fotowoltaicznych",
    image: gwat,
    link: "https://www.g-wat.pl/",
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "ecommerceAdmin",
    description:
      "Strona administracyjna e-commerce, stworzona z wykorzystaniem technologii React i NextJS, zaprojektowana do zarządzania sklepem internetowym. Dzięki zastosowaniu tych nowoczesnych narzędzi, platforma zapewnia płynną nawigację oraz szybkie ładowanie stron, co przekłada się na lepsze doświadczenie użytkownika podczas zarządzania produktami, zamówieniami i innymi funkcjami sklepu.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "pink-text-gradient",
      },
    ],
    image: eadmin,
    source_code_link: "https://github.com/Salvar77/Efinal/tree/main",
    vercel_link: "https://efinal-admin.vercel.app/",
  },
  {
    name: "ecommerceFront",
    description:
      "Strona e-commerce, zbudowana przy użyciu React, NextJS oraz Stripe, pozwala użytkownikom na przeglądanie produktów, dodawanie ich do koszyka oraz dokonywanie zakupów. Dzięki Stripe płatności są szybkie i bezpieczne, co zwiększa komfort klientów. Zastosowanie React i NextJS gwarantuje płynną nawigację oraz efektywne działanie strony, co wpływa na pozytywne doświadczenie zakupowe.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "stripe",
        color: "green-text-gradient",
      },
      {
        name: "nextjs",
        color: "pink-text-gradient",
      },
    ],
    image: efront,
    source_code_link: "https://github.com/Salvar77/Efinal/tree/master",
    vercel_link: "https://efinal-front-teal.vercel.app/",
  },
  {
    name: "UniverseExplorer",
    description:
      "Strona internetowa stworzona przy użyciu HTML, SCSS oraz JavaScript, będąca moim pierwszym projektem. Projekt ten to klasyczna, statyczna witryna, która pozwala na podstawową interakcję użytkownika i prezentację treści. Dzięki zastosowaniu SCSS udało się uzyskać lepszą organizację stylów, a JavaScript dodaje podstawową funkcjonalność, co sprawia, że strona jest dynamiczna i bardziej interaktywna.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: universe,
    source_code_link: "https://github.com/Salvar77/Universe",
    vercel_link: "https://universe-alpha.vercel.app/",
  },
  {
    name: "ecommercePhoneCase",
    description:
      "Strona e-commerce wykorzystująca Next.js 14, Tailwind, React oraz TypeScript umożliwiająca użytkownikom wgrywanie własnych zdjęć i zamawianie spersonalizowanych etui na telefon. Zaawansowane funkcje, takie jak podgląd finalnego projektu czy bezpieczna obsługa płatności online, zapewniają płynne i intuicyjne doświadczenie zakupowe. Zastosowanie nowoczesnych technologii gwarantuje szybką i bezproblemową obsługę wielu produktów oraz łatwe skalowanie witryny.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: cobra,
    source_code_link: "https://github.com/Salvar77/casecobra-dev",
    vercel_link: "https://casecobra-dev-lovat.vercel.app/",
  },
  {
    name: "ecommerceBookWise",
    description:
      "Platforma do zarządzania biblioteką uniwersytecką, stworzona w oparciu o Next.js, React i TypeScript. Umożliwia przeglądanie, wypożyczanie oraz rezerwowanie książek. Integracja z Neon, ImageKit i Upstash zapewnia szybkie operacje na danych, obsługę multimediów i cache'owanie. Projekt jest częścią większego systemu bibliotecznego, który w przyszłości zostanie rozszerzony o znacznie bardziej rozbudowany panel administracyjny, umożliwiający kompleksowe zarządzanie użytkownikami czy analizę statystyk",
    tags: [
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "postgresql",
        color: "blue-text-gradient",
      },
      {
        name: "redis",
        color: "green-text-gradient",
      },
    ],
    image: library,
    source_code_link: "https://github.com/Salvar77/university-library-project",
    vercel_link: "https://university-library-project-5f7l.vercel.app/",
  },
  {
    name: "NativeRealty",
    description:
      "Mobilna aplikacja do zarządzania nieruchomościami, stworzona przy użyciu React Native i Expo. Umożliwia przeglądanie ofert, wyszukiwanie szczegółowych informacji oraz bezpośredni kontakt z agentami. Intuicyjny interfejs i responsywny design gwarantują wygodne przeglądanie ofert zarówno na smartfonach, jak i tabletach. Integracja z systemami geolokalizacji i map umożliwia precyzyjne wyszukiwanie nieruchomości w wybranej okolicy. Projekt został zoptymalizowany pod kątem wydajności i płynnej nawigacji.",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "expo",
        color: "green-text-gradient",
      },
      {
        name: "mobile",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
    ],
    image: estate,
    source_code_link: "https://github.com/Salvar77/react-native-estate",
  },
  {
    name: "MotionAwwwards",
    description:
      "Strona w stylu awwwards, zbudowana przy użyciu React, Tailwind CSS oraz GSAP, charakteryzująca się płynnymi animacjami i nowoczesnym interfejsem. Dzięki precyzyjnie zsynchronizowanym efektom przejścia, użytkownicy mogą doświadczać interaktywnej nawigacji i dynamicznej prezentacji treści. Zastosowanie GSAP gwarantuje wysoką wydajność oraz atrakcyjną oprawę wizualną, sprawiając, że strona pozostaje w pamięci odwiedzających.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "gsap",
        color: "pink-text-gradient",
      },
    ],
    image: awards,
    source_code_link: "https://github.com/Salvar77/react-native-estate",
    vercel_link: "https://awwwards-omega.vercel.app/",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  realizations,
};
