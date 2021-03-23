<template>
  <div :class="['storymap-thumb',{none: !thumb}]">
    <img :src="thumb" v-if="thumb" alt>
    <span v-else>StoryMap More</span>
  </div>
</template>
<script>
export default {
  name: "StorymapThumb",
  props: {
    thumb: {
      type: String
    }
  }
};
</script>
<style lang="less" scoped>
.storymap-thumb {
  margin-right: 5px;
  margin-bottom: 5px;
  width: 80px;
  height: 80px;

  line-height: 20px;
  border-radius: 80px;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
}

.storymap-thumb.none {
  color: #00877a;
  border: 1px solid #00877a;
}
</style>
