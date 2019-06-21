
<template>
  <div class="container res-audio">
    <div class="caption">
      <span>Video</span>
    </div>
    <div class="audio-group">
      
    </div>
  </div>
</template>
<script>
export default {
  name: "resource-video",
  components: {}
};
</script>
<style lang="less" scoped>
.res-audio {
  margin: 30px auto;
  display: flex;
  height: 420px;
  flex-direction: column;
  text-align: left;

  .caption {
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #ddd;
    font-weight: 600;
    span {
      display: inline-block;
      width: 120px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      background-color: #00877a;
      font-size: 1.6rem;
      color: #fff;
    }
  }

  .audio-group {
    
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .res-audio {
    width: 100%;
    padding: 0 6rem;
    height: auto;
    box-sizing: border-box;

    .audio-group {
     
    }
  }
}

@media only screen and (max-width: 48em) {
  .res-audio {
    width: 100%;
    padding: 0 1.5rem;
    box-sizing: border-box;
    height: auto;

    .audio-group {
     
    }
  }
}
</style>
