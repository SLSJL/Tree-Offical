<template>
  <div class="res-news-item" @click="forward">
    <div class="res-news-item__datetime">
      <p class="res-news-item__daymonth">
        <span>{{ news.date | day }}</span>
        <span>{{ news.date | month }}</span>
      </p>
      <p class="res-news-item__year">{{ news.date | year }}</p>
    </div>
    <div class="res-news-item__title">
      <h2 :title="news.title">
        {{ news.title | title }} <img v-if="news.isNew" :src="require('@/assets/images/resouce/new.png')" alt="new" />
      </h2>
    </div>
  </div>
</template>
<script>
export default {
  name: "resouce-news-item",
  props: {
    news: {
      type: Object,
    },
  },
  methods: {
    forward() {
      let url = this.news.fileName ? this.news.fileName : this.news.address;

      window.open(url.indexOf("http") > -1 ? url : this.$utils.tool.getFileUrl() + url, "_blank");
    },
  },
  filters: {
    year(date) {
      return date.split("-")[2];
    },
    month(date) {
      return date.split("-")[1];
    },
    day(date) {
      return date.split("-")[0];
    },
    title(val) {
      let reg = new RegExp('[\\u4E00-\\u9FFF]','g')
      let n = reg.test(val) ? 19 : 36;
      console.log(reg.test(val));
      return val.length > n ? val.substr(0, n - 1) + "..." : val;
    },
  },
};
</script>
<style lang="less" scoped>
.res-news-item {
  display: flex;
  margin: 1rem 0;
  min-width: 50%;

  height: 4rem;
  cursor: pointer;

  .res-news-item__datetime {
    padding-right: 15px;
    width: 7.5rem;
    height: 100%;
    box-sizing: border-box;
    .res-news-item__daymonth {
      margin: 0;
      display: flex;
      justify-content: space-between;

      span {
        margin: 0 0.2rem;
        font-size: 1.6rem;
        font-weight: bolder;
        color: #018781;
      }
    }

    .res-news-item__year {
      margin: 0;
      margin-top: 0.5rem;
      font-size: 1.3rem;
      font-weight: bold;
    }
  }

  .res-news-item__title {
    flex: 1;
    text-align: left;
    h2 {
      transition: all 0.6s;
      img {
        vertical-align: middle;
      }
    }
  }
}

.res-news-item:hover {
  .res-news-item__title {
    h2 {
      font-size: 1.6rem;
    }
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .res-news-item {
    padding: 0 15px;
    width: 100%;
  }
}

@media only screen and (max-width: 48em) {
  .res-news-item {
    padding: 0 15px;
    width: 100%;
  }
}
</style>
