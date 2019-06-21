<template>
  <div class="container project-objectives">
    <ProjObj></ProjObj>
  </div>
</template>

<script>
import ProjObj from "./../../components/aboutUs/projObj";

export default {
  name: "OurTree",
  components: {
    ProjObj
  }
};
</script>
<style lang="less" scoped>
@media only screen and (min-width: 48em) and (max-width: 75em) {
  .project-objectives {
    width: 100%;
    padding: 0 15px;
  }
}

@media only screen and (max-width: 48em) {
  .project-objectives {
    width: 100%;
    // padding: 0 30px;
  }
}
</style>
