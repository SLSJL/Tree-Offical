
<template>
  <div class="container res-events">
    <div class="caption">
      <span>{{$t("message.resource.event.caption")}}</span>
    </div>
    <div class="media-group">
      <div class="media-first">
        <h1>{{$t("message.resource.event.evt1.title")}}</h1>
        <p>
          <span v-html="$t('message.resource.event.evt1.body')"></span>
          <br />
          <!-- <a
            target="_blank"
            :href="$t('message.resource.event.evt1.link')"
          >{{$t("message.resource.event.evt1.detail")}} >></a> -->
        </p>
      </div>

      <div class="media-others" @click="goToPDF">
        <MediaItem
          class="media-item"
          :title="'Media first'"
          :imgPath="require('./../../assets/images//resouce/Event1.png')"
        ></MediaItem>
        <MediaItem
          class="media-item"
          :title="'Media first'"
          :imgPath="require('./../../assets/images/resouce/Event2.png')"
        ></MediaItem>
        <MediaItem
          class="media-item"
          :title="'Media first'"
          :imgPath="require('./../../assets/images/resouce/Event3.png')"
        ></MediaItem>
        <MediaItem
          class="media-item"
          :title="'Media first'"
          :imgPath="require('./../../assets/images/resouce/Event4.png')"
        ></MediaItem>
      </div>
    </div>
  </div>
</template>
<script>
import MediaItem from "./../../components/resource/MediaItem";
export default {
  components: {
    MediaItem
  },
  methods: {
    goToPDF() {
      window.open(this.$utils.tool.getFileUrl() + "opening.pdf", "_blank");
    }
  }
};
</script>
<style lang="less" scoped>
.res-events {
  margin: 30px auto;
  display: flex;
  height: 450px;
  flex-direction: column;

  text-align: left;

  .caption {
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #ddd;
    span {
      display: inline-block;
      padding: 0 15px;
      min-width: 120px;
      height: 40px;

      text-align: center;
      line-height: 40px;
      background-color: #00877a;
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
  }

  .media-first {
    margin-right: 5px;
    width: 520px;
    height: 100%;
    padding: 15px;
    padding-left: 0;
    box-sizing: border-box;

    h1 {
      margin-top:0;
    }
    p {
      font-size: 13px;
      line-height: 24px;
      text-align: justify;
    }
    button {
      margin: 15px 0;

      background: transparent;
      border: 0;
      color: #00877a;
      cursor: pointer;
      outline: none;
    }
  }
  .media-others {
    width: 670px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;

    .media-item {
      box-sizing: border-box;
      margin: 5px;
      width: 320px;
      height: 147px;
    }
    .media-item:first-child {
      display: block;
    }
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .res-events {
    width: 100%;
    padding: 0 6rem;
    box-sizing: border-box;
  }

  .media-group {
    margin: 15px 0;
  }
  

  .media-others {
    width: 240px !important;
    height: 100%;
    display: flex;
    flex-wrap: wrap;

    .media-item {
      display: none;
      margin: 0 5px;
      margin-bottom: 10px;
      width: 100%;
      height: 100% !important;
    }

    .media-item:first-child {
      display: block;

      margin: 0;
      width: 100%;
    }
  }
}

@media only screen and (max-width: 48em) {
  .res-events {
    width: 100%;
    height: auto;
    padding: 0 1.5rem;
    box-sizing: border-box;

    .media-group {
      flex-direction: column-reverse;
    }

    .media-first {
      margin-right: 0;
      width: 100%;
      padding: 15px;
      box-sizing: border-box;

      h1 {
        margin: 15px 0;
      }
      p {
        font-size: 1.4rem;
        line-height: 24px;
      }
      button {
        margin: 15px 0;
        background: transparent;
        border: 0;
        color: #00877a;
        cursor: pointer;
        outline: none;
      }
    }
    .media-others {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;

      .media-item {
        box-sizing: border-box;
        width: 46%;
        display: inline-block;
      }

      .media-item:first-child {
        display: block;
      }
    }
  }
}
</style>
