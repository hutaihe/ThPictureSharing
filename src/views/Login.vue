<template>
  <div id="logcon">
    <div class="header-logo">
      <a href>
        <i class="el-icon-user-solid"></i>
      </a>
    </div>
    <div class="header-text">
      <h1>登录</h1>
    </div>
    <div class="content">
      <div class="group-form">
        <label>用户名</label>
        <el-input placeholder="请输入用户名"></el-input>
      </div>
      <div class="group-form">
        <label>密码</label>
        <el-input placeholder="请输入密码"></el-input>
      </div>
      <div class="group-form">
        <el-button type="success">登 录</el-button>
      </div>
      <div class="group-form">
        <el-button type="success">注 册</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>

#logcon {
  padding-top: 50px;
  width: 30%;
  height: 500px;
  margin: 0 35%;
}
#logcon .header-logo {
  height: 80px;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
}
#logcon .header-logo i {
  font-size: 70px;
  color: #67c23a;
}
#logcon .header-text h1 {
  text-align: center;
  font-size: 20px;

}
#logcon .header-text p {
  text-align: center;
  font-size: 15px;
}
#logcon .content{
  padding: 20px;
}
#logcon .group-form{  
  margin-bottom: 20px;
}
#logcon .group-form .el-input{
  margin-top: 10px;
}

#logcon .group-form .el-button{
  width: 100%;
}
@media screen and(max-width: 768px) {
  #logcon {
    width: 100%;
    margin: 0;
  }
}
</style>