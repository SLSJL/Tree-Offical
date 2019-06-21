
<template>
  <div class="container-fluid aboutus-contact-us">
    <div class="location-map" id="location-map"></div>
  </div>
</template>

<script>
export default {
  name: "aboutUsContactUs",
  components: {},
  data() {
    return {
      map: null,
      polyU: null
    };
  },
  async mounted() {
    this.map = this.$utils.map.init("location-map", {
      minZoom: 7,
      maxZoom: 19,
      zoomControl: false,
      attributionControl: false
    });
    this.map.setView([22.3066, 114.17932], 17);
    this.$utils.map.addEsriBasemap("Topographic");
    // this.$utils.map.addEsriBasemap("ImageryLabels");

    this.polyU = await this.$utils.map.addMaker(
      this.map,
      [22.306, 114.17932],
      {
        iconUrl: require("./../../assets/images/aboutUs/institute.png"),
        iconSize: [32, 32]
      }
    );
    let lsgiImg = require("./../../assets/images/aboutUs/logo-lsgi35.png");
    let rslImg = require("./../../assets/images/aboutUs/rsl.png");

    this.polyU
      .bindPopup(
        `<img class="lsgi-logo" src="${lsgiImg}">
        <img class="rsl-logo" src="${rslImg}">
        <p class="m-text"> ZB213, The Hong Kong Polytechnic University, Kowloon, Hong Kong</p>
         <p class="m-text"> Email: jcsmarttree@gmail.com</p>`,
        {
          maxWidth: 300
        }
      )
      .openPopup();
  }
};
</script>
<style lang="less" scoped>
.aboutus-contact-us {
  flex: 1;
  .location-map {
    width: 100%;
    height: 640px;
  }
}
</style>
