// styles
import "normalize.css";
import "./../../assets/styles/index.less";
import "./../../assets/styles/index.less";


import utils from "./../../utils";
import elements from "./elementUI";
const custom = {
  install: Vue => {
    Vue.use(elements);
    Vue.prototype.$utils = utils;
  }
};

export default custom;
