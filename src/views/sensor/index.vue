<template>
  <div class="container-fluid sensor">
    <section class="sensor-sec-1">
      <Navigation class="sensor-nav"></Navigation>
      <div class="mask">
        <div class="introduction">
          <h1>{{$t("message.sensor.section1.caption")}}</h1>
          <p>{{$t("message.sensor.section1.body.p1")}}</p>
          <p>{{$t("message.sensor.section1.body.p2")}}</p>
          <ul>
            <li>
              <img :src="require('./../../assets/images/sensor/sensor-closeup-1.png')" alt />
            </li>
            <li>
              <img :src="require('./../../assets/images/sensor/sensor-closeup-2.png')" alt />
            </li>
            <li>
              <img :src="require('./../../assets/images/sensor/sensor-closeup-3.png')" alt />
            </li>
            <li>
              <img :src="require('./../../assets/images/sensor/sensor-closeup-4.png')" alt />
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
import WebFooter from "./../../components/webFooter/";

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

      background-color: rgba(0, 0, 0, 0.15);
      z-index: 0;

      .introduction {
        float: left;
        margin-top: 160px;
        margin-left: 120px;
        width: 50%;
        text-align: left;
        color: white;
        
        h1{
          font-size: 3.6rem;
          letter-spacing: 2px;
          text-shadow: 0 0 5px rgba(0, 0, 0, 0.75);
        }

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
            display: none;
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
      background-size: 100% 100%;

      .mask {
        .introduction {
          width: 100%;
          margin-top: 60px;
          margin-left: 0;
          margin-right: 0;

          h1 {
            margin-bottom: 1.5rem;
            text-align: center;
          }

          p {
            padding: 0 3rem;
            font-size: 1.4rem;
            line-height: 22px;
            text-align: justify;
            box-sizing: border-box;
          }

          .detail {
            color: #fff;
          }

          ul {
            display: none;
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
