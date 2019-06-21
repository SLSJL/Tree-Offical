<template>
  <div class="container-fluid">
    <TreeMap class="tree-map"></TreeMap>
    <TreeArticle></TreeArticle>
  </div>
</template>

<script>
import TreeMap from "./../../components/ourTree/TreeMap";
import TreeArticle from "./../../components/ourTree/TreeArticle";

export default {
  name: "OurTree",
  components: {
    TreeMap,
    TreeArticle
  }
};
</script>
<style lang="less" scoped>
@media only screen and (max-width: 48em) {
  .tree-map{
    display: none;
  }
}
</style>
