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
  },
  {
    name: "Universe Explorer",
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
