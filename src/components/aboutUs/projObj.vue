<template>
  <div class="container project-objective-article">
    <!-- 文章內容 -->
    <div class="article-body">
      <!-- 內容 -->
      <div class="location-lable-gp">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>About Us</el-breadcrumb-item>
          <el-breadcrumb-item>
            <b>Project Objectives</b>
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <div class="article-content">
        <p>Through the collaboration of the cross- disciplinaries professions, including academia, green NGOs, and the government, our project is aiming to</p>
        <ul>
          <li>Developing a set of SST that can conduct monitoring on Hong Kong’s most vulnerable urban tree species</li>
          <li>Building a database to monitor trees’ condition using GIS-platform</li>
          <li>Providing analysis on threshold criteria of trees by considering bio-physical factors of trees and the environmental conditions in urban areas</li>
          <li>Enhancing knowledge share of the students to deepen the understanding of our urban environmental assets and raise the public awareness on the environmental values of our urban forestry assets</li>
        </ul>
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
.project-objective-article {
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
    padding: 0 3rem;
    padding-top: 1.5rem;
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
