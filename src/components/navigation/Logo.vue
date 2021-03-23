<template>
  <div class="logo"></div>
</template>
<script>
export default {
  name: "logo"
};
</script>
<style lang="less" scoped>
.logo {
  width: 360px;
  height: 65%;
  background-image: url("./../../assets/images/home/logo.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto 100%;
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .logo {
    width: 160px;
    height: 40px;
  }
}

@media only screen and (max-width: 48em) {
  .logo {
    width: 40px;
    height: 40px;
    background-image: url("./../../assets/images/home/logo-mobile.png");
  }

  p {
    padding: 0 3rem;
    width: 100% !important;
    font-size: 1.2rem !important;
  }
}
</style>
