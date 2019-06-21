const state = {
  activeIndex: 0
};

const mutations = {
  SET_ACTIVEINDEX(state, activeIndex) {
    state.activeIndex = activeIndex;
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
