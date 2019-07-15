<template>
  <div class="knowledge-card">
    <h2 :style="{color: clr}">{{caption}}</h2>
    <div class="body-text" v-html="text"></div>
  </div>
</template>
<script>
export default {
  name: "KnowledgeCard",
  props: {
    order: {
      type: [Number, String]
    },
    caption: {
      type: String
    },
    text: {
      type: String
    },
    clr: {
      type: String
    }
  },
  filters: {
    cpt(val) {
      // let isCh = /^[^\u4e00-\u9fa5]+$/g;
      return val.length > 36 ? val.substr(0, 36) + "..." : val;
    },
    knowledgeTxt(val) {
      // let isCh = /^[^\u4e00-\u9fa5]+$/g;
      return val.length > 520 ? val.substr(0, 520) + "..." : val;
    }
  }
};
</script>
<style lang="less" scoped>
.knowledge-card {
  display: inline-block;

  padding: 15px 30px;
  width: 98%;
  border-top: 4px solid #00a091;

  background-color: #fff;
  transition: box-shadow 0.6s;
  box-shadow: 5px 5px 50px 2px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  cursor: pointer;

  h2 {
    margin: 0;
    padding: 15px 0;
    width: 100%;
    text-align: left;
    line-height: 2.4rem;
  }

  .body-text {
    margin: 15px 0;
    width: 100%;
    word-wrap: break-word;
    font-size: 14px;
    line-height: 24px;
    color: #606060;
    text-align: left;
  }
}
.knowledge-card:hover {
  box-shadow: 5px 5px 50px 2px rgba(0, 0, 0, 0.25);
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .knowledge-card {
    margin-bottom: 15px;
    padding: 15px;

    h2 {
      margin: 0;
      width: 100%;
      text-align: left;
    }
    .body-text {
      font-size: 1.4rem;
    }
  }
}

@media only screen and (max-width: 48em) {
  .knowledge-card {
    margin: 0;
    margin-bottom: 15px;

    padding: 15px;
    box-sizing: border-box;
    h2 {
      margin: 0;
      width: 100%;
      text-align: left;
    }
    .body-text {
      font-size: 1.4rem;
    }
  }
}
</style>
