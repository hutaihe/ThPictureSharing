<template>
  <div id="regcon">
    <div class="header-logo">
      <a href>
        <i class="el-icon-user-solid"></i>
      </a>
    </div>
    <div class="header-text">
      <h1>注册</h1>
    </div>
    <div class="content">
      <div class="group-form" v-show="!flag">
        <label>用户名</label>
        <el-input placeholder="请输入用户名"></el-input>
      </div>
      <div class="group-form" v-show="!flag">
        <label>密码</label>
        <el-input placeholder="请输入密码"></el-input>
      </div>
      <div class="group-form" v-show="!flag">
        <label>确认密码</label>
        <el-input placeholder="请确认密码"></el-input>
      </div>
      <div class="group-form" v-show="!flag">
        <el-button type="success" @click="next">下 一 步</el-button>
      </div>
      <div class="group-form" v-show="flag">
        <label>邮箱</label>
        <el-input placeholder="请输入用户名"></el-input>
      </div>
      <div class="group-form" v-show="flag">
        <label>手机号码</label>
        <el-input placeholder="请输入密码"></el-input>
      </div>
      <div class="group-form" v-show="flag">
        <label style="margin-right:20px;">性别</label>
        <el-radio label="1">男</el-radio>
        <el-radio label="2">女</el-radio>
      </div>
      <div class="group-form" v-show="flag">
        <el-button type="success" @click="next">上 一 步</el-button>
      </div>
      <div class="group-form" v-show="flag">
        <el-button type="success">注 册</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: false
    };
  },
  methods: {
    next() {
      this.flag = !this.flag;
    }
  }
};
</script>
<style lang="scss" scoped>
#regcon {
  padding-top: 50px;
  width: 30%;
  height: 500px;
  margin: 0 35%;
}
#regcon .header-logo {
  height: 80px;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
}
#regcon .header-logo i {
  font-size: 70px;
  color: #67c23a;
}
#regcon .header-text h1 {
  text-align: center;
  font-size: 20px;
}
#regcon .header-text p {
  text-align: center;
  font-size: 15px;
}
#regcon .content {
  padding: 20px;
}
#regcon .group-form {
  margin-bottom: 20px;
}
#regcon .group-form .el-input {
  margin-top: 10px;
}

#regcon .group-form .el-button {
  width: 100%;
}
@media screen and(max-width: 768px) {
  #regcon {
    width: 100%;
    margin: 0;
  }
}
</style>