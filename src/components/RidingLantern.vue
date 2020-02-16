<template>
  <!-- 走马灯 -->
  <div id="ridinglantern">
    <el-carousel :interval="5000" arrow="always" class="ridinglantern" height="500px">
      <el-carousel-item v-for="item in 4" :key="item">
       <img src="http://attach.bbs.miui.com/forum/201301/25/202401037or0gofk7rhh6g.jpg" alt="" class="rimage">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
  list-style: none;
  box-sizing: border-box;
  font-family: "PingFang SC", "Microsoft Yahei", sans-serif;
}
// 走马灯

.rimage{
  width: 100%;
  height: 600px;
}
@media screen and(max-width: 768px) {
  .ridinglantern {
    margin-top: 100px !important;
  }
  .el-carousel__container {
    height: 300px !important;
  }
  .rimage{
  width: 100%;
  height: 300px;
}
  #pictureset .image {
    width: 100%;
    height: 25vh;
    display: block;
  }
}
</style>