<template>
  <div class="container-fluid story-map-card" :style="{backgroundImage: 'url(' + info.bg + ')'}">
    <div class="text-wrap" @click="dialogTableVisible = true">
      <h1>{{info.title}}</h1>
      <p>{{info.text}}</p>
    </div>

    <el-dialog :fullscreen="true" :title="info.title" :visible.sync="dialogTableVisible">
      <iframe :src="info.url" width="100%" :height="winHeight" frameborder="0"></iframe>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "OurTree",
  props: {
    info: {
      type: Object
    }
  },
  data() {
    return {
      dialogTableVisible: false,
      winHeight: window.innerHeight - 120
    };
  }
};
</script>
<style lang="less" scoped>
.story-map-card {
  width: 100%;
  height: 180px;
  text-align: left;
  display: flex;
  justify-content: flex-start;
  align-self: center;

  border-radius: 12px;

  background-color: #ddd;
  overflow: hidden;

  .text-wrap {
    width: 100%;
    height: 100%;

    padding-left: 30px;
    flex-direction: column;
    text-align: left;
    display: flex;
    justify-content: center;
    align-self: center;

    background-color: rgba(0, 0, 0, 0.45);
    color: white;
    cursor: pointer;
    transition: all 0.6s;

    h1 {
      margin-top: 0;
      margin-bottom: 10px;
    }
    p {
      margin: 0;
      font-size: 14px;
    }
  }
}

.story-map-card:hover {
  .text-wrap {
    background-color: rgba(0, 0, 0, 0.65);
  }
}
</style>
