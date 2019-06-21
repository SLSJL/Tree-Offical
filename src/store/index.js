import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import navigation from "./modules/navigation";
import tree from "./modules/tree";
import aboutUs from "./modules/aboutUs";

export default new Vuex.Store({
  modules: {
    navigation,
    tree,
    aboutUs
  }
});
