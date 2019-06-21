<template>
  <div class="container-fluid about-us-nav">
    <ul>
      <router-link
        :class="[{active: activeIndex === idx}]"
        :to="item.route"
        v-for="(item, idx) in treeNavs"
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
  data() {
    return {
      treeNavs: [
        {
          text: "Background",
          route: "/aboutus/projectBackground"
        },
        {
          text: "Objectives",
          route: "/aboutus/projectObjectives"
        },
        {
          text: "Project Stage",
          route: "/aboutus/projectStage"
        },
        {
          text: "Project Team",
          route: "/aboutus/projectTeam"
        },
        {
          text: "Collaborating Partners",
          route: "/aboutus/collaboratingPartner"
        },
        {
          text: "Contact Us",
          route: "/aboutus/contactUs"
        },
        {
          text: "Disclaimer",
          route: "/aboutus/disclaimer"
        }
      ]
    };
  },
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
.about-us-nav {
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

@media only screen and (max-width: 48em) {
  .about-us-nav {
    width: 100%;
    height: auto;

    ul {
      width: 100%;
      color: #fff;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;

      li {
        width: 30;
        height: 40px;
        line-height: 40px;
        padding: 0 15px;
        list-style: none;
        font-size: 13px;
        cursor: pointer;
        transition: all 0.6s;
        color: #fff;
      }
    }
  }
}
</style>
