<template>
  <div :class="['res-media-list']">
    <ul>
      <li
        v-for="(item, idx) in dataset"
        :key="idx"
        @mouseover="activeIndex = idx"
        @click="openPDF(item.filePath)"
      >
        <div class="time">
          <p class="day-month">
            <span>{{item.date[0]}}</span>
            <span>{{item.date[1]}}</span>
          </p>
          <p class="year">{{item.date[2]}}</p>
        </div>

        <div class="title">
          <div class="text-wrap">
            <h4 :title="item.title">{{item.title | titleFltr}}</h4>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "MediaItem",
  props: {
    dataset: { type: Array }
  },
  data() {
    return {};
  },
  filters: {
    titleFltr(val) {
      return val.length > 20 ? val.substr(0, 19) + "..." : val;
    }
  },
  methods: {
    openPDF(filepath) {
      window.open(
        filepath.indexOf("http") > -1
          ? filepath
          : this.$utils.tool.getFileUrl() + filepath,
        "_blank"
      );
    }
  }
};
</script>
<style lang="less" scoped>
.res-media-list {
  ul {
    li {
      margin-bottom: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .title {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        cursor: pointer;
        flex: 1;

        img {
          margin-right: 15px;
          width: 40px;
          height: 40px;
          line-height: 40px;
          transition: all 0.6s;
        }

        .text-wrap {
          h4 {
            margin: 0;
            margin-bottom: 5px;
            font-size: 16px;
            transition: all 0.6s;
          }
          p {
            margin: 0;
            padding: 0;
            font-size: 12px;
            color: #606060;
          }
        }
      }
      .time {
        margin-right: 15px;
        font-size: 13px;
        width: 60px;
        height: 40px;
        cursor: pointer;
        font-weight: bold;

        p {
          margin: 0;
        }

        .day-month {
          margin-bottom: 2px;
          font-size: 16px;
          font-weight: bolder;
          color: #018781;
          span {
            margin-right: 5px;
          }
        }
        .month {
          font-weight: bolder;
        }
      }
    }

    li:hover {
      .title {
        .text-wrap {
          h4 {
            font-size: 17px;
          }
        }
      }
    }
  }
}
</style>