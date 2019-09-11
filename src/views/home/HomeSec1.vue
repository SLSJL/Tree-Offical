<template>
  <div class="container-fluid home-section-1">
    <div class="wrap">
      <Navigation></Navigation>
      <div class="content">
        <section class="abstract">
          <!-- 内容 -->
          <h1 v-html="$t('message.home.sec1')"></h1>
        </section>
        <section class="modules-shortcut">
          <ul class="shortcut-wrap">
            <li>
              <img :src="require('./../../assets/images/home/home-thumb-1@2x.png')" alt />
            </li>
            <li>
              <img :src="require('./../../assets/images/home/home-thumb-2@2x.png')" alt />
            </li>
            <li>
              <img :src="require('./../../assets/images/home/home-thumb-3@2x.png')" alt />
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import Navigation from "./../../components/navigation/";

export default {
  name: "homeSec1",
  components: {
    Navigation
  }
};
</script>

<style lang="less" scoped>
.home-section-1 {
  border-bottom: 0.8rem solid #f7cb3b;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: 100% auto;
  background-image: url("./../../assets/images/home/home-bg-2.jpg");

  box-sizing: border-box;

  .wrap {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    color: #fff;
    background-color: rgba(0, 0, 0, 0);

    .content {
      flex: 1;
      display: flex;
      justify-content: space-between;

      section {
        padding: 0 30px;
        text-align: left;
      }

      .abstract {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 60%;
        height: 100%;

        h1 {
          padding: 0 8rem;
          padding-bottom: 30rem;
          text-align: left;
          line-height: 7rem;

          font-size: 5em;
          font-weight: 100;

          text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
        }
      }

      .modules-shortcut {
        margin-bottom: 15px;
        width: 35%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        color: #fff;

        .shortcut-wrap {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-end;

          li {
            margin: 0.5rem 0;
            width: 21.2rem;
            height: 11rem;

            img {
              width: 100%;
            }
          }
        }
      }
    }
  }
}
@media only screen and (min-width: 75em) and (max-width: 136em) {
  .home-section-1 {
    background-size: 100% auto;
    .wrap {
      .content {
        .abstract {
          h1 {
            padding-bottom: 0;
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .home-section-1 {
    background-size: auto 100%;
    border-bottom: 0.6rem solid #f7cb3b;

    .wrap {
      .content {
        .abstract {
          width: 100%;

          h1 {
            padding-bottom: 15rem;
            text-align: left;
          }
        }

        .modules-shortcut {
          display: none;
        }
      }
    }
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .home-section-1 {
    background-size: auto 100%;
    border-bottom: 0.6rem solid #f7cb3b;

    .wrap {
      .content {
        .abstract {
          width: 100%;

          h1 {
            padding-bottom: 15rem;
            text-align: left;
          }
        }

        .modules-shortcut {
          display: none;
        }
      }
    }
  }
}

@media only screen and (max-width: 48em) {
  .home-section-1 {
    background-size: auto 100%;
    border-bottom: 0.6rem solid #f7cb3b;

    .wrap {
      .content {
        .abstract {
          width: 100%;

          h1 {
            padding: 0 1.5rem;
            padding-bottom: 6rem;

            line-height: 5rem;
            font-size: 2.8em;
            text-align: left;
          }
        }

        .modules-shortcut {
          display: none;
        }
      }
    }
  }
}
</style>
