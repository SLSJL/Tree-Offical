<template>
  <div class="container our-tree-article">
    <!-- 文章內容 -->
    <div class="article-body">
      <!-- 內容 -->
      <!-- <div class="location-lable-gp">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>Our Trees</el-breadcrumb-item>
          <el-breadcrumb-item>
            <b>Tree</b>
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>-->
      <div class="article-content">
        <!-- paragraph 1 -->
        <h1>CURRENT SITUATION FOR URBAN TREES</h1>
        <p>Urban trees expose to high risk of growth due to insufficient growing space, poor soil, bad or lack of maintenance and the increasing frequency of rainstorms and typhoons due to global climate. Some tree species are even affected so badly as they are more vulnerable to extreme bad weather conditions.</p>
        <img :src="require('./../../assets/images/tree/TApng.png')" alt>
        <!-- paragraph 2 -->
        <h1>ECOSYSTEM SERVICES</h1>
        <p>Urban trees provide important ecosystem services to city inhabitants like air pollution removal, carbon sequestration, mitigation of heat island effect, urban flood prevention, water quality improvement, aesthetic enhancement, biodiversity enhancement and conservation. The management of urban trees become a key adaptation and mitigation measure of global climate change.</p>
        <p>Trees behave like a vibrant system. The tree anchorage holds soil firmly so that the root supports the tree trunk and foliage. Weak anchorage in the root system which may cause hazard of tree falling can be detected by measuring the turning momentum or capturing titling data of a tree. The weaving interaction between wind and a tree is dynamic and depends on the inherent vibrating frequency of a tree. The wind force on tree canopy generates a turning momentum at the tree base. Such a turning momentum is resisted by the root system and it can be considered as a function of the rotational angle of the structural root zone. If the root system is not strong enough to sustain the turning momentum, the tree will tilt or be uprooted and then will fall. As such, measuring and monitoring root stability of urban trees could help in predicting risk of tree falling more accurately and then in ensuring safety to the public.</p>
        <img :src="require('./../../assets/images/tree/TA2.png')" alt>
        <!-- paragraph 3 -->
        <h1>TECHNOLOGY HELPS TREE MANAGEMENT</h1>
        <p>Many studies have been conducted to measure tree displacement via a wide spectrum of quantifiable tools. They help measure the rotational angle, tree displacement or tilting angle due to the overturning momentum of a tree. Whilst the use of the accelerometer for measuring tree tilting is not new, the sensor technology can measure the mechanical response of a tree to wind force, can record the tilting values at near ground level and can provide an insightful strength of root anchorage. It is also important to study the failure pattern of different tree species on the root response towards adverse weather conditions. In addition, monitoring root plate rotation on a regular basis would enable an early warning system in tree management to reduce the risk of damage caused by root failure.</p>

        <!-- paragraph 4 -->
        <h1>OUR MONITORING LIST</h1>
        <p>Trees of 9 vulnerable species at risk of tree falling with different tree forms are selected for monitoring, e.g. Bauhinia variegata, Delonix regia, Senna siamea, Aleurites moluccana.</p>
        <p>
          <br>
          <span class="link-name">Bauhinia variegata:</span>
          <span class="links-addr">
            <a
              href="http://www.herbarium.gov.hk/subpages.aspx?id=8337"
            >http://www.herbarium.gov.hk/subpages.aspx?id=8337</a>
          </span>
          <br>
          <span class="link-name">Delonix regia:</span>
          <a
            class="links-addr"
            href="http://www.herbarium.gov.hk/subpages.aspx?id=8057"
          >http://www.herbarium.gov.hk/subpages.aspx?id=8057</a>
          <br>
          <span class="link-name">Senna siamea:</span>
          <a
            class="links-addr"
            href="http://www.herbarium.gov.hk/subpages.aspx?id=8361"
          >http://www.herbarium.gov.hk/subpages.aspx?id=8361</a>
          <br>
          <span class="link-name">Aleurites moluccana:</span>
          <a
            class="links-addr"
            href="http://www.herbarium.gov.hk/subpages.aspx?id=8135"
          >http://www.herbarium.gov.hk/subpages.aspx?id=8135</a>
        </p>
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
.our-tree-article {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .article-body {
    flex: 1;
    padding-right: 15px;

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
    margin: 30px 0;
    h1 {
      margin: 60px 0 30px 0;
      width: 100%;
      text-align: left;
      color: #303030;
      word-wrap: break-word;
      word-break: break-all;
    }
    p {
      width: 100%;
      text-align: justify;
      font-size: 16px;
      color: #606060;
      line-height: 24px;

      span.link-name {
        display: inline-block;
        min-width: 200px;
        font-weight: 600;
      }
      a {
        color: #00877a;
      }
    }
    p.quote {
      border-left: 2px solid #00877a;
      padding: 5px 15px;
      font-size: 12px;
      background-color: #f5f5f5;
    }

    img {
      margin: 30px auto;
    }
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .our-tree-article {
    width: 100%;
    .article-body {
      flex: 1;
      width: 100%;
      padding: 0 6rem;
      box-sizing: border-box;
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
      h3 {
        margin: 4.5rem 0 3rem 0;
      }

      p {
        width: 100%;
        text-align: justify;
        font-size: 1.6rem;

        span.link-name {
          display: inline-block;
          min-width: 200px;
          font-weight: 600;
        }
        a {
          color: #00877a;
        }
      }
      p.quote {
        border-left: 2px solid #00877a;
        padding: 5px 15px;
        font-size: 12px;
        background-color: #f5f5f5;
      }

      img {
        margin: 30px auto;
      }
    }
  }
}

@media only screen and (max-width: 48em) {
  .our-tree-article {
    width: 100%;
    .article-body {
      width: 100%;

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
    .article-content {
      text-align: center;
      margin: 0;
      width: 100%;

      h1 {
        margin: 45px 0 30px 0;
        padding: 0 3rem;
        color: #303030;

        text-align: center;
        box-sizing: border-box;
        line-height: 3.6rem;
        word-break: normal;
      }
      p {
        padding: 0 3rem;
        text-align: justify;

        font-size: 1.4rem;
        box-sizing: border-box;

        span.link-name {
          display: inline-block;
          min-width: 200px;
          font-weight: 600;
        }
        a {
          color: #00877a;
        }
      }

      img {
        margin: 30px auto;
        width: 80%;
      }
    }
  }
}
</style>
