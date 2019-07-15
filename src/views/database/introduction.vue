
<template>
  <div class="gis-intro">
    <div class="intro-header">
      <img :src="require('./../../assets/images/common/close.png')" @click="$emit('click')" />
    </div>
    <div class="intro-body">
      <div class="intro-col">
        <h1>{{$t("message.gis.section1.caption")}}</h1>
        <p>{{$t("message.gis.section1.body")}}</p>
        <img :src="require('./../../assets/images/database/GISMonitoring.png')" alt />
      </div>
      <div class="intro-col">
        <h1>{{$t("message.gis.section2.caption")}}</h1>
        <p>{{$t("message.gis.section2.body")}}</p>
      </div>
      <div class="intro-col">
        <h1>{{$t("message.gis.section3.caption")}}</h1>
        <p>{{$t("message.gis.section3.body")}}</p>
        <img :src="require('./../../assets/images/database/gis-3.gif')" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GISIntro"
};
</script>
<style lang="less" scoped>
.gis-intro {
  width: 800px;
  height: 65%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  .intro-header {
    height: 40px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;

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
    box-sizing: border-box;

    .intro-col {
      width: 100%;
    }
    h1 {
      margin-top: 30px;
      margin-bottom: 15px;
      padding: 0 30px;
      text-align: left;
    }
    p {
      padding: 0 30px;
      text-align: left;
      line-height: 24px;
      font-size: 16px;
      text-align: justify;
    }
    img {
      width: 50%;
      margin: 15px auto;
      margin-bottom: 60px;
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

