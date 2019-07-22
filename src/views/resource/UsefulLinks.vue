
<template>
  <div class="container media-useful-links">
    <div class="caption">
      <span>{{$t("message.resource.links.caption")}}</span>
    </div>

    <div class="partner-group">
      <a
        href="https://charities.hkjc.com/charities/chinese/charities-trust/index.aspx"
        target="blank"
      >
        <img :src="require('./../../assets/images/home/p6_1_1.png')" alt />
      </a>

      <a href="https://www.polyu.edu.hk/web/en/home/index.html" target="blank">
        <img :src="require('./../../assets/images/home/p6_2.png')" alt />
      </a>

      <a href="https://www.biosch.hku.hk/" target="blank">
        <img :src="require('./../../assets/images/home/ust.png')" alt />
      </a>

      <a href="https://www.hku.hk/" target="blank">
        <img :src="require('./../../assets/images/home/p6_4.png')" alt />
      </a>

      <a href="https://www.afcd.gov.hk/tc_chi/index.html" target="blank">
        <img :src="require('./../../assets/images/aboutUs/Agriculture.png')" alt />
      </a>

      <a href="https://www.devb.gov.hk/en/home/index.html" target="blank">
        <img :src="require('./../../assets/images/aboutUs/DevelopmentBureau.png')" alt />
      </a>

      <a href="https://www.greening.gov.hk/en/home/index.html" target="blank">
        <img :src="require('./../../assets/images/aboutUs/GLTMS.png')" alt />
      </a>

      <a href="https://www.ekeo.gov.hk/en/home/index.html" target="blank">
        <img :src="require('./../../assets/images/aboutUs/kowloon.gif')" alt />
      </a>

      <a href="https://www.hyd.gov.hk/en/home/index.html" target="blank">
        <img :src="require('./../../assets/images/aboutUs/Highways.png')" alt />
      </a>

      <a href="https://www.archsd.gov.hk/en/home.aspx" target="blank">
        <img :src="require('./../../assets/images/aboutUs/Architectural.png')" alt />
      </a>

      <a class="large" href="https://www.lcsd.gov.hk/en/" target="blank">
        <img :src="require('./../../assets/images/aboutUs/leisure.png')" alt />
      </a>

      <a class="large" href="https://www.foe.org.hk/default.aspx" target="blank">
        <img :src="require('./../../assets/images/home/p6_5.png')" alt />
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "usefulLink"
};
</script>
<style lang="less" scoped>
.media-useful-links {
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  text-align: left;
  .caption {
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #ddd;

    span {
      display: inline-block;
      padding: 0 15px;
      min-width: 120px;
      height: 40px;

      text-align: center;
      line-height: 40px;
      background-color: #00877a;
      color: #fff;
      font-size: 1.6rem;
    }
  }
  .partner-group {
    width: 100%;
    text-align: left;
    a {
      margin: 30px 0;
      display: inline-block;
      width: 50%;
      text-align: left;
      overflow: hidden;

      img {
        height: 90px;
      }
    }
    a.large {
      img {
        height: 120px;
      }
    }
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .media-useful-links {
    width: 100%;
    padding: 0 6rem;
    box-sizing: border-box;

    .partner-group {
      width: 100%;
      text-align: left;
      overflow: auto;
      a {
        margin: 15px 0;
        display: inline-block;
        width: 50%;
        text-align: left;

        img {
          max-width: 60%;
        }
      }
      a.large {
        img {
          height: 60px;
        }
      }
    }
  }
}

@media only screen and (max-width: 48em) {
  .media-useful-links {
    width: 100%;
    padding: 0 1.5rem;
    box-sizing: border-box;

    .partner-group {
      width: 100%;
      text-align: left;
      overflow: auto;
      a {
        margin: 15px 0;
        display: inline-block;
        width: 100%;
        text-align: left;

        img {
          width: auto !important;
          height: 40px;
        }
      }
      a.large {
        img {
          height: 60px;
        }
      }
    }
  }
}
</style>
