import Vue from "vue";
import App from "./App.vue";
import router from "./router/";
import store from "./store/";
import custom from "./components/ctm";

Vue.config.productionTip = false;
Vue.use(custom);

// 多国语言
import VueI18n from "vue-i18n";
Vue.use(VueI18n);

const Lang = () => {
  let t = window.localStorage.getItem("language");
  if (t) return t;
  else return "en";
};
const language = Lang();

import messages from "./lang";

const i18n = new VueI18n({
  locale: language,
  messages
});

window.lang = Lang();
router.afterEach(() => {
  window.scrollTo(0, 0);
});
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
