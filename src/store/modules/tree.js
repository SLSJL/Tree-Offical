const state = {
  activeIndex: 0,
  activeKonwledge: "",
  knowledgeOptions: [
    {
      id: "k-1-proper",
      text: "Proper Planting Practice",
      icon: require("./../../assets/images/tree/info1.png"),
      fClr: "#887567",
      bgClr: "#fef0e6"
    },
    {
      id: "k-2-risk",
      text: "Minimizing Tree Risks",
      icon: require("./../../assets/images/tree/info2.png"),
      fClr: "#008cd2",
      bgClr: "#daf8ff"
    },
    {
      id: "k-3-green",
      text: "Benefits of Greening",
      icon: require("./../../assets/images/tree/info3.png"),
      fClr: "#303030",
      bgClr: "#f2f2f2"
    },
    {
      id: "k-4-maintenance",
      text: "Tree Maintenance",
      icon: require("./../../assets/images/tree/info4.png"),
      fClr: "#dc6200",
      bgClr: "#fef0e6"
    },
    {
      id: "k-5-assessment",
      text: "Tree Risk Assessment \n &  \nManagement Arrangement",
      icon: require("./../../assets/images/tree/info5.png"),
      fClr: "#df251f",
      bgClr: "#ffe1e1"
    },
    {
      id: "k-6-pruning",
      text: "Tree Pruning",
      icon: require("./../../assets/images/tree/info6.png"),
      fClr: "#00877a",
      bgClr: "#c9f6f2"
    },
    {
      id: "k-7-leaf",
      text: "Common Leaf Shape",
      icon: require("./../../assets/images/tree/info7.png"),
      fClr: "#168234",
      bgClr: "#e4fce2"
    }
  ]
};

const mutations = {
  SET_ACTIVEINDEX(state, activeIndex) {
    state.activeIndex = activeIndex;
  },
  SET_ACTIVE_KNOWLEDGE(state, activeKonwledge) {
    state.activeKonwledge = activeKonwledge;
  }
};

const getters = {
  knowledgeClr: state => id => {
    let knowledges = state.knowledgeOptions;
    let seletedOpt = knowledges.find(el => {
      return el.id === id;
    });

    return seletedOpt.fClr;
  }
};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
