<template>
  <div class="container-fluid story-map">
    <div class="abstract">
      <div class="container">
        <div class="abstract-body">
          <h1>What is Story Map?</h1>
          <p>The GIS-based tree monitoring system will provide an additional tool for the tree management team to provide scientific observations on the changing conditions of tree tilts, which will facilitate a massive-scale monitoring of individual trees based on their corresponding geographical locations. The Project mainly divides into three stages:</p>
        </div>
        <div class="abstract-pic">
          <img :src="require('./../../assets/images/tree/storymap.png')" alt>
        </div>
      </div>
    </div>

    <div class="container mapstory-list">
      <div class="storymap-gp">
        <StorymapCard :info="storymap1"></StorymapCard>
      </div>

      <div class="more">
        <span>more coming soon</span>
      </div>
    </div>
  </div>
</template>

<script>
import StorymapCard from "./../../components/ourTree/StoryMapCard";
export default {
  name: "OurTree",
  components: { StorymapCard },
  data() {
    return {
      storymap1: {
        title: "Stroy map 1",
        text: "Tree Risk Management",
        bg: require("./../../assets/images/tree/sm1.jpg"),
        url:
          "https://lsgi-polyu.maps.arcgis.com/apps/MapJournal/index.html?appid=a1998a2a05ee4104b0d30d8279ef0b85"
      }
    };
  }
};
</script>
<style lang="less" scoped>
.story-map {
  .abstract {
    height: 240px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00877a;
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      .abstract-body {
        flex: 1;
        text-align: left;
        color: #fff;
        p {
          font-size: 14px;
          line-height: 24px;
        }
      }
      .abstract-pic {
        width: 300px;
        height: 100%;
      }
    }
  }

  .mapstory-list {
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .storymap-gp {
      width: 100%;
    }

    .more {
      width: 100%;
      height: 40px;
      line-height: 40px;
      background-color: #f5f5f5;
      border-radius: 4px;
      margin: 15px 0;

      font-size: 12px;
    }
  }
}
</style>
