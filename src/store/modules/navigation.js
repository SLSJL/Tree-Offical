const state = {
  activeIndex: 0,
  language: "en"
};

const mutations = {
  SET_ACTIVEINDEX(state, activeIndex) {
    state.activeIndex = activeIndex;
  },
  SET_ACTIVE_LANGUAGE(state, lang) {
    state.language = lang;
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
