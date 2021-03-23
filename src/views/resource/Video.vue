<template>
  <div class="container media-coverage">
    <div class="caption">
      <span>{{ $t("message.resource.video.caption") }}</span>
      <!-- <router-link to="/resource/mediamore">
        <a class="media-more">> more</a>
      </router-link> -->
    </div>
    <div class="media-group">
      <NewsItem
        class="media-list-item"
        v-for="(item, idx) in $t('message.resource.video.list')"
        :key="idx"
        :news="item"
      ></NewsItem>
    </div>
  </div>
</template>
<script>
import NewsItem from "./../../components/resource/NewsItem";

export default {
  components: {
    NewsItem,
  },
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
    display: flex;
    justify-content: space-between;
    align-items: center;
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

    .media-more {
      display: inline;
      padding: 0;
      min-width: auto;

      color: #00877a;
      font-size: 1.3rem;
      background-color: #fff;
      cursor: pointer;
      text-decoration: underline;
    }
    .media-more:hover {
      color: #00ffe5;
    }
  }

  .media-group {
    flex: 1;
    width: 100%;
    margin-top: 15px;
    display: flex;
    display: flex;
    flex-flow: row wrap;
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
