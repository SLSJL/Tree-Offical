
<template>
  <div class="container media-coverage">
    <div class="caption">
      <span>Video</span>
    </div>
    <div class="video-group">
      <div class="video-item">
        <h1>Opening Ceremony of Smart Government Innovation Lab</h1>
        <video :src="$utils.tool.getFileUrl() + 'video/v-1-190601.mp4'" controls loop autoplay>
          你的浏览器不支持
          <code>video</code> 标签.
        </video>
      </div>
      <div class="video-item">
        <h1>智慧政府創新實驗室開幕 樹木辦為8000樹裝感應器 可發傾斜信號</h1>
        <video :src="$utils.tool.getFileUrl() + 'video/v-2-190531_HK01.mp4'" controls loop autoplay>
          你的浏览器不支持
          <code>video</code> 标签.
        </video>
      </div>
      <div class="video-item">
        <h1>智慧政府創新實驗室加強政府與本地業界聯繫  </h1>
        <video :src="$utils.tool.getFileUrl() + 'video/v-3-190531.mp4'" controls loop autoplay>
          你的浏览器不支持
          <code>video</code> 标签.
        </video>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "resource-video",
  components: {}
};
</script>
<style lang="less" scoped>
.media-coverage {
  margin: 30px auto;
  display: flex;
  height: 420px;
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
      font-size: 1.6rem;
      color: #fff;
    }
  }

  .video-group {
    flex: 1;

    width: 100%;
    height: 34rem;
    display: flex;
    justify-content: center;
    align-content: center;
    box-sizing: border-box;

    .video-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      margin: 1%;
      width: 32%;
      height: 100%;
      box-sizing: border-box;

      h3 {
        height: 4rem;
      }
      video {
        width: 100%;
        height: 24rem;
      }
    }
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .media-coverage {
    width: 100%;
    padding: 0 6rem;
    height: auto;
    box-sizing: border-box;

    .video-group {
      flex: 1;

      width: 100%;
      height: 34rem;
      display: flex;
      justify-content: center;
      align-content: center;
      box-sizing: border-box;

      .video-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        margin: 1%;
        width: 32%;
        height: 100%;

        h3 {
          height: 4rem;
        }
        video {
          width: 100%;
          height: 24rem;
        }
      }
    }
  }
}

@media only screen and (max-width: 48em) {
  .media-coverage {
    width: 100%;
    padding: 0 1.5rem;
    box-sizing: border-box;
    height: auto;

    .video-group {
      flex-direction: column;

      .video-item {
        width: 100%;
      }
      .video-item:nth-child(2) {
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
      }
    }
  }
}
</style>
