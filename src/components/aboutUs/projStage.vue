<template>
  <div class="container project-stage-article">
    <!-- 文章內容 -->
    <div class="article-body">
      <!-- 內容 -->
      <div class="location-lable-gp">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>About Us</el-breadcrumb-item>
          <el-breadcrumb-item>
            <b>Project Stage</b>
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <div class="article-content">
        <p>With tailor-made sensors installed on the lower trunk of approximately 400 selected urban trees in two pilot sites: Kowloon East and Wan Chai, aiming to monitor their tilting angles over time using SST. For Phase 2, around 8,000 trees will be selected in nine of the urban districts, including Central & Western, Southern, Eastern, Wan Chai, at Hong Kong Island and Kowloon City, Kwun Tong, Sham Shui Po, Wong Tai Sin and Yau Tsim Mong at Kowloon.</p>
        <img :src="projectStage" alt="porject stage">
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
    return {
      projectStage: require("./../../assets/images/aboutUs/ProjectStage.png")
    };
  },
  async mounted() {}
};
</script>
<style lang="less" scoped>
.project-stage-article {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 1.5rem;
  min-height: 400px;

  .article-body {
    flex: 1;
    // padding-right: 15px;

    .location-lable-gp {
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
    text-align: center;
    h4 {
      color: #303030;
    }

    p {
      font-size: 16px;
      color: #606060;
      line-height: 24px;
      text-align: justify;
    }
    img {
      width: 80%;
      margin: 30px 0 80px 0;
    }
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .project-stage-article {
    width: 100%;
    .article-content {
      text-align: center;
      h4 {
        color: #303030;
      }

      p {
        font-size: 1.4rem;
      }
      img {
        width: 80%;
        margin: 30px 0 80px 0;
      }
    }
  }
}

@media only screen and (max-width: 48em) {
  .project-stage-article {
    width: 100%;
    padding: 0 3rem;
    padding-top: 3rem;

    box-sizing: border-box;

    .article-content {
      text-align: center;
      h4 {
        color: #303030;
      }

      p {
        font-size: 1.4rem;
      }
      img {
        width: 80%;
        margin: 30px 0 80px 0;
      }
    }
  }
}
</style>
