<template>
  <div class="container-fluid our-tree-map" id="tree-map"></div>
</template>
<script>
export default {
  name: "OurTreeMap",
  data() {
    return {
      map: null,
      attrField: ["Nom", "Species", "DBH", "Notes", "University"]
    };
  },
  async mounted() {
    // this.map = this.$utils.map.init("tree-map", {
    //   minZoom: 7,
    //   maxZoom: 19,
    //   zoomControl: false,
    //   attributionControl: false,
    //   dragging: false,
    //   scrollWheelZoom: false
    // });
    // this.map.setView([22.4112900000000651, 114.0460700000001], 16);
    // this.$utils.map.addEsriBasemap("Streets");
    // this.$utils.map.addEsriBasemap("ImageryLabels");
    // this.treeLayer = await this.$utils.map.addEsriDynanmicLayer({
    //   url:
    //     "http://158.132.186.221:6080/arcgis/rest/services/Tree/Tree/MapServer",
    //   opacity: 1,
    //   useCors: false
    // });
  }
};
</script>
<style lang="less" scoped>
.our-tree-map {
  height: 400px;
  overflow: hidden;
  background-color: #00877a;
  background-image: url("./../../assets/images/tree/ourtree.jpg");
  background-size: 100% auto;
  background-position: 0  30%;
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .our-tree-map {
    height: 240px;
  }
}
</style>
