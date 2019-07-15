<template>
  <div class="container-fluid">
    <div class="container-fluid our-tree-banner"></div>
    <TreeDetail></TreeDetail>
  </div>
</template>

<script>
import TreeDetail from "./TreeDetail";
export default {
  name: "OurTree",
  components: {
    TreeDetail
  }
};
</script>
<style lang="less" scoped>
.our-tree-banner {
  height: 400px;
  overflow: hidden;
  background-color: #00877a;
  background-image: url("./../../assets/images/tree/ourtree.jpg");
  background-size: 100% auto;
  background-position: 0 30%;
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .our-tree-map {
    height: 240px;
  }
}

@media only screen and (max-width: 48em) {
  .our-tree-banner {
    display: none;
  }
}
</style>
