import KnowledgeEng from "./../../../config/knowledgeEng";

export default {
  nav: [
    {
      text: "Tree",
      route: "/tree/index"
    },
    {
      text: "StoryMap",
      route: "/tree/storymap"
    },
    {
      text: "InfoCard",
      route: "/tree/InfoCard"
    }
  ],
  details: {
    p1: {
      caption: "CURRENT SITUATION FOR URBAN TREES",
      body:
        "Urban trees expose to high risk of growth due to insufficient growing space, poor soil, bad or lack of maintenance and the increasing frequency of rainstorms and typhoons due to global climate. Some tree species are even affected so badly as they are more vulnerable to extreme bad weather conditions."
    },
    p2: {
      caption: "ECOSYSTEM SERVICES",
      body1:
        "Urban trees provide important ecosystem services to city inhabitants like air pollution removal, carbon sequestration, mitigation of heat island effect, urban flood prevention, water quality improvement, aesthetic enhancement, biodiversity enhancement and conservation. The management of urban trees become a key adaptation and mitigation measure of global climate change.",
      body2:
        "Trees behave like a vibrant system. The tree anchorage holds soil firmly so that the root supports the tree trunk and foliage. Weak anchorage in the root system which may cause hazard of tree falling can be detected by measuring the turning momentum or capturing titling data of a tree. The weaving interaction between wind and a tree is dynamic and depends on the inherent vibrating frequency of a tree. The wind force on tree canopy generates a turning momentum at the tree base. Such a turning momentum is resisted by the root system and it can be considered as a function of the rotational angle of the structural root zone. If the root system is not strong enough to sustain the turning momentum, the tree will tilt or be uprooted and then will fall. As such, measuring and monitoring root stability of urban trees could help in predicting risk of tree falling more accurately and then in ensuring safety to the public."
    },
    p3: {
      caption: "TECHNOLOGY HELPS TREE MANAGEMENT",
      body:
        "Many studies have been conducted to measure tree displacement via a wide spectrum of quantifiable tools. They help measure the rotational angle, tree displacement or tilting angle due to the overturning momentum of a tree. Whilst the use of the accelerometer for measuring tree tilting is not new, the sensor technology can measure the mechanical response of a tree to wind force, can record the tilting values at near ground level and can provide an insightful strength of root anchorage. It is also important to study the failure pattern of different tree species on the root response towards adverse weather conditions. In addition, monitoring root plate rotation on a regular basis would enable an early warning system in tree management to reduce the risk of damage caused by root failure."
    },
    p4: {
      caption: "OUR MONITORING LIST",
      body1:
        "Trees of 9 vulnerable species at risk of tree falling with different tree forms are selected for monitoring, e.g. Bauhinia variegata, Delonix regia, Senna siamea, Aleurites moluccana.",
      body2: {
        item1: "Bauhinia variegata:",
        item2: "Delonix regia:",
        item3: "Senna siamea:",
        item4: "Aleurites moluccana:"
      }
    },
    p5: {
      caption: "URBAN TREES",
      body1:
        "Urban trees provide ecosystem services to city inhabitants, such as air pollution removal, carbon sequestration, mitigation of heat island effect, urban flood prevention, water quality improvement, aesthetic enhancement, biodiversity enhancement and conservation; etc. With an ever-increasing urbanization worldwide, the planning management of urban trees become a key adaptation and mitigation measure of global climate change."
    },
    p6: {
      caption: "OLD AND VALUABLE TREES",
      body1:
        "The Hong Kong Government has established a Register of Old and Valuable Trees (OVT) to ensure urban trees to be well preserved and maintained and to preserve our heritage and precious natural resources. OVT information includes trees of large size, precious or rare species, old age of trees (age > 100 years), cultural, historical or memorable significance and outstanding form of trees.  OVT information also comprises of the physical and the health condition, location and life expectancy of every individual tree. At present, about 460 OVTs are registered. ",
      body2: "Welcome to access to the following links for more reference:"
    }
  },
  infocard: {
    tips:
      "Click at the cards below! You could discover how tree to be managed in Hong Kong!"
  },
  infoCards: [
    {
      id: "k-1-proper",
      text: "Proper Planting Practice",
      icon: require("./../../../assets/images/tree/info1.png"),
      fClr: "#887567",
      bgClr: "#fef0e6"
    },
    {
      id: "k-2-risk",
      text: "Minimizing Tree Risks",
      icon: require("./../../../assets/images/tree/info2.png"),
      fClr: "#008cd2",
      bgClr: "#daf8ff"
    },
    {
      id: "k-3-green",
      text: "Benefits of Greening",
      icon: require("./../../../assets/images/tree/info3.png"),
      fClr: "#303030",
      bgClr: "#f2f2f2"
    },
    {
      id: "k-4-maintenance",
      text: "Tree Maintenance",
      icon: require("./../../../assets/images/tree/info4.png"),
      fClr: "#dc6200",
      bgClr: "#fef0e6"
    },
    {
      id: "k-5-assessment",
      text: "Tree Risk Assessment \n &  \nManagement Arrangement",
      icon: require("./../../../assets/images/tree/info5.png"),
      fClr: "#df251f",
      bgClr: "#ffe1e1"
    },
    {
      id: "k-6-pruning",
      text: "Tree Pruning",
      icon: require("./../../../assets/images/tree/info6.png"),
      fClr: "#00877a",
      bgClr: "#c9f6f2"
    },
    {
      id: "k-7-leaf",
      text: "Common Leaf Shape",
      icon: require("./../../../assets/images/tree/info7.png"),
      fClr: "#168234",
      bgClr: "#e4fce2"
    }
  ],
  acknowledgement:
    "We would like to express our special thanks to Greening, Landscape and Tree Management Section, Development Bureau of HKSAR to provide support on the source of info card in this website.",
  knowledgeInfo: {
    "k-1-proper": KnowledgeEng["proper"],
    "k-2-risk": KnowledgeEng["risk"],
    "k-3-green": KnowledgeEng["green"],
    "k-4-maintenance": KnowledgeEng["maintenance"],
    "k-5-assessment": KnowledgeEng["assessment"],
    "k-6-pruning": KnowledgeEng["pruning"],
    "k-7-leaf": KnowledgeEng["leaf"]
  }
};
