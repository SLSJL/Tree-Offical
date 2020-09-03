<template>
  <div :class="['res-media-item']">
    <img :src="imgPath" />
    <div class="media-mask" v-if="mask">
      <img src alt />
    </div>
    <div :class="['text-info', { isVideo: mask }]">
      <!-- <h5>{{title}}</h5> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "media-item",
  props: {
    mask: { type: Boolean },
    imgPath: { type: String },
    title: { type: String },
  },
};
</script>
<style lang="less" scoped>
.res-media-item {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  img {
    position: absolute;
    width: 100%;
    z-index: 1;
  }

  .media-mask {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 5;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 0.3s;

    background-image: url("./../../assets/images/resouce/play.png");
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.8;
    // background-size: 20%;
  }

  .text-info {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    margin: 0;
    z-index: 9;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: all 0.3s;

    h5 {
      margin: 0;
      padding: 0 15px;
      width: 100%;
      height: 40px;
      line-height: 40px;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.45);
      transition: all 0.3s;
    }
  }

  .text-info.isVideo {
    h5 {
      margin-bottom: -40px;
    }
  }
}

.res-media-item:hover {
  h5 {
    margin-bottom: 0;
    background-color: #00877a;
  }

  .text-info.isVideo {
    h5 {
      margin-bottom: 0;
      background-color: #00877a;
    }
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .res-media-item {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    img {
      position: absolute;
      width: 100%;
      z-index: 1;
    }

    .media-mask {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 5;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.3s;

      background-image: url("./../../assets/images/resouce/play.png");
      background-position: center;
      background-repeat: no-repeat;
      opacity: 0.8;
      // background-size: 20%;
    }

    .text-info {
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 0;
      margin: 0;
      z-index: 9;
      display: flex;
      flex-direction: column;
      cursor: pointer;
      transition: all 0.3s;

      h5 {
        margin: 0;
        padding: 0 15px;
        width: 100%;
        height: 40px;
        line-height: 40px;
        color: #fff;
        background-color: rgba(0, 0, 0, 0.45);
        transition: all 0.3s;
      }
    }

    .text-info.isVideo {
      h5 {
        margin-bottom: -40px;
      }
    }
  }

  .res-media-item:hover {
    h5 {
      margin-bottom: 0;
      background-color: #00877a;
    }

    .text-info.isVideo {
      h5 {
        margin-bottom: 0;
        background-color: #00877a;
      }
    }
  }
}

@media only screen and (max-width: 48em) {
  .res-media-item {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    img {
      position: absolute;
      width: auto;
      height: 80%;
      z-index: 1;
    }

    .media-mask {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 5;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.3s;

      background-image: url("./../../assets/images/resouce/play.png");
      background-position: center;
      background-repeat: no-repeat;
      opacity: 0.8;
      // background-size: 20%;
    }

    .text-info {
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 0;
      margin: 0;
      z-index: 9;
      display: flex;
      flex-direction: column;
      cursor: pointer;
      transition: all 0.3s;

      h5 {
        margin: 0;
        padding: 0 15px;
        width: 100%;
        height: 40px;
        line-height: 40px;
        color: #fff;
        background-color: rgba(0, 0, 0, 0.45);
        transition: all 0.3s;
      }
    }

    .text-info.isVideo {
      h5 {
        margin-bottom: -40px;
      }
    }
  }

  .res-media-item:hover {
    h5 {
      margin-bottom: 0;
      background-color: #00877a;
    }

    .text-info.isVideo {
      h5 {
        margin-bottom: 0;
        background-color: #00877a;
      }
    }
  }
}
</style>
