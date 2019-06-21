<template>
  <div class="container-fluid sensor">
    <section class="sensor-sec-1">
      <Navigation class="sensor-nav"></Navigation>
      <div class="mask">
        <div class="introduction">
          <h1>OUR SENSOR</h1>
          <p>This application is an IoT device. The sensor device can measure tilting angles and send the signals to the gateway. This mechanism can provide an instant feedback to the server. Through the GIS platform, an individual tree with geographical location, tree attributes and its tilt angle can be identified on the screen of a computer located in the monitoring office. A massive scale of trees can be monitored at the same instant. This operation could facilitate the works of tree management team by providing fast and reliable additional information for assessing tree health.</p>
          <p>We hope that the early notification of tree risk would eventually benefit to the public in this way to preserve trees in Hong Kong to the further extent.</p>
          <!-- <el-button class="detail" type="text">details >></el-button> -->

          <ul>
            <li>
              <img :src="require('./../../assets/images/sensor/sensor-closeup-1.png')" alt>
            </li>
            <li>
              <img :src="require('./../../assets/images/sensor/sensor-closeup-2.png')" alt>
            </li>
            <li>
              <img :src="require('./../../assets/images/sensor/sensor-closeup-3.png')" alt>
            </li>
            <li>
              <img :src="require('./../../assets/images/sensor/sensor-closeup-4.png')" alt>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="sensor-sec-2">
      <SensorArticle></SensorArticle>
    </section>
    <WebFooter></WebFooter>
  </div>
</template>

<script>
import Navigation from "./../../components/navigation/";
import SensorArticle from "./../../components/sensor/SensorArticle";
import WebFooter from "./../../components/WebFooter/";

export default {
  name: "Sensor",
  components: {
    Navigation,
    SensorArticle,
    WebFooter
  }
};
</script>
<style lang="less" scoped>
.sensor {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  background-image: url("./../../assets/images/sensor/sensor-bg.jpg");
  background-size: 100% 100%;

  .sensor-sec-1 {
    width: 100%;
    height: 100%;
    .sensor-nav {
      position: absolute;
      top: 0;
      left: 0;
    }

    .mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      background-color: rgba(0, 0, 0, 0.35);
      z-index: 0;

      .introduction {
        float: left;
        margin-top: 160px;
        margin-left: 120px;
        width: 50%;

        text-align: left;

        color: white;

        p {
          font-size: 16px;
          line-height: 24px;
          text-shadow: 0 0 5px rgba(0, 0, 0, 0.75);
          font-weight: 400;
          text-align: justify;
        }

        .detail {
          color: #fff;
        }

        ul {
          margin-top: 30px;
          li {
            display: inline-block;
            margin-right: 15px;
            width: 80px;
            height: 80px;

            border-radius: 80px;
            border: 3px solid rgba(255, 255, 255, 0.35);
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .sensor {
    background-size: auto 100%;
    .sensor-sec-1 {
      width: 100%;
      height: 100%;

      .mask {
        .introduction {
          margin-top: 12rem;

          p {
            font-size: 1.6rem;
          }

          .detail {
            color: #fff;
          }

          ul {
            margin-top: 30px;
            li {
              display: inline-block;
              margin-right: 15px;
              width: 80px;
              height: 80px;

              border-radius: 80px;
              border: 3px solid rgba(255, 255, 255, 0.35);
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 48em) {
  .sensor {
    background-size: auto 100%;
    box-sizing: border-box;

    .sensor-sec-1 {
      width: 100%;
      height: 100%;

      .mask {
        .introduction {
          width: 100%;
          margin-top: 12rem;
          margin-left: 0;
          margin-right: 0;

          h1 {
            margin-bottom: 3rem;
            text-align: center;
          }
          p {
            padding: 0 3rem;
            font-size: 1.4rem;
            text-align: justify;
            box-sizing: border-box;
          }

          .detail {
            color: #fff;
          }

          ul {
            margin-top: 30px;
            padding: 0 3rem;

            li {
              display: inline-block;
              margin-right: 15px;
              width: 40px;
              height: 40px;

              border-radius: 80px;
              border: 3px solid rgba(255, 255, 255, 0.35);
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
    }

    .sensor-sec-2 {
      width: 100%;
    }
  }
}
</style>
