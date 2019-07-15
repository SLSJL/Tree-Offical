const state = {
  activeIndex: 0,
  activeKonwledge: ""
};

const mutations = {
  SET_ACTIVEINDEX(state, activeIndex) {
    state.activeIndex = activeIndex;
  },
  SET_ACTIVE_KNOWLEDGE(state, activeKonwledge) {
    state.activeKonwledge = activeKonwledge;
  }
};

const getters = {};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
