<template>
  <div class="container project-objective-article">
    <!-- 文章內容 -->
    <div class="article-body">
      <!-- 內容 -->
      <div class="location-lable-gp">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>{{$t("message.aboutus.objective.breadcrumb.item1")}}</el-breadcrumb-item>
          <el-breadcrumb-item>
            <b>{{$t("message.aboutus.objective.breadcrumb.item2")}}</b>
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <div class="article-content">
        <p>{{$t("message.aboutus.objective.text.p1")}}</p>
        <ul>
          <li>{{$t("message.aboutus.objective.text.p2")}}</li>
          <li>{{$t("message.aboutus.objective.text.p3")}}</li>
          <li>{{$t("message.aboutus.objective.text.p4")}}</li>
          <li v-if="language == 'en'">{{$t("message.aboutus.objective.text.p5")}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "projectObject",
  computed: {
    ...mapState("navigation", ["language"])
  }
};
</script>
<style lang="less" scoped>
.project-objective-article {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 1.5rem;
  min-height: 50rem;

  .article-body {
    flex: 1;
    .location-lable-gp {
      padding-left: 15px;
      width: 100%;
      display: flex;
      align-items: center;
      height: 40px;
      border-radius: 4px;
      background-color: #f5f5f5;
      box-sizing: border-box;
    }
  }
  .article-nav {
    width: 320px;
    text-align: left;
    border-top: 2px solid #00877a;
    box-sizing: border-box;
    background-color: #f5f5f5;

    h4 {
      display: flex;
      padding: 0 15px;

      align-items: center;
      color: #00a07d;
      margin: 10px 0;
      img {
        margin-right: 15px;
        height: 2.4rem;
      }
    }

    li {
      padding: 0 15px;

      height: 36px;
      line-height: 36px;
      cursor: pointer;
      transition: all 0.6s;
      font-size: 13px;
      color: #606060;
    }

    li:hover,
    li.activce {
      height: 36px;
      line-height: 36px;
      background-color: #d6eeec;
    }
  }
  .article-content {
    text-align: justify;
    h4 {
      color: #303030;
    }
    ul {
      padding-left: 60px;
      li {
        font-size: 1.6rem;
        list-style: circle;
        color: #606060;
        line-height: 36px;
      }
    }
    p {
      font-size: 1.6rem;
      color: #606060;
      line-height: 2.4rem;
    }
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .project-objective-article {
    width: 100%;

    .article-content {
      text-align: left;
      h4 {
        color: #303030;
      }
      ul {
        padding-left: 60px;
        li {
          font-size: 1.4rem;

          list-style: circle;
          color: #606060;
          line-height: 2.4rem;
        }
      }
      p {
        font-size: 1.4rem;
      }
    }
  }
}

@media only screen and (max-width: 48em) {
  .project-objective-article {
    width: 100%;
    padding: 1.5rem 3rem;
    box-sizing: border-box;

    .article-body {
      flex: 1;
      .location-lable-gp {
        margin: 1.5rem 0;
      }
    }

    .article-content {
      width: 100%;
      h4 {
        color: #303030;
      }
      ul {
        padding-left: 3rem;
        li {
          font-size: 1.4rem;
          list-style: circle;
          color: #606060;
          line-height: 2.4rem;
        }
      }
      p {
        font-size: 1.4rem;
      }
    }
  }
}
</style>
