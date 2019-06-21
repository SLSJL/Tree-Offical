
<template>
  <div class="container media-coverage">
    <div class="caption">
      <span>Media</span>
    </div>
    <div class="media-group">
      <MediaList :dataset="list1Data"></MediaList>
      <MediaList :dataset="list2Data"></MediaList>
    </div>
  </div>
</template>
<script>
import MediaList from "./../../components/resource/MediaList";

export default {
  components: {
    MediaList
  },
  data() {
    return {
      list1Data: [
        {
          title: "智慧政府創新實驗室開幕為政府部門和科技業界配對",
          filePath:
            "190604_香港商業電台_智慧政府創新實驗室開幕為政府部門和科技業界配對.pdf",
          date: [4, "Jun", 2019]
        },
        {
          title: "Hong Kong: Smart LAB launched",
          filePath: "190531_7th Space_Hong Kong Smart LAB launched.pdf",
          date: [31, "May", 2019]
        },
        {
          title: "明年首季8千棵裝感應器測量 全天候監察樹木健康",
          filePath:
            "190531_AM730_明年首季8千棵裝感應器測量 全天候監察樹木健康.pdf",
          date: [31, "May", 2019]
        },
        {
          title:
            "創新實驗室 實境地圖瞬變火警現場 供政府部門體驗新技術 冀助配對業界方案",
          filePath:
            "190531_明報新聞網_創新實驗室 實境地圖瞬變火警現場 供政府部門體驗新技術 冀助配對業界方案.pdf",
          date: [31, "May", 2019]
        },
        {
          title: "智慧政府創新實驗室開幕 樹木辦將為8,000棵樹做電子監控",
          filePath:
            "190531_PCM_智慧政府創新實驗室開幕 樹木辦將為8,0…樹做電子監控.pdf",
          date: [30, "May", 2019]
        }
        // {
        //   title: "同途有心人-環境保護-第三十三集",
        //   filePath: "http://event.881903.com/hkjc-charities/",
        //   date: [21, "Oct", 2018]
        // },

        // {
        //   title: "智能傳感器監測樹健康",
        //   filePath: "1.2.pdf",
        //   date: [15, "Jun", 2018]
        // },
        // {
        //   title: "賽馬會智慧城市計畫啟動 監測8千棵樹木適時護養",
        //   filePath: "1.5.pdf",
        //   date: [15, "Jun", 2018]
        // },
        // {
        //   title:
        //     "PolyU to Apply Smart Sensing Technology in Urban Tree Management",
        //   text: "This is the content of Media",
        //   filePath: "2.3.pdf",
        //   date: [15, "Jun", 2018]
        // }
      ],
      list2Data: [
        {
          title: "政府創新實驗室開幕 將為8000樹裝監測器 ",
          filePath: "190531_星島日報_政府創新實驗室開幕 將為8000樹裝監測器.pdf",
          date: [31, "May", 2019]
        },
        {
          title: "創新實驗室開幕 搖動模型測塌樹危機",
          filePath: "190531_晴報_創新實驗室開幕 搖動模型測塌樹危機.pdf",
          date: [31, "May", 2019]
        },
        {
          title:
            "New Hong Kong Smart Lab opens with aim of allowing tech start-ups to pitch ideas that can be used to improve public services",
          filePath:
            "190530_NewSmartLAB.pdf",
          date: [31, "May", 2018]
        },
        {
          title:
            "九寶建智城 樹搖未塌先救",
          filePath:
            "190531_香港文匯報_九寶建智城 樹搖未塌即救.pdf",
          date: [31, "May", 2018]
        },
        {
          title:
            "樹木辦8000樹木裝傳感器　測傾斜情況防倒塌",
          filePath:
            "180614_香港經濟日報_理大3年內為市區8000棵樹裝傳感…監測傾斜角度.pdf",
          date: [30, "May", 2018]
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.media-coverage {
  margin: 30px auto;
  display: flex;
  flex-direction: column;

  text-align: left;

  .caption {
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #ddd;
    font-weight: 600;
    span {
      display: inline-block;
      width: 120px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      background-color: #00877a;
      //   border-radius: 16px 16px 0 0;
      color: #fff;
      font-size: 1.6rem;
    }
  }

  .media-group {
    flex: 1;
    width: 100%;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-content: center;

    > div {
      margin: 0 15px;
      flex-grow: 1;
    }
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .media-coverage {
    width: 100%;
    padding: 0 6rem;
    box-sizing: border-box;
  }
}

@media only screen and (max-width: 48em) {
  .media-coverage {
    width: 100%;
    padding: 0 1.5rem;
    box-sizing: border-box;

    .media-group {
      flex-direction: column;
    }
  }
}
</style>
