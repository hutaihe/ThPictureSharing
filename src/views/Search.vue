<template>
  <div id="seaContainer">
    <MyNav @isFlagFn="listFlagFn"></MyNav>
    <div class="content">
      <el-divider></el-divider>
      <div class="search">
        <div class="search-input">
          <el-input placeholder="请输入内容">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </div>
      
      <div class="header-key">
        <h1>收索的内容</h1>
        <p>一共100条数据</p>
      </div>
      <el-divider></el-divider>
      <MyPictureSet></MyPictureSet>
      <MyClassify :isFlag="flag"></MyClassify>
    </div>
  </div>
</template>
<script>
import MyNav from "../components/Nav.vue";
import MyPictureSet from "../components/PictureSet.vue";
import MyClassify from "../components/Classify.vue";
export default {
  components: {
    MyNav,
    MyPictureSet,
    MyClassify
  },
  data() {
    return {
      flag: false
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
<style lang="scss" scoped>
* {
  margin: 0px;
  padding: 0px;
  list-style: none;
  box-sizing: border-box;
  font-family: "PingFang SC", "Microsoft Yahei", sans-serif;
}
#seaContainer .content {
  margin-top: 80px;
}
#seaContainer .content .search {
  width: 100%;
  height: 150px;
//   background: url("http://attach.bbs.miui.com/forum/201301/25/202401037or0gofk7rhh6g.jpg");
  background-size: cover;
}
#seaContainer .content .search .search-input {
  margin-left: 25%;
  width: 50%;
  line-height: 150px;
  border-radius: 0px!important;
}
#seaContainer .content .search .search-input input {
  height: 50px;
}
#seaContainer .content .search .search-input button{
    height: 50px;
}
#seaContainer .content .header-key {
  padding: 10px;
}
#seaContainer .content .header-key h1 {
  font-size: 30px;
  color: #303133;
  font-weight: 600;
  margin-bottom: 20px;
}
.el-divider {
  margin: 0px;
}
#seaContainer .content .header-key p {
  color: #909399;
}

@media screen and (max-width: 768px) {
  #seaContainer .content {
    margin-top: 100px;
  }
  #seaContainer .content .search {
    width: 100%;
    height: 100px;
  }
  #seaContainer .content .search .search-input {
    line-height: 100px;
    width: 80%;
      margin-left: 10%;
  }

}
</style>