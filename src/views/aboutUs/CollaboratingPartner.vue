
<template>
  <div class="container collabratie-partners-article">
    <div class="location-lable-gp">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>{{$t("message.aboutus.partner.breadcrumb.item1")}}</el-breadcrumb-item>
        <el-breadcrumb-item>
          <b>{{$t("message.aboutus.partner.breadcrumb.item2")}}</b>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <p>{{$t("message.aboutus.partner.text.p1")}}</p>

    <div class="partner-group">
      <p>
        <a href="https://www.greening.gov.hk/en/home/index.html" target="blank">
          <img :src="require('./../../assets/images/aboutUs/DevelopmentBureau.png')" alt />
        </a>

        <a href="https://www.greening.gov.hk/en/home/index.html" target="blank">
          <img :src="require('./../../assets/images/aboutUs/GLTMS.png')" alt />
        </a>

        <a href="https://www.ekeo.gov.hk/en/home/index.html" target="blank">
          <img :src="require('./../../assets/images/aboutUs/kowloon.gif')" alt />
        </a>
      </p>

      <a href="https://www.hyd.gov.hk/en/home/index.html" target="blank">
        <img :src="require('./../../assets/images/aboutUs/Highways.png')" alt />
      </a>

      <a href="https://www.archsd.gov.hk/en/home.aspx" target="blank">
        <img :src="require('./../../assets/images/aboutUs/Architectural.png')" alt />
      </a>

      <a class="leisure" href="https://www.foe.org.hk/default.aspx" target="blank">
        <img :src="require('./../../assets/images/aboutUs/leisure.png')" alt />
      </a>
      <a href="https://www.afcd.gov.hk/tc_chi/index.html" target="blank">
        <img :src="require('./../../assets/images/aboutUs/Agriculture.png')" alt />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "OurTree",
  components: {}
};
</script>
<style lang="less" scoped>
.collabratie-partners-article {
  overflow: auto;
  padding-top: 1.5rem;
  .location-lable-gp {
    width: 100%;
    display: flex;
    align-items: center;
    height: 40px;
    border-radius: 4px;
    background-color: #f5f5f5;
    box-sizing: border-box;
  }
  p {
    color: #606060;
    text-align: left;
    line-height: 24px;
    font-size: 1.6rem;
  }

  .partner-group {
    width: 100%;
    text-align: left;
    a {
      margin: 30px 0;
      display: inline-block;
      width: 50%;
      text-align: left;

      img {
        height: 60px;
      }
    }

    p {
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        display: inline-block;
        text-align: left;
        img {
          height: 60px;
        }
      }

      a:nth-child(2),
      a:nth-child(3) {
        width: 25%;
        img {
          height: 40px;
        }
      }
    }
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .collabratie-partners-article {
    overflow: auto;
    width: 100%;
    padding: 0 3rem;
    padding-top: 1.5rem;
    box-sizing: border-box;

    p {
      color: #606060;
      text-align: left;
      line-height: 24px;
      font-size: 1.4rem;
    }

    .partner-group {
      width: 100%;
      text-align: left;
      a {
        margin: 30px 0;
        display: inline-block;
        width: 50%;
        text-align: left;
        img {
          max-width: 36rem;
        }
      }
    }
  }
}

@media only screen and (max-width: 48em) {
  .collabratie-partners-article {
    overflow: auto;
    width: 100%;
    padding: 0 3rem;
    padding-top: 3rem;
    box-sizing: border-box;

    p {
      color: #606060;
      text-align: left;
      line-height: 24px;
      font-size: 1.4rem;
    }

    .partner-group {
      width: 100%;
      margin: 3rem 0;
      a {
        display: inline-block;
        text-align: left;
        width: 100%;
        img {
          height: 40px;
        }
      }

      a.leisure {
        img {
          height: 80px;
        }
      }
      p {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        a {
          margin: 0;
        }
        a:nth-child(2),
        a:nth-child(3) {
          width: 25%;
          margin: 1rem 0;
          img {
            height: 40px;
          }
        }
      }
    }
  }
}
</style>
