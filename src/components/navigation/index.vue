<template>
  <div :class="['container-fluid', 'navigation',{isSolid: isSolid}]">
    <Logo></Logo>
    <MenuList></MenuList>
  </div>
</template>
<script>
import Logo from "./Logo";
import MenuList from "./MenuList";

export default {
  name: "navigation",
  components: {
    Logo,
    MenuList
  },
  data() {
    return {
      solidNavGroup: [
        "tree",
        "storyMap",
        "infoCard",
        "database",
        "projectBackground",
        "projectTeam",
        "collaboratingPartner",
        "contactUs",
        "resource",
        "projectObjectives",
        "projectStage",
        "disclaimer",
        "policy"
      ]
    };
  },
  computed: {
    isSolid: function() {
      return this.solidNavGroup.indexOf(this.$route.name) > -1;
    }
  }
};
</script>
<style lang="less" scoped>
.navigation {
  padding: 0 50px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  z-index: 999;
}
.navigation.isSolid {
  background-color: #00877a;
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .navigation {
    padding: 0 15px;
    height: 80px;
  }
}

@media only screen and (max-width: 48em) {
  .navigation {
    padding: 0 1.5rem;
    height: 80px;
  }
}
</style>
