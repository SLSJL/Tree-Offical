
<template>
  <div class="container our-snesor-article">
    <!-- 文章內容 -->
    <div class="article-body">
      <!-- 內容 -->
      <div class="article-content">
        <!-- <h1>OUR SENSOR</h1> -->
        <p>We base on Smart Sensing Technology (SST) to develop an integrated system for monitoring tree tilting angles. With tailor-made sensors installed on the lower trunk of 400 selected urban trees in two areas with high traffic and pedestrian flow, it monitors tree tilting angles over time. Trees of 9 vulnerable species at risk of tree failure are selected for monitoring, such as Bauhinia variegata, Delonix regia, Senna siamea, Aleurites moluccana, etc.</p>
        <p>Taking various environmental factors into consideration, a threshold value will be determined to measure the root-plate movement. If a sensor detects that the tilting angle of a tree exceeds the threshold, the System will give an alert to conduct a visit to the tree and/or to conduct detailed investigations. The System will be further implemented on over 8,000 trees across the entire city in Hong Kong.</p>
        <p>The sensor measures the mechanical response of a tree to wind force, recording the tilting values at near ground level and provides an insightful strength of root anchorage. Monitoring root plate rotation by means of the sensor on a regular basis would enable an early warning system in tree management to reduce the risk of damage caused by root failure.</p>
        <img :src="require('./../../assets/images/sensor/Sensor-On-Tree.jpg')" alt>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "OurTreeMap",

  data() {
    return {};
  },
  async mounted() {}
};
</script>
<style lang="less" scoped>
.our-snesor-article {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 30px;
  max-width: 100%;

  .article-body {
    flex: 1;
    padding-right: 15px;

    .location-lable-gp {
      padding-left: 15px;
      width: 100%;
      display: flex;
      align-items: center;
      height: 40px;
      border-radius: 4px;
      background-color: #f5f5f5;
      box-sizing: border-box;
    }
  }
  .article-nav {
    width: 320px;
    text-align: left;
    border-top: 2px solid #00877a;
    box-sizing: border-box;
    background-color: #f5f5f5;

    h1 {
      display: flex;
      padding: 0 15px;

      align-items: center;
      color: #00a07d;
      margin: 10px 0;
      img {
        margin-right: 15px;
        height: 18px;
      }
    }

    li {
      padding: 0 15px;

      height: 36px;
      line-height: 36px;
      cursor: pointer;
      transition: all 0.6s;
      font-size: 13px;
      color: #606060;
    }

    li:hover,
    li.activce {
      height: 36px;
      line-height: 36px;
      background-color: #d6eeec;
    }
  }
  .article-content {
    text-align: center;
    h1 {
      color: #303030;
      text-align: left;
    }
    p {
      font-size: 16px;
      color: #606060;
      line-height: 24px;
      text-align: justify;
    }

    img {
      margin: 30px auto;
      width: 640px;
    }
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .article-content {
    width: 100%;
    text-align: justify;
    h1 {
      padding: 0 6rem;
    }
    p {
      font-size: 1.6rem;
      padding: 0 6rem;
    }
  }
}

@media only screen and (max-width: 48em) {
  .our-snesor-article {
    width: 100%;

    .article-content {
      text-align: center;
      width: 100%;
      h1 {
        padding: 0 3rem;
        display: none;
      }
      p {
        font-size: 1.4rem;
        padding: 0 3rem;
        text-align: justify;
      }
      img {
        margin: 30px auto;
        max-width: 90%;
      }
    }
  }
}
</style>
