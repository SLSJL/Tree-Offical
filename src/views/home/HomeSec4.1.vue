<template>
  <div class="container-fluid home-section-4">
    <div class="home-p4-content">
      <h1>Database</h1>
      <p>The Database contains data of trees, sensors, weather and etc.</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "homeSec4"
};
</script>

<style lang="less" scoped>
.home-section-4 {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-size: 100% 100%;

  background-image: url("./../../assets/images/home/p4-bg.jpg");

  .home-p4-content {
    padding-left: 60px;
    padding-right: 30px;
    height: 160px;
    width: 720px;
    text-align: left;
    box-sizing: border-box;

    background-color: #00877a;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border-radius: 200px 0 0 200px;

    color: #fff;

    h1 {
      display: inline-block;
      margin-bottom: 0;
      margin-top: 15px;
      padding: 0 15px;
      border-bottom: 2px solid #00877a;
    }
    p {
      padding: 0 15px;

      font-size: 18px;
      line-height: 24px;
    }
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .home-section-4 {
    height: 360px;

    .home-p4-content {
      padding-left: 60px;
      padding-right: 30px;
      height: 120px;
      width: 600px;
      text-align: left;
      box-sizing: border-box;

      background-color: #00877a;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      border-radius: 200px 0 0 200px;

      p {
        font-size: 1.6rem;
      }
    }
  }
}

@media only screen and (max-width: 48em) {
  .home-section-4 {
    height:480px;
    background-size: auto 100%;

    .home-p4-content {
      padding-left: 60px;
      padding-right: 30px;
      height: 120px;
      width: 600px;
      text-align: left;
      box-sizing: border-box;

      background-color: #00877a;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      border-radius: 200px 0 0 200px;

      p {
        font-size: 1.4rem;
      }
    }
  }
}
</style>
