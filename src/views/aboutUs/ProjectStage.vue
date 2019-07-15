<template>
  <div class="container project-stage">
    <ProjStage></ProjStage>
  </div>
</template>

<script>
import ProjStage from "./../../components/aboutUs/projStage";

export default {
  name: "OurTree",
  components: {
    ProjStage
  }
};
</script>
<style lang="less" scoped>
@media only screen and (min-width: 48em) and (max-width: 75em) {
  .project-stage {
    width: 100%;
    padding: 0 30px;
    box-sizing: border-box;
  }
}

@media only screen and (max-width: 48em) {
  .project-stage {
    width: 100%;
    padding: 0;
    box-sizing: border-box;
  }
}
</style>
