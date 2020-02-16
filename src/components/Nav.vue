<template>
  <!-- 导航栏 -->
  <nav>
    <div id="bigscreen">
      <div class="logo"> 图 片 分 享</div>
      <div class="search" >
        <el-input
          prefix-icon="el-icon-search"
          placeholder="请输入内容"
          class="input-with-select"
        ></el-input>
      </div>
      <ul class="nav-menu">
        <li>Collections</li>
        <li>upload</li>
        <li>
          <el-button plain style="width:90%" size="small">login</el-button>
        </li>
        <li>
          <el-button style="width:90%" type="success" size="small">register</el-button>
        </li>
      </ul>
    </div>
    <div id="smallscreen">
      <ul class="top">
        <li>
          <a>
            <i class="el-icon-s-home"></i>
          </a>
        </li>
        <li>
          <a>
            <i class="el-icon-reading"></i>
          </a>
        </li>
        <li>
          <a>
            <i class="el-icon-folder-add"></i>
          </a>
        </li>
        <li>
          <a>
            <i class="el-icon-search search-icon"></i>
          </a>
        </li>
        <li>
          <a @click="open" class="open-menu">
            <i class="el-icon-more-outline"></i>
          </a>
        </li>
      </ul>
      <div class="bottom">
        <div class="loginbtn">
          <el-button plain style="width:95%" size="small" >login</el-button>
        </div>
        <div class="reginbtn">
          <el-button type="success" style="width:95%" size="small">register</el-button>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      flag: false
    };
  },
  methods: {
    open() {
      this.flag = !this.flag;
      this.$emit("isFlagFn", this.flag);
    },
  }
};
</script>
<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
  list-style: none;
  box-sizing: border-box;
  font-family: "PingFang SC", "Microsoft Yahei", sans-serif;
}

nav #bigscreen {
  position: absolute;
  left: 0px;
  top: 0px;
  right: 0px;
  background: #303030;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1vw;
  height: 80px;
  
}
#bigscreen .logo {
  font-size: 24px;
  // color: #303133;
  color: #ecf0f1;
  font-weight: 600;
  width: 120px;
}
#bigscreen .search {
  flex: 1;
  margin-left: 20px;
  margin-right: 100px;
}
.input-with-select input{
  border-radius: 50px!important;
  width: 70%;
}
#bigscreen .nav-menu {
  width: 400px;
  display: flex;
  justify-content: space-between;
}
#bigscreen .nav-menu li {
  color: #ecf0f1;
  flex: 1;
  align-items: center;
  text-align: center;
  padding: 2vw 0;
  font-size: 14px;
  line-height: 80px;
}
#bigscreen .nav-menu li:hover {
  cursor: pointer;
  // color: #303133;
  color: #f39c12;
}
nav #smallscreen {
  position: absolute;
  left: 0px;
  top: 0px;
  right: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  flex-direction: column;
  display: none;
}
nav #smallscreen .top {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
}
nav #smallscreen .top li {
  flex: 1;
  text-align: center;
  font-size: 25px;
  line-height: 50px;
}
nav #smallscreen .bottom {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  line-height: 50px;
}
nav #smallscreen .bottom .loginbtn {
  width: 50%;
  text-align: center;
}
nav #smallscreen .bottom .reginbtn {
  width: 50%;
  text-align: center;
}
.el-button {
  font-family: "PingFang SC", "Microsoft Yahei", sans-serif !important;
  font-size: 14px;
}
@media screen and(max-width: 768px) {
  nav #bigscreen {
    display: none;
  }
  nav #smallscreen {
    display: block;
  }
}
</style>