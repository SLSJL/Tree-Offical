<template>
  <div class="container aboutus-project-team">
    <div class="location-lable-gp">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>{{$t("message.aboutus.team.breadcrumb.item1")}}</el-breadcrumb-item>
        <el-breadcrumb-item>
          <b>{{$t("message.aboutus.team.breadcrumb.item2")}}</b>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <p>{{$t("message.aboutus.team.text.p1")}}</p>

    <div class="partner-group">
      <a href="https://www.polyu.edu.hk/web/en/home/index.html" target="blank">
        <img :src="require('./../../assets/images/home/p6_2.png')" alt />
      </a>
      <a href="https://www.ust.hk/" target="blank">
        <img :src="require('./../../assets/images/home/p6_3.png')" alt />
      </a>

      <a href="https://www.hku.hk/" target="blank">
        <img :src="require('./../../assets/images/home/p6_4.png')" alt />
      </a>

      <a href="https://www.foe.org.hk/default.aspx" target="blank">
        <img :src="require('./../../assets/images/home/p6_5.png')" alt />
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
.aboutus-project-team {
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
    margin: 0;
    padding: 15px 0;
    color: #606060;
    text-align: justify;
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
        height: 8rem;
      }
    }
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .aboutus-project-team {
    overflow: auto;
    width: 100%;
    padding: 0 3rem;
    padding-top: 1.5rem;

    box-sizing: border-box;

    p {
      color: #606060;
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
  .aboutus-project-team {
    overflow: auto;
    width: 100%;
    padding: 0 3rem;
    padding-top: 3rem;

    box-sizing: border-box;

    p {
      color: #606060;
      line-height: 24px;
      font-size: 1.4rem;
    }

    .partner-group {
      width: 100%;
      margin: 1.5rem 0;
      a {
        margin: 1.5rem 0;
        display: inline-block;
        width: 100%;
        text-align: center;
        img {
          max-width: 80%;
        }
      }
    }
  }
}
</style>
