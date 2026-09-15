export const PROJECT_META = [
  {
    id: 1,
    slug: "crickethub",
    title: "CricketHub",
    category: "Sports / E-Commerce",
    color: "bg-lime-400",
    img: "/projects/crickethub.webp",
    link: "https://crick-web.netlify.app",
  },
  {
    id: 2,
    slug: "shopease",
    title: "ShopEase",
    category: "E-Commerce",
    color: "bg-lime-400",
    img: "/projects/shopease.webp",
    link: "https://e-commercestore-web.netlify.app/",
  },
  {
    id: 3,
    slug: "luxury-restaurant",
    title: "Luxury Restaurant",
    category: "Restaurant / UI",
    color: "bg-lime-400",
    img: "/projects/luxury-restaurant.webp",
    link: "https://rest-web.netlify.app/",
  },
  {
    id: 4,
    slug: "nature-parallax",
    title: "Nature Parallax",
    category: "Parallax / Experience",
    color: "bg-lime-400",
    img: "/projects/nature-parallax.webp",
    link: "https://nature-parallax-web.netlify.app/",
  },
  {
    id: 5,
    slug: "finora",
    title: "Finora Finance",
    category: "Finance Management",
    color: "bg-lime-400",
    img: "/projects/finora.webp",
    link: "https://github.com/SyedCodes-Dev/Finora-FInance-management-system",
  },
];

export const PROJECT_META_BY_SLUG = PROJECT_META.reduce((accumulator, item) => {
  accumulator[item.slug] = item;
  return accumulator;
}, {});
