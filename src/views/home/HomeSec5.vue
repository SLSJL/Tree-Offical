<template>
  <div class="container-fluid home-section-5" @click="navigate"></div>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  name: "homeSec4",
  methods: {
    ...mapMutations("navigation", ["SET_ACTIVEINDEX"]),
    navigate() {
      this.SET_ACTIVEINDEX(4);
      this.$router.push({ path: "/resource" });
    }
  }
};
</script>

<style lang="less" scoped>
.home-section-5 {
  display: flex;
  justify-content: space-between;
  border-top: 8px solid #00877a;
  // border-bottom: 8px solid #00877a;
  width: 100%;
  height: 600px;
  background-position: 0 -100px;
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-image: url("./../../assets/images/home/home-bg-5-1@3x.jpg");
  cursor: pointer;
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .home-section-5 {
    width: 100%;
    height: 320px;
    background-position: 0 -100px;
    background-repeat: no-repeat;
    background-size: 100% auto;
  }
}

@media only screen and (max-width: 48em) {
  .home-section-5 {
    width: 100%;
    height: 400px;
    background-position: center;
    background-size:  100% auto;
  }
}
</style>
