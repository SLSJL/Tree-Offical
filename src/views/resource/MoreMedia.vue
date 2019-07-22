<template>
  <div class="container-fluid more-news-container">
    <Navigation></Navigation>
    <div class="container more-media-section">
      <div class="more-media-header">
        <h2>All Media List</h2>
        <router-link to="/resource">
          <a class="back-to-resource">&lt; Back</a>
        </router-link>
      </div>
      <el-tabs class="media-list-tabs" tab-position="top" v-model="activeTabs">
        <el-tab-pane label="2019" name="m2019">
          <span slot="label">2019</span>
          <div class="more-media-list_wrap">
            <NewsItem
              class="media-list-item"
              v-for="(item,idx) in $t('message.resource.media.list.m2019')"
              :key="idx"
              :news="item"
              :source="true"
            ></NewsItem>
          </div>
        </el-tab-pane>
        <el-tab-pane label="2018" name="m2018">
          <span slot="label">2018</span>
          <div class="more-media-list_wrap">
            <NewsItem
              class="media-list-item"
              v-for="(item,idx) in $t('message.resource.media.list.m2018')"
              :key="idx"
              :news="item"
              :source="true"
            ></NewsItem>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <WebFooter></WebFooter>
  </div>
</template>

<script>
import Navigation from "./../../components/navigation/";
import WebFooter from "./../../components/webFooter/";
import NewsItem from "./../../components/resource/NewsItem2";

export default {
  name: "OurTree",
  components: {
    Navigation,
    NewsItem,
    WebFooter
  },
  data() {
    return {
      activeTabs: "m2019"
    };
  }
};
</script>
<style lang="less" scoped>
.more-news-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 100%;
  background-color: #eee;
  box-sizing: border-box;

  .more-media-section {
    margin: 15px auto;
    padding: 15px;
    min-height: 500px;
    background-color: #fff;
        box-sizing: border-box;

    .more-media-header {
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid #00877a;

      h2 {
        margin: 0;
        height: 100%;
        color: white;
        padding: 0 15px;
        background-color: #00877a;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .back-to-resource {
        margin: 0 15px;
        font-size: 13px;
        color: #00877a;
        text-decoration: none;
      }
      .back-to-resource:hover {
        color: #00ffe5;
      }
    }

    .media-list-tabs {
      margin: 30px 0;
      padding-left: 60px;
      padding-right: 60px;
      box-sizing: border-box;
      .media-tab-icon {
        height: 18px;
        margin: 0 5px;
        vertical-align: middle;
      }

      .more-media-list_wrap {
        box-sizing: border-box;
        display: flex;
        flex-flow: row wrap;
        .media-list-item {
          margin-bottom: 30px;
        }
      }
    }
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .more-news-container {
    width: 100% !important;
    box-sizing: border-box;

    .more-media-header {
      margin: 0 15px;
    }

    .media-list-tabs {
      padding: 0 30px !important;
    }
    .more-media-section {
      width: 100%;
    }
  }
}

@media only screen and (max-width: 48em) {
  .more-news-container {
    width: 100% !important;
    box-sizing: border-box;

    .more-media-header {
      margin: 0 15px;
    }

    .media-list-tabs {
      padding: 0 30px !important;
    }
    .more-media-section {
      width: 100%;
    }
  }
}
</style>
