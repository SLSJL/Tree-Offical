<template>
  <div class="container-fluid">
    <div
      class="container-fluid cooperate-gp"
      v-if="$route.name != 'projectTeam' && $route.name != 'collaboratingPartner' && $route.name != 'resource'"
    >
      <img :src="require('./../../assets/images/home/hkjc.png')" alt>
      <img :src="require('./../../assets/images/home/polyu.png')" alt>

      <img :src="require('./../../assets/images/home/ust.png')" alt>
      <img :src="require('./../../assets/images/home/hku.png')" alt>
      <img :src="require('./../../assets/images/home/foe.png')" alt>
    </div>

    <div class="home-section-5">
      <div class="gp-wrap">
        <p>
          Copyright © 2018 - 2019.Remote Sensing Laboratory,
          <br>The Hong Kong Polytechnic University. All rights reserved.
        </p>
      </div>

      <div class="gp-wrap">
        <h3>ADDRESS</h3>
        <p>
          The Department of Land Surveying and Geo-Informatics,
          <br>The Hong Kong Polytechnic University,
          <br>Room ZS621, 6/F, South Wing, Block Z,Phase 8,
          <br>181 Chatham Road South,
          <br>Hung Hom, Kowloon, Hong Kong.
        </p>
      </div>

      <div class="gp-wrap">
        <h3>OPENING HOURS</h3>
        <p>
          Monday - Friday:
          <br>8:45am - 5:35pm
          <br>
          <br>Lunch Break:
          <br>1:00pm - 2:00pm
          <br>
          <br>Saturdays, Sundays and Public Holidays:
          <br>Closed
        </p>
      </div>

      <div class="gp-wrap">
        <h3>CONTACT</h3>
        <p>
          TEL (852) 2766-5968
          <br>FAX (852) 2330-2994
          <br>EMAIL lsdept@polyu.edu.hk
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "homeSec4"
};
</script>

<style lang="less" scoped>
.cooperate-gp {
  display: flex;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  img {
    height: 80px;
    margin: 0 15px;
  }
}

.home-section-5 {
  display: flex;
  width: 100%;
  height: 320px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  background-color: #00877a;

  .gp-wrap {
    margin: 30px;
    text-align: left;
    color: #fff;
    p {
      font-size: 13px;
      line-height: 20px;
    }
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .cooperate-gp {
    display: flex;
    width: 100%;
    height: 200px;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    img {
      max-width: 15%;
      height: auto;
      margin: 0 15px;
    }
  }
}

@media only screen and (max-width: 48em) {
  .cooperate-gp {
    display: flex;
    width: 100%;
    height: 640px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    box-sizing: border-box;

    img {
      max-width: 75%;
      margin: 15px 0;
      margin-left: 3rem;
    }
  }

  .home-section-5 {
    display: flex;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    box-sizing: border-box;
    background-color: #00877a;

    .gp-wrap {
      margin: 15px 30px;
      text-align: left;
      color: #fff;
      p {
        font-size: 13px;
        line-height: 20px;
      }
    }
  }
}
</style>
