<template>
  <div class="container project-background">
    <ProjBgArticle></ProjBgArticle>
  </div>
</template>

<script>
import ProjBgArticle from "./../../components/aboutUs/projBgArticle";

export default {
  name: "OurTree",
  components: {
    ProjBgArticle
  }
};
</script>
<style lang="less" scoped>
@media only screen and (min-width: 48em) and (max-width: 75em) {
  .project-background {
    width: 100%;
  }
}

@media only screen and (max-width: 48em) {
  .project-background {
    width: 100%;
  }
}
</style>
