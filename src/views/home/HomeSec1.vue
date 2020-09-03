<template>
  <div class="container-fluid home-section-1">
    <div class="wrap">
      <Navigation></Navigation>
      <div class="content">
        <section class="abstract">
          <!-- 内容 -->
          <h1 v-html="$t('message.home.sec1')"></h1>
          <div class="abstract-app-btns">
            <p>
              <b>Mobile Application: </b>
              <el-button
                class="abstract-app-video"
                type="text"
                @click="watchVideo"
              >
                WATCH VIDEO <i class="el-icon-video-camera-solid"></i
              ></el-button>
              and DOWNLOAD from HERE
            </p>
            <el-button
              class="abstract-app-btn"
              type="success"
              plain
              @click="goAppStore"
              >APP STORE</el-button
            >
            <el-button
              class="abstract-app-btn"
              type="success"
              plain
              @click="goGooglePlay"
              >GOOGLE PLAY</el-button
            >
          </div>
        </section>
        <section class="modules-shortcut">
          <ul class="shortcut-wrap">
            <li>
              <img
                :src="require('./../../assets/images/home/home-thumb-1@2x.png')"
                alt
              />
            </li>
            <li>
              <img
                :src="require('./../../assets/images/home/home-thumb-2@2x.png')"
                alt
              />
            </li>
            <li>
              <img
                :src="require('./../../assets/images/home/home-thumb-3@2x.png')"
                alt
              />
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
    Navigation,
  },
  methods: {
    goAppStore() {
      window.location.href =
        "https://apps.apple.com/cn/app/hkjc-smart-tree/id1473986069?l=en";
    },
    goGooglePlay() {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.hkjctree&hl=en_US";
    },
    watchVideo() {
      window.location.href = "https://youtu.be/qEDjEs6Zhr8";
    },
  },
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
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
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
        .abstract-app-btns {
          padding-left: 8rem;
          p {
            font-size: 1.8rem;
            text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
            span {
              padding: 0.2rem 0.8rem;
              background-color: #dda900;
              text-shadow: none;
            }
          }
          .abstract-app-btn {
            margin-right: 1rem;
            padding: 1.5rem 3rem;
            font-size: 1.8rem;
            background-color: transparent;
            color: #ffffff;
          }
          .abstract-app-video {
            font-size: 1.8rem;
            color: #ffffff;
            text-decoration: underline;
            i {
              font-size: 2.4rem;
            }
          }
          .abstract-app-video:hover {
            color: #dda900;
          }
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
            padding-bottom: 4rem;
            line-height: 5rem;
            font-size: 2.4em;
            text-align: left;
          }
          .abstract-app-btns {
            padding-left: 8rem;
            p {
              padding-top: 0.5rem;
              padding-bottom: 0.5rem;
              font-size: 1.4rem;
              text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);

              span {
                padding: 0.2rem 0.4rem;
                background-color: #dda900;
                text-shadow: none;
              }
            }
            .abstract-app-btn {
              margin-right: 0;
              padding: 1rem 1.5rem;
              font-size: 1.4rem;
              background-color: transparent;
              color: #ffffff;
            }
            .abstract-app-video {
              font-size: 1.4rem;
              color: #ffffff;
              text-decoration: underline;
              i {
                font-size: 2.4rem;
              }
            }
            .abstract-app-video:hover {
              color: #dda900;
            }
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
            padding: 0 0.5rem;
            line-height: 4rem;
            font-size: 1.8em;
            text-align: left;
          }
          .abstract-app-btns {
            padding-left: 1.5rem;
            p {
              padding-top: 0.5rem;
              padding-bottom: 0.5rem;
              font-size: 1.2rem;
              text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);

              span {
                padding: 0.2rem 0.4rem;
                background-color: #dda900;
                text-shadow: none;
              }
            }
            .abstract-app-btn {
              margin-right: 0;
              padding: 1rem 1.5rem;
              font-size: 1.2rem;
              background-color: transparent;
              color: #ffffff;
            }
            .abstract-app-video {
              font-size: 1.2rem;
              color: #ffffff;
              text-decoration: underline;
              i {
                font-size: 1.2rem;
              }
            }
            .abstract-app-video:hover {
              color: #dda900;
            }
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
