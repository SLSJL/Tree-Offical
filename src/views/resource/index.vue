<template>
  <div class="container-fluid resource-container">
    <div class="database-sec1">
      <Navigation></Navigation>
      <MediaCoverage></MediaCoverage>
      <MediaAudio></MediaAudio>
      <ResVideo></ResVideo>
      <ResEvent></ResEvent>
      <Publiction></Publiction>
      <UsefulLinks></UsefulLinks>
    </div>
    <WebFooter></WebFooter>
  </div>
</template>

<script>
import Navigation from "./../../components/navigation/";
import MediaCoverage from "./MediaCoverage";
import ResVideo from "./ResVideo";
import MediaAudio from "./MediaAudio";

import ResEvent from "./ResEvent";
import UsefulLinks from "./UsefulLinks";
import Publiction from "./Publication";

import WebFooter from "./../../components/WebFooter/";

export default {
  name: "OurTree",
  components: {
    Navigation,
    WebFooter,
    MediaCoverage,
    MediaAudio,
    ResVideo,
    ResEvent,
    UsefulLinks,
    Publiction
  }
};
</script>
<style lang="less" scoped>
.resource-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
