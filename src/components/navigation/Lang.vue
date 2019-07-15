
<template>
  <div class="language-switch">
    <span class="language-item" v-if="language != 'en'" @click="changeLang('en')">En</span>
    <!-- <span v-if="language != 'en' && language != 'cnt'">/</span> -->
    <!-- <span v-if="language ==='cnt'">/</span> -->
    <span class="language-item" v-if="language !== 'cnt'" @click="changeLang('cnt')">繁</span>
    <!-- <span v-if="language != 'cnt' && language != 'cns'">/</span> -->
    <span class="language-item" v-if="language !== 'cns'" @click="changeLang('cns')">简</span>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "language-switch",
  computed: {
    ...mapState("navigation", ["language"])
  },
  methods: {
    ...mapMutations("navigation", ["SET_ACTIVE_LANGUAGE"]),
    changeLang(language) {
      this.$i18n.locale = language;
      this.SET_ACTIVE_LANGUAGE(language);
    }
  }
};
</script>
<style lang="less" scoped>
.language-switch {
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 15px;
  font-family: "Roboto-Regular";
  font-size: 1.2em;
  font-weight: 100;
  span {
    margin: 0 2px;
    color: #ddd;
    border-radius: 24px;

    box-sizing: border-box;
    border-bottom: 2px solid rgba(0, 0, 0, 0);

    transition: all 0.6s;
  }
  .language-item {
    border: 1px solid rgba(255, 255, 255, 0.75);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    width: 24px;
    height: 24px;
    cursor: pointer;
    background-color: rgba(255, 238, 0, 0.15);
  }
  .language-item:hover {
    color: #303030;
    background-color: rgba(255, 238, 0, 1);
  }
}


@media only screen and (min-width: 48em) and (max-width: 75em) {
  .language-switch {
    .language-item:hover {
      color: #fff;
      background-color: rgba(255, 238, 0, 0.15);
    }
  }
}

@media only screen and (max-width: 48em) {
  .language-switch {
    .language-item:hover {
      color: #fff;
      background-color: rgba(255, 238, 0, 0.15);
    }
  }
}
</style>
