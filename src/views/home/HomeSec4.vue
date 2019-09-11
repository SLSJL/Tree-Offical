<template>
  <div class="container-fluid home-section-4">
    <div class="home-p4-image">
      <img :src="require('./../../assets/images/home/gis@2x.png')" @click="navigate" alt />
    </div>
    <div class="home-p4-content">
      <h1 v-html="$t('message.home.sec4')"></h1>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  name: "homeSec4",
  methods: {
    ...mapMutations("navigation", ["SET_ACTIVEINDEX"]),
    navigate() {
      this.SET_ACTIVEINDEX(3);
      this.$router.push({ path: "/database" });
    }
  }
};
</script>

<style lang="less" scoped>
.home-section-4 {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 500px;
  .home-p4-image {
    width: 80rem;
    height: 100%;
    img {
      width: 100%;
      cursor: pointer;
    }
  }
  .home-p4-content {
    flex: 1;
    height: 100%;
    color: #303030;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      width: 100%;
      padding-right: 6rem;

      font-size: 5em;
      font-weight: 100;
      text-align: right;
      line-height: 8rem;

      b {
        font-size: 6rem;
        font-weight: bold;
      }
    }
  }
}

@media only screen and (min-width: 75em) and (max-width: 136em) {
  .home-section-4 {
    .home-p4-content {
      h1 {
        padding-left: 3rem;
        padding-right: 3rem;
        font-size: 3.6em;
      }
    }
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .home-section-4 {
    height: 320px;
    .home-p4-image {
      width: 500px;
      height: 320px;
      img {
        height: 100%;
      }
    }
    .home-p4-content {
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
  }
}

@media only screen and (max-width: 48em) {
  .home-section-4 {
    flex-direction: column-reverse;
    height: auto;

    .home-p4-content {
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

        br {
          display: none;
        }
      }
    }
    .home-p4-image {
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
