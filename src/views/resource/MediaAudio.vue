
<template>
  <div class="container media-coverage">
    <div class="caption">
      <span>Audio</span>
    </div>
    <div class="media-group">
      <MediaList :dataset="list1Data"></MediaList>
    </div>
  </div>
</template>
<script>
import MediaList from "./../../components/resource/MediaList";

export default {
  components: {
    MediaList
  },
  data() {
    return {
      list1Data: [
        {
          title: "同途有心人-環境保護-第三十三集",
          filePath: "http://event.881903.com/hkjc-charities/",
          date: [21, "Aug", 2018]
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.media-coverage {
  margin: 30px auto;
  display: flex;
  flex-direction: column;

  text-align: left;

  .caption {
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #ddd;
    font-weight: 600;
    span {
      display: inline-block;
      width: 120px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      background-color: #00877a;
      //   border-radius: 16px 16px 0 0;
      color: #fff;
      font-size: 1.6rem;
    }
  }

  .media-group {
    flex: 1;
    width: 100%;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-content: center;

    > div {
      margin: 0 15px;
      flex-grow: 1;
    }
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .media-coverage {
    width: 100%;
    padding: 0 6rem;
    box-sizing: border-box;
  }
}

@media only screen and (max-width: 48em) {
  .media-coverage {
    width: 100%;
    padding: 0 1.5rem;
    box-sizing: border-box;

    .media-group {
      flex-direction: column;
    }
  }
}
</style>
