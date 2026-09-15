import { useParams } from "react-router-dom";
import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";
import { PROJECT_META_BY_SLUG } from "../data/projectMeta";

const DETAILS = {
  crickethub: {
    title: "CricketHub",
    category: "Sports / E-Commerce",
    tagline: "A modern cricket web experience combining sports branding, product discovery, responsive pages and authentication UI.",
    year: "2026",
    stack: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX"],
    features: ["Responsive homepage and navigation", "Cricket product browsing", "Authentication pages", "Cart and product UI", "Dark / light visual direction"],
    impact: ["Designed as a portfolio-grade sports experience with a strong visual identity and reusable page sections."],
    links: { live: "https://crick-web.netlify.app", github: "https://github.com/SyedCodes-Dev" }
  },
  shopease: {
    title: "ShopEase",
    category: "E-Commerce",
    tagline: "An interactive React e-commerce experience focused on polished product browsing, quick view, cart interactions and motion.",
    year: "2026",
    stack: ["React", "Vite", "JavaScript", "CSS", "GSAP / Motion"],
    features: ["Product listing", "Quick view", "Add to cart", "Cart drawer", "Responsive design", "Micro-interactions and animations"],
    impact: ["Built to balance visual richness with usability without overloading the interface."],
    links: { live: "https://e-commercestore-web.netlify.app/", github: "https://github.com/SyedCodes-Dev" }
  },
  "luxury-restaurant": {
    title: "Luxury Restaurant",
    category: "Restaurant / UI",
    tagline: "A premium restaurant web experience focused on elegant visual hierarchy, responsive presentation and polished interactions.",
    year: "2026",
    stack: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX"],
    features: ["Premium hero presentation", "Menu-focused sections", "Responsive layouts", "Interactive navigation", "Restaurant branding"],
    impact: ["Designed to create a refined first impression while keeping the interface practical and readable."],
    links: { live: "https://rest-web.netlify.app/", github: "https://github.com/SyedCodes-Dev" }
  },
  finora: {
    title: "Finora Finance",
    category: "Finance Management",
    tagline: "A modern finance management experience designed for clear financial overviews, transactions, budgets, goals and account organization.",
    year: "2026",
    stack: ["React", "Vite", "JavaScript", "CSS", "Node.js"],
    features: ["Finance dashboard", "Transactions page", "Budget tracking", "Financial goals", "Account overview", "Authentication flow"],
    impact: ["Built as a portfolio-grade finance product with a clean interface that keeps financial information easy to scan and understand."],
    links: { live: "https://github.com/SyedCodes-Dev/Finora-FInance-management-system" }
  },
  "nature-parallax": {
    title: "Nature Parallax",
    category: "Parallax / Experience",
    tagline: "An immersive nature experience built around layered visuals, parallax movement and scroll-driven storytelling.",
    year: "2026",
    stack: ["HTML", "CSS", "JavaScript", "Parallax", "Responsive Design"],
    features: ["Layered parallax scenes", "Scroll-based movement", "Immersive hero presentation", "Responsive layout", "Visual storytelling"],
    impact: ["Explores how motion and depth can make a simple content experience feel more engaging."],
    links: { live: "https://nature-parallax-web.netlify.app/", github: "https://github.com/SyedCodes-Dev" }
  }
};

export default function WebProjectDetail({ onClose, mode }) {
  const { slug } = useParams();
  const meta = PROJECT_META_BY_SLUG[slug];
  const project = DETAILS[slug];
  if (!meta?.link || !project) return null;
  return (
    <ProjectCaseLayout
      project={{ ...project, heroImg: meta.img }}
      onClose={onClose}
      closeLabel={mode === "modal" ? "Close" : "Back to Home"}
      mode={mode}
    />
  );
}
