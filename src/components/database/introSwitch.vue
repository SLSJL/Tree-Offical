
<template>
  <div class="gis-intro intro-switch" @click="$emit('click')">
    <img :src="require('./../../assets/images/database/intro.png')" alt>
  </div>
</template>

<script>
export default {
  name: "gisIntroSwitch"
};
</script>
<style lang="less" scoped>
.intro-switch {
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    width: 40px;
    height: 40px;
  }

  border-radius: 60px;
  background-color: #fff;
}
</style>

