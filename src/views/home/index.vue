<template>
  <div class="container-fluid home-container">
    <HommSec1></HommSec1>
    <HommSec2></HommSec2>
    <HommSec3></HommSec3>
    <HommSec4></HommSec4>
    <HommSec5></HommSec5>
    <WebFooter></WebFooter>
  </div>
</template>
<script>
import HommSec1 from "./HomeSec1";
import HommSec2 from "./HomeSec2";
import HommSec3 from "./HomeSec3";
import HommSec4 from "./HomeSec4";
import HommSec5 from "./HomeSec5";
import WebFooter from "./../../components/WebFooter/";

export default {
  name: "home",
  components: {
    HommSec1,
    HommSec2,
    HommSec3,
    HommSec4,
    HommSec5,
    WebFooter
  }
};
</script>

<style lang="less" scoped>
.home-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
