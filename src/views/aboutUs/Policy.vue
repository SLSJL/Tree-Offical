
<template>
  <div class="container aboutus-policy">
    <div class="location-lable-gp">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>{{$t("message.aboutus.policy.breadcrumb.item1")}}</el-breadcrumb-item>
        <el-breadcrumb-item>
          <b>{{$t("message.aboutus.policy.breadcrumb.item2")}}</b>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <P>{{$t("message.aboutus.policy.text.p1")}}</P>
    <p>{{$t("message.aboutus.policy.text.p2")}}</p>
    <p>
      {{$t("message.aboutus.policy.text.p3")}}
      <a
        href="https://www.polyu.edu.hk/web/tc/privacy_policy_statement/index.html"
        target="_blank"
      >{{$t("message.aboutus.policy.text.p4")}}</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "aboutUsPolicy",
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
.aboutus-policy {
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
    text-align: left;
    line-height: 24px;
    font-size: 1.6rem;
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .aboutus-policy {
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
  .aboutus-policy {
    overflow: auto;
    width: 100%;
    padding: 0 3rem;
    padding-top: 3rem;
    box-sizing: border-box;
  }
}
</style>
