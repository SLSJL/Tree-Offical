
<template>
  <div class="container publication-coverage">
    <div class="caption">
      <span>{{$t("message.resource.publication.caption")}}</span>
    </div>
    <div class="publication-group">
      <img
        :src="item.imgPath"
        alt
        v-for="(item,idx) in publications"
        :key="idx"
        @click="goToPDF(item.pdfPath)"
      />
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      publications: [
        {
          imgPath: require("./../../assets/images/resouce/Public1.png"),
          caption: "publication_Feb 2019_p74_77.pdf",
          pdfPath: "publication_Feb 2019_p74_77.pdf"
        },
        {
          imgPath: require("./../../assets/images/resouce/Public2.png"),
          caption: "香港理工大學企業發展院 - 技術前沿",
          pdfPath: "PolyUA.pdf"
        }
      ]
    };
  },
  methods: {
    goToPDF(filepath) {
      window.open(this.$utils.tool.getFileUrl() + filepath, "_blank");
    }
  }
};
</script>
<style lang="less" scoped>
.publication-coverage {
  margin: 30px auto;
  display: flex;
  flex-direction: column;

  text-align: left;

  .caption {
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #ddd;
    span {
      display: inline-block;
      padding: 0 15px;
      min-width: 120px;
      height: 40px;

      text-align: center;
      line-height: 40px;
      background-color: #00877a;
      color: #fff;
      font-size: 1.6rem;
    }
  }

  .publication-group {
    width: 100%;
    margin-top: 15px;
    display: flex;
    justify-content: flex-start;
    align-content: center;

    img {
      margin-right: 15px;
      width: 180px;
      height: 250px;
      border: 1px solid #ddd;
      transition: all 0.6s;
      cursor: pointer;
    }

    img:hover {
      box-shadow: 5px 5px 15px 2px rgba(0, 0, 0, 0.15);
    }
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .publication-coverage {
    width: 100%;
    padding: 0 6rem;
    box-sizing: border-box;
  }
}

@media only screen and (max-width: 48em) {
  .publication-coverage {
    width: 100%;
    padding: 0 1.5rem;
    box-sizing: border-box;
    .publication-group {
      img {
        margin-right: 15px;
        width: 120px;
        height: 180px;
        border: 1px solid #ddd;
        transition: all 0.6s;
        cursor: pointer;
      }
    }
  }
}
</style>
