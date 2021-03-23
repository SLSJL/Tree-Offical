<template>
  <div class="container-fluid">
    <div class="web-footer-infobar">
      <div class="gp-wrap">
        <p>
          <span>Funded by</span>
        </p>
        <img
          class="jc-logo"
          :src="require('./../../assets/images/home/hkjc.png')"
          alt
        />
        <p>
          Copyright © 2018 - 2019. Jockey Club Smart City Tree Management
          Project,
          <br />The Hong Kong Polytechnic University. All rights reserved.
        </p>
      </div>

      <div class="gp-wrap">
        <h3>ADDRESS</h3>
        <p>
          The Department of Land Surveying and Geo-Informatics,
          <br />The Hong Kong Polytechnic University, <br />Room ZB213, South
          Wing, Block Z, Phase 8, <br />181 Chatham Road South, <br />Hung Hom,
          Kowloon, Hong Kong.
        </p>
      </div>

      <!-- <div class="gp-wrap">
        <h3>OPENING HOURS</h3>
        <p>
          Monday - Friday:
          <br />8:45am - 5:35pm
          <br />
          <br />Lunch Break:
          <br />1:00pm - 2:00pm
          <br />
          <br />Saturdays, Sundays and Public Holidays:
          <br />Closed
        </p>
      </div>-->

      <div class="gp-wrap">
        <h3>CONTACT</h3>
        <p>
          TEL (852) 2766-4655
          <br />FAX (852) 2330-2994 <br />EMAIL jcsmarttree@gmail.com
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "homeSec4",
};
</script>

<style lang="less" scoped>
.web-footer-infobar {
  display: flex;
  padding-top: 4.5rem;
  box-sizing: border-box;
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  background-color: #00877a;

  .gp-wrap {
    margin: 3rem;
    text-align: left;
    color: #fff;
    span {
      border-radius: 4px;
      padding: 2px 5px;
      color: #fff;
      background-color: #ffae00;
    }
    .jc-logo {
      margin-bottom: 3rem;
      height: 6.5rem;
    }

    p {
      font-size: 1.3rem;
      line-height: 2rem;
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
    height: 800px;
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

  .web-footer-infobar {
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

      .jc-logo {
        height: auto;
        width: 80%;
      }
    }
  }
}
</style>
