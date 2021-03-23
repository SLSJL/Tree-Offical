<template>
  <div class="container-fluid our-tree-nav">
    <ul>
      <router-link
        :class="[{active: activeIndex === idx}]"
        :to="item.route"
        v-for="(item, idx) in $t('message.tree.nav')"
        :key="idx"
        tag="li"
        @click.native="SET_ACTIVEINDEX(idx)"
      >{{item.text}}</router-link>
    </ul>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "TreeNav",
  methods: {
    ...mapMutations("tree", ["SET_ACTIVEINDEX"])
  },
  computed: {
    ...mapState("tree", ["activeIndex"])
  },
  destroyed() {
    this.SET_ACTIVEINDEX(0);
  }
};
</script>
<style lang="less" scoped>
.our-tree-nav {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #006359;
  ul {
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      height: 40px;
      line-height: 40px;
      padding: 0 15px;
      list-style: none;
      font-size: 13px;
      cursor: pointer;
      transition: all 0.6s;
      color: #fff;
    }
    li:hover,
    li.active {
      background-color: #00877a;
    }
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .our-tree-nav {
    ul {

    }
  }
}

@media only screen and (max-width: 48em) {
  .our-tree-nav {
    ul {
      width: 100%;
      display: flex;
      li {
        width: 50%;
      }

    }
  }
}
</style>
