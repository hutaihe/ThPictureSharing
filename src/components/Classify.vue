<template>
  <!-- 分类 -->
  <div id="classify">
    <ul :class="['classify',flag ? 'open': '']" style="overflow: hidden;">
      <li>景观设计</li>
      <li>家居设计</li>
      <li>广告创意</li>
      <li>排版设计</li>
      <li>海报设计</li>
      <li>插画漫画</li>
      <li>色彩灵感</li>
      <li>潮流街拍</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["isFlag"],
  data() {
    return {};
  },
  computed: {
    flag() {
      if (this.isFlag == true) {
        return true;
      } else {
        return false;
      }
    }
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
// 分类
.classify {
  margin-top: 80px;

  height: 30px;
}
.classify {
  background: #303030;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 10px;
}
.classify li {
  padding: 10px;
  text-align: center;
  color: #ecf0f1;
  transition: all 0.5s;
  cursor: pointer;
}
.classify li:hover {
  color: #f39c12;
}
@media screen and(max-width: 768px) {
  .classify {
    position: absolute;
    display: flex;
    z-index: 999;
    top: 0px;
    right: 0px;
    bottom: 0;
    margin-top: 59px;
    height: calc(100vh - 60px);

    width: 0vw;
    background: rgba(40, 47, 56, 0.9);
    flex-direction: column; //规定灵活项目的方向
    align-items: center;
    justify-content: flex-start;
    transition: all 0.4s ease-in-out;
  }
  .classify li {
    width: 100%;
    color: #dadbdd;
  }
  .open {
    width: 49vw;
  }
  .classify li:hover {
    background: #111;
    color: white;
  }
}
</style>