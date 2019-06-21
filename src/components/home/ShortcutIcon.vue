<template>
  <div class="shortcut-icon">
    <div :class="'bg-shortcut_' + clsName"></div>
  </div>
</template>
<script>
export default {
  name: "ThumbCard",
  props: {
    clsName: {
      type: String
    }
  }
};
</script>
<style lang="less" scoped>
.shortcut-icon {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.35);

  .bg-shortcut_app {
    width: 17px;
    height: 24px;
    background: url("./../../assets/images/home/shortcut-group.png") -54px -10px;
  }

  .bg-shortcut_tree {
    width: 24px;
    height: 24px;
    background: url("./../../assets/images/home/shortcut-group.png") -10px -10px;
  }

  .bg-shortcut_sensor {
    width: 17px;
    height: 24px;
    background: url("./../../assets/images/home/shortcut-group.png") -91px -10px;
  }

  .bg-shortcut_database {
    width: 17px;
    height: 24px;
    background: url("./../../assets/images/home/shortcut-group.png") -10px -54px;
  }
}
</style>
