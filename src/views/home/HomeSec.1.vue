<template>
  <div class="container-fluid home-section-1">
    <div class="wrap">
      <Navigation></Navigation>
      <div class="content">
        <section class="abstract">
          <!-- 内容 -->
          <div class="text-group">
            <h1>Jockey Club Smart City Tree Management Project</h1>
            <p>
              Commenced in February 2018, the 3-year pilot Project is sponsored by The Hong Kong Jockey Club Charities Trust with a funding of $32.28 million. Aiming at sustaining longer life of trees, it is a large-scale pilot project on trees in the urban area that a quantifiable method is used for identifying trees with potential needs for follow-up actions. Trees of 9 vulnerable species at risk of tree failure are selected for monitoring, such as
              <i>Bauhinia variegata</i>,
              <i>Delonix regia</i>,
              <i>Senna siamea</i> ,
              <i>Aleurites moluccana</i>, etc.
            </p>
          </div>
          <!-- 缩略图 -->
          <div class="thumbnails-group">
            <ThumbCard
              class="thumb-item"
              :thumb="require('./../../assets/images/home/thumbs-1.png')"
            ></ThumbCard>
            <ThumbCard
              class="thumb-item"
              :thumb="require('./../../assets/images/home/thumbs-2.png')"
            ></ThumbCard>
            <ThumbCard
              class="thumb-item"
              :thumb="require('./../../assets/images/home/thumbs-3.png')"
            ></ThumbCard>
            <ThumbCard
              class="thumb-item"
              :thumb="require('./../../assets/images/home/thumbs-4.png')"
            ></ThumbCard>
          </div>
        </section>
        <section class="modules-shortcut">
          <div class="shortcut-wrap">
            <ShortcutIcon class="shortcut-item" :clsName="'tree'"></ShortcutIcon>
            <ShortcutIcon class="shortcut-item" :clsName="'sensor'"></ShortcutIcon>
            <ShortcutIcon class="shortcut-item" :clsName="'database'"></ShortcutIcon>
            <ShortcutIcon class="shortcut-item" :clsName="'app'"></ShortcutIcon>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import Navigation from "./../../components/navigation/";
import ThumbCard from "./../../components/home/ThumbCard";
import ShortcutIcon from "./../../components/home/ShortcutIcon";

export default {
  name: "homeSec1",
  components: {
    Navigation,
    ThumbCard,
    ShortcutIcon
  }
};
</script>

<style lang="less" scoped>
.home-section-1 {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: 100% 100%;
  background-image: url("./../../assets/images/home/home-bg-1.jpg");

  .wrap {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.35);

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
        justify-content: space-between;
        flex-direction: column;
        width: 65%;
        height: 100%;

        h1 {
          margin-top: 120px;
          margin-left: 60px;
          text-align: left;
        }
        p {
          margin-left: 60px;
          font-size: 16px;
          line-height: 24px;
          text-align: justify;
        }
        .thumbnails-group {
          margin-left: 60px;
          margin-bottom: 30px;
          display: flex;

          .thumb-item {
            margin-right: 10px;
          }
        }
      }

      .modules-shortcut {
        margin-bottom: 15px;
        width: 35%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        .shortcut-wrap {
          width: 100%;
          display: flex;
          justify-content: flex-end;
        }
      }
    }
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .home-section-1 {
    background-size: auto 100%;
    .wrap {
      .content {
        section {
          padding: 0 30px;
          text-align: left;
        }

        .abstract {
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          width: 100%;
          height: 100%;

          h1 {
            margin: 60px auto;
            text-align: center;
            font-size: 3.6rem;
          }
          p {
            margin: 30px auto;
            padding: 0 6rem;
            font-size: 1.6rem;
            line-height: 3.6rem;
            text-align: justify;
          }

          .more-btn {
            margin-top: 60px;
            margin-left: 60px;
            color: #fff;
          }

          .thumbnails-group {
            margin-left: 60px;
            margin-bottom: 60px;
            display: flex;
            .thumb-item {
              margin-right: 10px;
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
    .wrap {
      .content {
        section {
          padding: 0 1.5rem;
          text-align: left;
          box-sizing: border-box;
        }

        .abstract {
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          width: 100%;
          height: 100%;

          h1 {
            margin: 60px auto;
            text-align: center;
            font-size: 2.4rem;
          }
          p {
            margin: 30px auto;
            padding: 0 1.5rem;
            font-size: 1.4rem;
            line-height: 2.4rem;
            text-align: justify;
          }

          .thumbnails-group {
            margin-left: 60px;
            margin-bottom: 60px;

            display: none;
            .thumb-item {
              margin-right: 10px;
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
