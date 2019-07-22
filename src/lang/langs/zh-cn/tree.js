import knowledgeCns from "./../../../config/knowledgeCns";

export default {
  nav: [
    {
      text: "树木",
      route: "/tree/index"
    },
    {
      text: "StoryMap",
      route: "/tree/storymap"
    },
    {
      text: "信息卡",
      route: "/tree/InfoCard"
    }
  ],
  details: {
    p1: {
      caption: "城市树木现状",
      body:
        "碍于有限的生长空间、低肥力的土壤、缺乏维护、愈趋频繁的暴雨和台风影响之下，城市内的树木正在面临生长危机。这样对于某些品种的树木有着极大的影响，以致它们无力抵抗极端气候。"
    },
    p2: {
      caption: "生态系统服务",
      body1:
        "城市树木为城市居民提供重要的生态系统服务，如移除空气污染物、碳固存、减轻热岛效应、城市防洪、改善水质、增强美学、增强和保存生物多样性；随着全球城市化的不断发展，城市树木的规划管理成为适应和缓解全球气候变化的关键措施。",
      body2: `树木是一个充满活力的系统。树木锚地牢牢固定土壤，使树根支撑树干和树叶。通过测量树木的转动量或纪录树木的倾斜数据，可以检测到根系中的弱锚—这是会引起树木倒塌的危机。风和树之间的编织相互作用是动态的，并且取决于树木的固有振动频率。风吹动树冠会在树基上产生转动动量。这种转动动量受到根系的抵抗，并可作为结构根区旋转角度的函数。如果根系不足以抵受转动动量，那么树会倾斜或被连根拔起然后掉下。因此，测量和监测城市树木的根系稳定性能更准确地预测树木倒塌的风险，从而确保对公众的安全。`
    },
    p3: {
      caption: "技术助力树木管理",
      body: `许多研究以通过各种可量化的工具来测量树木位移。它们有助于测量由树木倾覆动量引起的旋转角度，树木位移或倾斜角度。虽然使用加速度计测量树木倾斜并不是新的方法，但传感器技术可以测量树木对风力的反应，可以记录近地面的倾斜值，并且可以提供根部锚固的强度。研究不同树种对不利天气条件下的反应也很重要。此外，定期监控根板转动使树木管理中的早期预警系统能够降低因根部问题造成的损害风险。`
    },
    p4: {
      caption: "监测树种",
      body1:
        "此先导计划选取多种市区常见的树木品种作为测验，例如：宫粉羊蹄甲、凤凰木、铁刀木、石栗等。",
      body2: {
        item1: "Bauhinia variegata:",
        item2: "Delonix regia:",
        item3: "Senna siamea:",
        item4: "Aleurites moluccana:"
      }
    },
    p5: {
      caption: "城市树木",
      body1:
        "城市树木为城市居民提供生态系统服务，如移除空气污染物、碳截存、减轻热岛效应、城市防洪、改善水质、提高城市美感、增强和保育生物多样性。随着全球城市化的不断发展，城市树木的规划管理成为适应和缓解全球气候变化的关键措施。"
    },
    p6: {
      caption: "古树名木册",
      body1:
        "香港政府已建立了古树名木册（OVT），以确保城市树木得到妥善的保存和维护，并保护我们的遗产和珍贵的自然资源。OVT信息包括大树、珍贵或稀有树木品种、古树（例如树龄超过一百年）、具有文化、历史或重要纪念意义的树木；以及树形出众的树木。OVT信息还包括每棵树的物理和健康状况，其位置和预期寿命。目前，已注册的OVT约有460个。",
      body2: "欢迎访问以下链接以获取更多参考数据：",
      body3:
        "https://www.gov.hk/sc/residents/environment/conservation/regoldvaluetree.htm",
      body4:
        "https://www.greening.gov.hk/treeregister/map/treeIndex.aspx?lang=zh-CN"
    }
  },
  infocard: {
    tips: "按下信息卡探索香港如何管理树木！"
  },
  infoCards: [
    {
      id: "k-1-proper",
      text: "正确种植方法",
      icon: require("./../../../assets/images/tree/info1.png"),
      fClr: "#887567",
      bgClr: "#fef0e6"
    },
    {
      id: "k-2-risk",
      text: "护养树木  保障安全",
      icon: require("./../../../assets/images/tree/info2.png"),
      fClr: "#008cd2",
      bgClr: "#daf8ff"
    },
    {
      id: "k-3-green",
      text: "绿化的好处 ",
      icon: require("./../../../assets/images/tree/info3.png"),
      fClr: "#303030",
      bgClr: "#f2f2f2"
    },
    {
      id: "k-4-maintenance",
      text: "树木护养",
      icon: require("./../../../assets/images/tree/info4.png"),
      fClr: "#dc6200",
      bgClr: "#fef0e6"
    },
    {
      id: "k-5-assessment",
      text: "树木风险评估及管理安排",
      icon: require("./../../../assets/images/tree/info5.png"),
      fClr: "#df251f",
      bgClr: "#ffe1e1"
    },
    {
      id: "k-6-pruning",
      text: "树木修剪",
      icon: require("./../../../assets/images/tree/info6.png"),
      fClr: "#00877a",
      bgClr: "#c9f6f2"
    },
    {
      id: "k-7-leaf",
      text: "常见树叶形状",
      icon: require("./../../../assets/images/tree/info7.png"),
      fClr: "#168234",
      bgClr: "#e4fce2"
    }
  ],
  acknowledgement:
    "本网站的资讯卡内容由香港特区政府发展局，绿化、园境及树木管理组提供。",
  knowledgeInfo: {
    "k-1-proper": knowledgeCns["proper"],
    "k-2-risk": knowledgeCns["risk"],
    "k-3-green": knowledgeCns["green"],
    "k-4-maintenance": knowledgeCns["maintenance"],
    "k-5-assessment": knowledgeCns["assessment"],
    "k-6-pruning": knowledgeCns["pruning"],
    "k-7-leaf": knowledgeCns["leaf"]
  }
};
