<template>
  <div class="thumb-card">
    <img :src="thumb" alt>
  </div>
</template>
<script>
export default {
  name: "ThumbCard",
  props: {
    thumb: {
      type: String
    }
  }
};
</script>
<style lang="less" scoped>
.thumb-card {
  width: 106px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.35);
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .thumb-card {
    width: 86px;
    height: 60px;
  }
}
</style>
