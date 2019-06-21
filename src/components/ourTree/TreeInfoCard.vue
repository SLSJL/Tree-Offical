<template>
  <div class="container-fluid info-card" :style="{ backgroundColor: bgClr}" @click="openContent">
    <img :src="icon" alt>
    <h5 :style="{color:fclr}">{{text}}</h5>
  </div>
</template>
<script>
export default {
  name: "TreeInfoCard",
  props: {
    text: { type: String },
    icon: { type: String },
    bgClr: { type: String },
    fclr: { type: String }
  },
  data() {
    return {};
  },
  async mounted() {},
  methods: {
    openContent() {
      this.$emit("click");
    }
  }
};
</script>
<style lang="less" scoped>
.info-card {
  // margin: 0 5px;
  flex-grow: 1;
  // min-width: 180px;
  height: 240px;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid rgba(0, 0, 0, 0);
  transition: all 0.6s;
  cursor: pointer;

  img {
    margin-bottom: 30px;
    max-height: 80px;
  }

  h5 {
    margin-bottom: -40px;
    font-size: 12px;
  }
}

.info-card.active,
.info-card:hover {
  border-bottom: 2px solid rgba(0, 135, 122, 0.5);
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .info-card {
    height: 180px;

    img {
      margin-bottom: 0;
      max-height: 60px;
    }

    h5 {
      padding: 0 1rem;
      margin-bottom: -40px;
      font-size: 1.2rem;
    }
  }
}

@media only screen and (max-width: 48em) {
  .info-card {
    float: left;
    width: 49.9%;
    height: 180px;

    img {
      margin-bottom: 0;
      max-height: 60px;
    }

    h5 {
      padding: 0 1rem;
      margin-bottom: -40px;
      font-size: 1.2rem;
    }
  }
}
</style>
