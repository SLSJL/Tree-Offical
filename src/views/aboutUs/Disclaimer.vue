
<template>
  <div class="container aboutus-disclaimer">
    <div class="location-lable-gp">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>{{$t("message.aboutus.disclaimer.breadcrumb.item1")}}</el-breadcrumb-item>
        <el-breadcrumb-item>
          <b>{{$t("message.aboutus.disclaimer.breadcrumb.item2")}}</b>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <P>{{$t("message.aboutus.disclaimer.text.p1")}}</P>
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
  }
};
</script>
<style lang="less" scoped>
.aboutus-disclaimer {
  min-height: 400px;
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
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .aboutus-disclaimer {
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
  }
}

@media only screen and (max-width: 48em) {
  .aboutus-disclaimer {
    overflow: auto;
    width: 100%;
    padding: 0 3rem;
    padding-top: 3rem;
    box-sizing: border-box;
  }
}
</style>
