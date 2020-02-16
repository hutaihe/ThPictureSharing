<template>
  <div>
    <MyNav @isFlagFn="listFlagFn" ></MyNav>
    
    <MyClassify :isFlag="flag"></MyClassify>
      <el-divider></el-divider>
    <MyRidingLantern></MyRidingLantern>
    <MyPictureSet></MyPictureSet>
    <!-- <MyLogin ></MyLogin> -->
  </div>
</template>
<script>
import MyNav from "../components/Nav.vue";
import MyClassify from "../components/Classify.vue";
import MyRidingLantern from '../components/RidingLantern.vue'
import MyPictureSet from '../components/PictureSet.vue'
import MyLogin from '../components/Login.vue'
export default {
  components: {
    MyNav,
    MyClassify,
    MyRidingLantern,
    MyPictureSet,
    MyLogin
  },

  data() {
    return {
      input1: "",
      input2: "",
      input3: "",
      select: "",
      flag: false,
      currentDate: new Date()
    };
  },
  methods: {
    //小屏时打开侧边栏
    listFlagFn(data) {
      this.flag = data;
    }
  }
};
</script>
<style scoped>
body {
  background: #f8f8f8;
}
* {
  margin: 0px;
  padding: 0px;
  list-style: none;
  box-sizing: border-box;
  font-family: "PingFang SC", "Microsoft Yahei", sans-serif;
}
.describe{
  width: 100%;
  height: 200px;
  padding: 20px;
}

</style>