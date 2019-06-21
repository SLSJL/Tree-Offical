<template>
  <div class="container project-background-article">
    <!-- 文章內容 -->
    <div class="article-body">
      <!-- 內容 -->
      <div class="location-lable-gp">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>About Us</el-breadcrumb-item>
          <el-breadcrumb-item>
            <b>Background</b>
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <div class="article-content">
        <p>Commenced in February 2018, the 3-year pilot Project “Jockey Club Smart City Tree Management Project” is supported by The Hong Kong Jockey Club Charities Trust with a funding of $32.28 million.</p>
        <p>Aiming at sustaining a longer tree life by enhancing the efficiency of tree management, it is a large-scale pilot project on trees in the urban area that uses a quantifiable method for identifying trees with potential needs for follow-up actions.</p>
      </div>
    </div>
    <!-- 文章目錄 -->
    <!-- <div class="article-nav">
      <h4>
        <img :src="require('./../../assets/images/tree/tree.icon.dark.png')" alt> CONTENT
      </h4>
      <ul>
        <li class="active">Objectives</li>
        <li>Project Stage</li>
      </ul>
    </div>-->
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
  min-height: 400px;

  .article-body {
    flex: 1;
    .location-lable-gp {
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
