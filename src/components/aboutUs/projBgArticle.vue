<template>
  <div class="container project-background-article">
    <!-- 文章內容 -->
    <div class="article-body">
      <!-- 內容 -->
      <div class="location-lable-gp">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>{{$t("message.aboutus.background.breadcrumb.item1")}}</el-breadcrumb-item>
          <el-breadcrumb-item>
            <b>{{$t("message.aboutus.background.breadcrumb.item2")}}</b>
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <div class="article-content">
        <p>{{$t("message.aboutus.background.text.p1")}}</p>
        <p>{{$t("message.aboutus.background.text.p2")}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "OurTreeMap",

  data() {
    return {};
  },
  async mounted() {}
};
</script>
<style lang="less" scoped>
.project-background-article {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 1.5rem;
  min-height: 500px;

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
      font-size: 1.4rem;
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
        height: 24px;
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
        font-size: 14px;
        list-style: circle;
        color: #606060;
        line-height: 24px;
      }
    }
    p {
      font-size: 16px;
      color: #606060;
      line-height: 24px;
    }
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .project-background-article {
    width: 100%;
    padding: 0 3rem;
    padding-top: 1.5rem;

    box-sizing: border-box;

    .article-body {
      flex: 1;
    }
    .article-content {
      text-align: left;
      h4 {
        color: #303030;
      }
      ul {
        padding-left: 60px;
        li {
          font-size: 14px;
          list-style: circle;
          color: #606060;
          line-height: 24px;
        }
      }
      p {
        font-size: 1.4rem;
        color: #606060;
        line-height: 24px;
      }
      p.quote {
        border-left: 2px solid #00877a;
        padding: 5px 15px;
        font-size: 12px;
        background-color: #f5f5f5;
      }
    }
  }
}

@media only screen and (max-width: 48em) {
  .project-background-article {
    width: 100%;
    padding: 0 3rem;
    padding-top: 1.5rem;

    box-sizing: border-box;

    .article-body {
      width: 100%;
      flex: 1;

      .location-lable-gp {
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
      }
    }
    .article-content {
      text-align: left;
      h4 {
        color: #303030;
      }
      ul {
        padding-left: 60px;
        li {
          font-size: 14px;
          list-style: circle;
          color: #606060;
          line-height: 24px;
        }
      }
      p {
        font-size: 1.4rem;
        color: #606060;
        line-height: 24px;
      }
    }
  }
}
</style>
