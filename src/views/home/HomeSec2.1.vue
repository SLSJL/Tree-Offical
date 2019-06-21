<template>
  <div class="container-fluid home-section-2">
    <div class="home-p1-content">
      <h1>OUR TREES</h1>
      <p>Tree stability in urban landscape is affected by three factors: environmental features, biological features and physical features of a tree.</p>
      <p>Trees behave like a vibrant system. The tree anchorage holds soil firmly so that the root supports the tree trunk and foliage. Weak anchorage in the root which may cause hazard of tree falling can be detected by measuring the turning momentum of a tree. Therefore, capturing relevant tilting data and monitoring root stability of urban trees could help in predicting risk of tree falling more accurately so as to ensure better safety to the public.</p>
    </div>
    <div class="home-p1-storymaps">
      <div class="storymap-thumb-gp">
        <StorymapThumb :thumb="require('./../../assets/images/home/story-map-1.png')"></StorymapThumb>
        <StorymapThumb :thumb="require('./../../assets/images/home/story-map-2.png')"></StorymapThumb>
        <StorymapThumb :thumb="require('./../../assets/images/home/story-map-3.png')"></StorymapThumb>
        <StorymapThumb :thumb="require('./../../assets/images/home/story-map-4.png')"></StorymapThumb>
        <StorymapThumb :thumb="require('./../../assets/images/home/story-map-5.png')"></StorymapThumb>
        <StorymapThumb :thumb="require('./../../assets/images/home/story-map-6.png')"></StorymapThumb>
        <StorymapThumb></StorymapThumb>
      </div>
    </div>
  </div>
</template>
<script>
import StorymapThumb from "./../../components/home/StorymapThumb";

export default {
  name: "homeSec2",
  components: { StorymapThumb }
};
</script>

<style lang="less" scoped>
.home-section-2 {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 600px;

  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100%;
  background-image: url("./../../assets/images/home/tree-p1_bg.png");

  .home-p1-content {
    padding-left: 120px;
    width: 50%;
    height: 100%;
    text-align: left;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    h1 {
      margin-top: -120px;
      display: inline-block;
      padding: 5px 10px;
      border-bottom: 2px solid #00877a;
    }
    p {
      font-size: 16px;
      line-height: 24px;
      text-align: justify;
    }
  }

  .home-p1-storymaps {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    .storymap-thumb-gp {
      margin-top: -120px;
      max-width: 360px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
    }
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .home-section-2 {
    .home-p1-content {
      padding-left: 120px;
      width: 50%;
      height: 100%;
      text-align: left;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;

      h1 {
        margin-top: -60px;
      }
      p {
        font-size: 1.6rem;
        line-height: 2.4rem;
        text-align: justify;
      }
    }
  }
}

@media only screen and (max-width: 48em) {
  .home-section-2 {
    .home-p1-content {
      padding: 0 30px;
      width: 100%;
      height: 100%;
      text-align: left;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;

      h1 {
        margin-top: -60px;
      }
      p {
        font-size: 1.4rem;
        line-height: 2.4rem;
        text-align: justify;
      }
    }

    .home-p1-storymaps {
      display: none;
    }
  }
}
</style>
