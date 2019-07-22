<template>
  <div class="container our-tree-article">
    <div class="article-body">
      <div class="article-content">
        <!-- paragraph 1 -->
        <h1>{{$t("message.tree.details.p1.caption")}}</h1>
        <p>{{$t("message.tree.details.p1.body")}}</p>
        <img :src="require('./../../assets/images/tree/TApng.png')" alt />
        <!-- paragraph 2 -->
        <h1>{{$t("message.tree.details.p2.caption")}}</h1>
        <p>{{$t("message.tree.details.p2.body1")}}</p>
        <p>{{$t("message.tree.details.p2.body2")}}</p>
        <img :src="require('./../../assets/images/tree/TA2.png')" alt />
        <!-- paragraph 3 -->
        <h1>{{$t("message.tree.details.p3.caption")}}</h1>
        <p>{{$t("message.tree.details.p3.body")}}</p>
        <!-- paragraph 4 -->
        <h1>{{$t("message.tree.details.p4.caption")}}</h1>
        <p>{{$t("message.tree.details.p4.body1")}}</p>
        <p>
          <br />
          <span class="link-name">{{$t("message.tree.details.p4.body2.item1")}}</span>
          <span class="links-addr">
            <a
              class="links-addr"
              target="_blank"
              href="https://www.herbarium.gov.hk/subpages.aspx?id=8337"
            >https://www.herbarium.gov.hk/subpages.aspx?id=8337</a>
          </span>
          <br />
          <span class="link-name">{{$t("message.tree.details.p4.body2.item2")}}</span>
          <a
            class="links-addr"
            target="_blank"
            href="https://www.herbarium.gov.hk/subpages.aspx?id=8057"
          >https://www.herbarium.gov.hk/subpages.aspx?id=8057</a>
          <br />
          <span class="link-name">{{$t("message.tree.details.p4.body2.item3")}}</span>
          <a
            class="links-addr"
            target="_blank"
            href="https://www.herbarium.gov.hk/subpages.aspx?id=8361"
          >https://www.herbarium.gov.hk/subpages.aspx?id=8361</a>
          <br />
        </p>
        <h1>{{$t("message.tree.details.p5.caption")}}</h1>
        <p>{{$t("message.tree.details.p5.body1")}}</p>
        <img class="large" :src="require('./../../assets/images/tree/urban-tree.jpg')" alt />
        <h1>{{$t("message.tree.details.p6.caption")}}</h1>
        <p>{{$t("message.tree.details.p6.body1")}}</p>
        <p>{{$t("message.tree.details.p6.body2")}}</p>
        <p>
          <a
            class="links-addr"
            target="_blank"
            href="http://www.greening.gov.hk/ovt/listtree.aspx?m=13&q=a"
          >http://www.greening.gov.hk/ovt/listtree.aspx?m=13&q=a</a>
          <br />
          <a
            class="links-addr"
            target="_blank"
            :href="$t('message.tree.details.p6.body3')"
          >{{$t('message.tree.details.p6.body3')}}</a>
          <br />
          <a
            class="links-addr"
            target="_blank"
            :href="$t('message.tree.details.p6.body4')"
          >{{$t('message.tree.details.p6.body4')}}</a>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TreeDetail"
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
      // word-break: break-all;

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
