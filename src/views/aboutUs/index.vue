<template>
  <div class="container-fluid about-us-container">
    <Navigation></Navigation>
    <AboutUsNav></AboutUsNav>
    <router-view></router-view>
    <WebFooter></WebFooter>
  </div>
</template>

<script>
import Navigation from "./../../components/navigation/";
import AboutUsNav from "./../../components/aboutUs/aboutUsNav";
import WebFooter from "./../../components/webFooter/";

export default {
  name: "OurTree",
  components: {
    Navigation,
    AboutUsNav,
    WebFooter
  }
};
</script>
<style lang="less" scoped>

</style>
