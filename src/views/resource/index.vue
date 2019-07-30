<template>
  <div class="container-fluid resource-container">
    <Navigation></Navigation>
    <div class="database-sec1">
      <PressRelease></PressRelease>
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
import PressRelease from "./PressRelease";
import MediaCoverage from "./MediaCoverage";
import ResVideo from "./Video";
import MediaAudio from "./MediaAudio";

import ResEvent from "./ResEvent";
import UsefulLinks from "./UsefulLinks";
import Publiction from "./Publication";

import WebFooter from "./../../components/webFooter/";

export default {
  name: "OurTree",
  components: {
    Navigation,
    WebFooter,
    PressRelease,
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
  box-sizing: border-box;

  .database-sec1 {
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .resource-container {
    .database-sec1 {
      padding: 0 30px;
      box-sizing: border-box;
    }
  }
}

@media only screen and (max-width: 48em) {
  .resource-container {
    .database-sec1 {
      padding: 0 15px;
      box-sizing: border-box;
    }
  }
}
</style>
