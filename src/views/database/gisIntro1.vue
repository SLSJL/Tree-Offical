
<template>
  <div class="gis-intro">
    <div class="intro-header">
      <img :src="require('./../../assets/images/common/close.png')" @click="$emit('click')">
    </div>
    <div class="intro-body">
      <div class="intro-col">
        <h1>What is GIS?</h1>
        <p>Geographic Information System (GIS) caters for gathering, managing and analyzing data. It integrates data related to the science of geography for analysis of spatial location and visualization of information through maps and 3D scenes. GIS reveals deep insights of data analysis; detects changing patterns and correlation of difference in data and predicts respondence to the changes and so helps users in making decision promptly.</p>
        <img :src="require('./../../assets/images/database/GISMonitoring.png')" alt>
      </div>
      <div class="intro-col">
        <h1>How can GIS monitor trees?</h1>
        <p>GIS is good in presenting data derived from distributed locations. With its time series techniques, spatio-temporal data analysis is achieved and forms the essential part of this Project to study the interaction between individual tree root-plate movement and environmental factors.</p>
      </div>
      <div class="intro-col">
        <h1>Big Data Analytics</h1>
        <p>Results of threshold testing are combined for Big Data Analytics to construct a Spatial Big Database with interface of alert notification on root-plate movement by taking both intrinsic bio-physical tree information and surrounding environmental variables. This early monitoring system helps identify and mitigate tree failure efficiently and effectively. The tree movement data or threshold database indicated on the user interface is an analytical tool to evaluate data in real time. This monitoring system can visualize and pinpoint the potential “follow-up” trees in testing. The respective compatible Android and iOS-platform will be developed for effectively managing urban trees which are potentially vulnerable to climate changes.</p>
        <img :src="require('./../../assets/images/database/gis-3.gif')" alt>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "gisIntro"
};
</script>
<style lang="less" scoped>
.gis-intro {
  padding: 15px 30px;
  width: 800px;
  height: 65%;
  overflow: auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;

  .intro-header {
    width: 100%;
    height: 36px;
    line-height: 36px;
    text-align: right;

    img {
      height: 18px;
      cursor: pointer;
    }
    img:hover {
      background-color: #eee;
    }
  }
  .intro-body {
    flex: 1;
    width: 100%;
    overflow: auto;
    // display: flex;
    .intro-col {
      width: 100%;
    }
    h1 {
      margin-top: 0;
      margin-bottom: 5px;
      padding: 0 15px;
      text-align: left;
    }
    p {
      padding: 15px;
      text-align: left;
      line-height: 24px;
      font-size: 16px;
      text-align: justify;
    }
    img {
      width: 60%;
      margin: 15px auto;
      margin-bottom: 30px;
    }
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .intro-body {
    p {
      padding: 15px;
      text-align: left;
      line-height: 24px;
      font-size: 1.6rem;
    }
  }
}

@media only screen and (max-width: 48em) {
  .gis-intro {
    width: 80%;
    height: 65%;

    .intro-body {
      p {
        padding: 15px;
        text-align: left;
        line-height: 24px;
        font-size: 1.6rem;
      }
    }
  }
}
</style>

