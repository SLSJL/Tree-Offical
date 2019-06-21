import tool from "./../../utils/tools";

// en.js
const nav = [
  {
    name: "Home",
    route: "/"
  },
  {
    name: "Trees@Hong Kong",
    route: "",
    children: [
      {
        name: "Background",
        route: "/tree/background"
      },
      {
        name: "GIS database",
        route: "/tree/gis-database"
      },
      {
        name: "My Tree My Community Scheme",
        route: "/tree/MTMCS"
      }
    ]
  },
  {
    name: "Resources",
    route: "",
    children: [
      {
        name: "Usefull links",
        route: "/usefull-links"
      },
      {
        name: "Contact us",
        route: "/contact-us"
      }
    ]
  },
  {
    name: "About Us",
    route: "/about",
    children: [
      {
        name: "Background",
        route: "aboutus-background"
      },
      {
        name: "Collaboration partners",
        route: "/collaboration-partners"
      },
      {
        name: "Project Team",
        route: "/project-team"
      }
    ]
  }
];

const knowledgeInfo = {
  "k-1-proper": tool.getInfoCard("proper"),
  "k-2-risk": tool.getInfoCard("risk"),
  "k-3-green": tool.getInfoCard("green"),
  "k-4-maintenance": tool.getInfoCard("maintenance"),
  "k-5-assessment": tool.getInfoCard("assessment"),
  "k-6-pruning": tool.getInfoCard("pruning"),
  "k-7-leaf": tool.getInfoCard("leaf")
};
export default {
  systemName: "Tree Risk Management",
  nav: nav,
  knowledgeInfo: knowledgeInfo,
  placeholder: {
    enter: "请输入您喜欢的品牌"
  },
  brands: {
    nike: "耐克",
    adi: "阿迪达斯",
    nb: "新百伦",
    ln: "李宁"
  }
};
