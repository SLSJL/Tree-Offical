<template>
  <div class="container-fluid home-section-3">
    <div class="home-p3-sensor"></div>
    <div class="home-p3-content">
      <h1>OUR SENSOR</h1>
      <p>The sensor measures the mechanical response of a tree to wind force, recording the tilting values at near ground level and provides an insightful strength of root anchorage. Monitoring root plate rotation by means of the sensor on a regular basis would enable an early warning system in tree management to reduce the risk of damage caused by root failure.</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "homeSec2"
};
</script>

<style lang="less" scoped>
.home-section-3 {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 600px;

  background-image: url("./../../assets/images/home/p3-bg.png");

  .home-p3-sensor {
    width: 40%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("./../../assets/images/home/p3-sensor.png");
  }
  .home-p3-content {
    padding-right: 120px;
    width: 60%;
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
      font-size: 18px;
      line-height: 24px;
      text-align: justify;
    }
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .home-section-3 {
    height: 400px;
    .home-p3-sensor {
      width: 40%;
      height: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: 60% auto;
      background-image: url("./../../assets/images/home/p3-sensor.png");
    }
    .home-p3-content {
      h1 {
        margin-top: 0;
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
  .home-section-3 {
    flex-direction: column;
    height: 700px;
    .home-p3-sensor {
      margin-top: 30px;
      width: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: auto 80%;
      background-image: url("./../../assets/images/home/p3-sensor.png");
    }
    .home-p3-content {
      width: 100%;
      height: 600px;
      padding: 0 3rem;
      align-items: center;

      h1 {
        margin-top: 0;
        text-align: center;
      }
      p {
        font-size: 1.4rem;
        line-height: 2.4rem;
        text-align: justify;
      }
    }
  }
}
</style>
