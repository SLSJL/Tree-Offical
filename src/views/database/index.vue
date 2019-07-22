<template>
  <div class="container-fluid database-container">
    <div class="database-sec1">
      <Navigation></Navigation>
      <DatabaseMap class="database-map"></DatabaseMap>
      <Introduction class="gis-intro-1" v-if="introShow" @click="introShow = !introShow"></Introduction>
      <GisIntroSwitch v-if="!introShow" class="gis-intro-switch" @click="introShow = !introShow"></GisIntroSwitch>
    </div>
    <WebFooter></WebFooter>
  </div>
</template>

<script>
import Navigation from "./../../components/navigation/";
import DatabaseMap from "./../../components/database/DatabaseMap";
import Introduction from "./introduction";
import GisIntroSwitch from "./../../components/database/introSwitch";

import WebFooter from "./../../components/webFooter/";

export default {
  name: "OurTree",
  components: {
    Navigation,
    WebFooter,
    DatabaseMap,
    Introduction,
    GisIntroSwitch
  },
  data() {
    return {
      introShow: true
    };
  }
};
</script>
<style lang="less" scoped>
.database-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  .database-sec1 {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .database-map {
      flex: 1;
    }
  }

  .gis-intro-1 {
    position: absolute;
    z-index: 1999;
    box-shadow: 0 -30px 50px 5px rgba(0, 0, 0, 0.15);
  }
  .gis-intro-switch {
    position: absolute;
    right: 15px;
    bottom: 15px;
    z-index: 1999;
    box-shadow: 0 0 50px 5px rgba(0, 0, 0, 0.15);
  }
}
</style>
