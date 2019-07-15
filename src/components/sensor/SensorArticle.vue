
<template>
  <div class="container our-snesor-article">
    <div class="article-body">
      <div class="article-content">
        <p>{{$t("message.sensor.section2.p1")}}</p>
        <p>{{$t("message.sensor.section2.p2")}}</p>
        <p>{{$t("message.sensor.section2.p3")}}</p>
        <img :src="require('./../../assets/images/sensor/Sensor-On-Tree.jpg')" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "OurTreeMap"
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
