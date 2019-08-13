<template>
  <div class="container-fluid home-section-3">
    <div class="home-p3-content">
      <h1 v-html="$t('message.home.sec3')"></h1>
    </div>
    <div class="home-p3-image">
      <img :src="require('./../../assets/images/home/oursensor@2x.png')" @click="navigate" alt />
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  name: "homeSec2",
  methods: {
    ...mapMutations("navigation", ["SET_ACTIVEINDEX"]),
    navigate() {
      this.SET_ACTIVEINDEX(2);
      this.$router.push({ path: "/sensor" });
    }
  }
};
</script>

<style lang="less" scoped>
.home-section-3 {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 500px;
  background-color: #e6e6e6;

  .home-p3-content {
    flex: 1;
    height: 100%;
    color: #303030;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      width: 100%;
      padding-left: 6rem;
      font-size: 5rem;
      font-weight: 100;
      text-align: left;
      line-height: 8rem;

      b {
        font-size: 6rem;
        font-weight: bold;
      }
    }
  }
  .home-p3-image {
    width: 80rem;
    height: 100%;
    img {
      width: 100%;
      cursor: pointer;
    }
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .home-section-3 {
    height: 320px;

    .home-p3-content {
      flex: 1;
      height: 100%;
      color: #303030;
      display: flex;
      justify-content: center;
      align-items: center;

      h1 {
        padding-left: 3rem;
        padding-right: 3rem;
        font-size: 2.8em;
        line-height: 4rem;

        b {
          font-size: 3.2rem;
        }
      }
    }
    .home-p3-image {
      width: 500px;
      height: 320px;
      img {
        height: 100%;
      }
    }
  }
}

@media only screen and (max-width: 48em) {
  .home-section-3 {
    flex-direction: column;
    height: auto;
    .home-p3-content {
      flex: 1;
      height: auto;
      color: #303030;

      h1 {
        padding: 5rem 1.5rem;
        margin-bottom: 0;
        width: 100%;
        font-size: 2.4em;
        line-height: 5rem;
        text-align: center;

        b {
          font-size: 3.2rem;
        }
      }
    }
    .home-p3-image {
      padding: 3rem 2.5rem;
      width: 100%;
      height: auto;
      box-sizing: border-box;
      img {
        height: 100%;
      }
    }
  }
}
</style>
