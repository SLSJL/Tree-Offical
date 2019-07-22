<template>
  <div class="container-fluid">
    <Navigation></Navigation>
    <TreeNav></TreeNav>
    <router-view></router-view>
    <WebFooter></WebFooter>
  </div>
</template>

<script>
import Navigation from "./../../components/navigation/";
import TreeNav from "./../../components/ourTree/TreeNav";
import WebFooter from "./../../components/webFooter/";

export default {
  name: "OurTree",
  components: {
    Navigation,
    TreeNav,
    WebFooter
  }
};
</script>
<style lang="less" scoped>
</style>
