<template>
  <div class="container-fluid home-section-5">
    <div class="home-p5-content">
      <h1>WEBSITE and APP</h1>

      <div class="platform-gp">
        <div class="websites">
          <div class="platform-icon"></div>
          <div>
            <!-- <p>TREE RISK DASHBOARD</p> -->
            <p>
              <a href="http://158.132.186.221:9002/#/index" target="_blank">MONITORING SYSTEM</a>
            </p>
          </div>
        </div>
        <div class="mobile">
          <div class="platform-icon"></div>
          <div>
            <img :src="require('./../../assets/images/home/p5_apple.png')" alt>
            <img :src="require('./../../assets/images/home/p5_google.png')" alt>
          </div>
        </div>
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
.home-section-5 {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 400px;
  display: flex;

  justify-content: center;
  align-items: center;

  background-position: center;
  background-repeat: no-repeat;
  background-image: url("./../../assets/images/home/p5-bg.png");

  .home-p5-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      display: inline-block;
      margin-bottom: 60px;
      padding: 0 15px;
      color: #00877a;
      border-bottom: 2px solid #00877a;
    }

    .platform-gp {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 140px;

      background-position: center;

      .websites {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 60px;
        p {
          text-align: left;
          margin-left: 30px;
          color: #00877a;
          font-size: 1.6rem;
        }

        .platform-icon {
          background-image: url("./../../assets/images/home/p5_web.png");
          background-position: center;
          background-repeat: no-repeat;
        }
      }

      .mobile {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          margin-top: 15px;
          margin-left: 30px;
          display: block;
        }
        .platform-icon {
          background-image: url("./../../assets/images/home/p5-mobile.png");
          background-position: center;
          background-repeat: no-repeat;
        }
      }
      .platform-icon {
        width: 120px;
        height: 120px;
        border-radius: 120px;
        background-color: #fff;
        border: 1px solid #00877a;
      }
    }
  }
}

@media only screen and (max-width: 48em) {
  .home-section-5 {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 480px;

    background-position: center;
    background-repeat: no-repeat;
    background-image: url("./../../assets/images/home/p5-bg.png");

    .home-p5-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      padding: 1.5rem 0;

      h1 {
        display: inline-block;
        margin-top: 4.5rem;
        margin-bottom: 1.5rem;
        padding: 0 0.5rem;
      }

      .platform-gp {
        width: 100%;
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        background-position: center;

        .websites {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          margin: 0;
          margin-bottom: 1.5rem;

          p {
            margin-top: 1.5rem;
            margin-left: 0;
            font-size: 1.2rem;
            text-align: center;
          }

          .platform-icon {
            width: 80px;
            height: 80px;
            border-radius: 120px;
            background-color: #fff;
            border: 1px solid #00877a;
            background-size: auto 40%;
            background-position: center;
            background-repeat: no-repeat;
          }
        }

        .mobile {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          margin: 0;

          img {
            margin-top: 15px;
            margin-left: 0;
            display: block;
          }

          .platform-icon {
            width: 80px;
            height: 80px;
            background-size: auto 60%;
          }
        }
      }
    }
  }
}
</style>
