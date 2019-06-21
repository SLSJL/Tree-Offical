<template>
  <div class="container-fluid home-section-2">
    <div class="home-p1-image">
      <img :src="require('./../../assets/images/home/ourtrees@2x.png')" @click="navigate" alt>
    </div>
    <div class="home-p1-text">
      <h1>
        Urban trees are considered
        as an
        <br>
        <b>indispensable element</b>
        of green infrastructure in our city
      </h1>
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
      this.SET_ACTIVEINDEX(1);
      this.$router.push({ path: "/tree/index" });
    }
  }
};
</script>

<style lang="less" scoped>
.home-section-2 {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 500px;

  .home-p1-image {
    width: 800px;
    height: 100%;
    img {
      width: 100%;
      cursor: pointer;
    }
  }
  .home-p1-text {
    flex: 1;
    height: 100%;
    color: #303030;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      font-family: "Roboto-Condensed";
      padding-left: 6rem;
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

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .home-section-2 {
    height: 320px;

    .home-p1-image {
      width: 500px;
      height: 320px;
      img {
        height: 100%;
      }
    }

    .home-p1-text {
      h1 {
        font-family: "Roboto-Condensed";
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
  .home-section-2 {
    flex-direction: column-reverse;
    height: auto;

    .home-p1-image {
      padding: 3rem 2.5rem;
      width: 100%;
      height: auto;
      box-sizing: border-box;
      line-height: 4rem;

      img {
        width: 100%;
      }
    }

    .home-p1-text {
      h1 {
        font-family: "Roboto-Condensed";
        padding: 5rem 3rem;
        padding: 3rem 2.5rem;

        margin-bottom: 0;
        width: 100%;
        font-size: 3em;
        line-height: 4rem;
        text-align: center;
        b {
          font-size: 3.2rem;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
