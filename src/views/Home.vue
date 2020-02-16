<template>
  <div id="homeContainer">
    <MyNav></MyNav>
    <div class="content">
      <div class="left">
        <div class="block">
          <el-avatar :size="100" :src="circleUrl"></el-avatar>
        </div>
        <div class="title">
          <span>偷来浮生</span>
          <i class="el-icon-setting"></i>
        </div>
        <div class="picturesetbtn">
          <ul>
            <li :class="[show == 1 ?'selection' :'']" @click="show=1">
              <span>公开图片集</span>
              <span>4</span>
            </li>
            <li :class="[show == 2 ?'selection' :'']" @click="show=2">
              <span>私密图片集</span>
              <span>4</span>
            </li>
            <li :class="[show == 3 ?'selection' :'']" @click="show=3">
              <span>收藏夹</span>
              <span>4</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="rigth">
        <div class="pictureset-tab">
          <ul>
            <li @click="show=1" :class="[show == 1 ?'onclick' :'']">公开图片集</li>
            <li @click="show=2" :class="[show == 2 ?'onclick' :'']">私密图片集</li>
            <li @click="show=3" :class="[show == 3 ?'onclick' :'']">收藏夹</li>
            <li>个人信息</li>
          </ul>
        </div>

        <div class="openpictureset" v-show="show == 1? true:false">
          <div class="pictureset-header">
            <h1>公开的图片集</h1>
          </div>
          <el-row :gutter="20" style="margin-right:20px;margin-top:20px">
            <el-col :xs="12" :sm="8" :md="6" v-for="o in 10" :key="o">
              <el-card style="margin-bottom:20px" :body-style="{ padding: '0px' }" shadow="hover">
                <div @click="dialogVisible = true">
                  <img
                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    class="image"
                  />
                  <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <div class="clearfix">
                      <ul>
                        <li>
                          <i class="el-icon-picture-outline">66</i>
                        </li>
                        <li>
                          <a href>修改</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
        <div class="privatepictureset" v-show="show == 2? true:false">
          <div class="pictureset-header">
            <h1>私密的图片集</h1>
          </div>
          <el-row :gutter="20" style="margin-right:20px;margin-top:20px">
            <el-col :xs="12" :sm="8" :md="6" v-for="o in 10" :key="o">
              <el-card style="margin-bottom:20px" :body-style="{ padding: '0px' }" shadow="hover">
                <img
                  src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                  class="image"
                />
                <div style="padding: 14px;">
                  <span>好吃的汉堡</span>
                  <div class="clearfix">
                    <ul>
                      <li>
                        <i class="el-icon-picture-outline">66</i>
                      </li>
                      <li>
                        <a href>修改</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
        <div class="collection" v-show="show == 3? true:false">
          <div class="pictureset-header">
            <h1>收藏的图片集</h1>
          </div>
          <el-row :gutter="20" style="margin-right:20px;margin-top:20px">
            <el-col :xs="12" :sm="8" :md="6" v-for="o in 10" :key="o">
              <el-card style="margin-bottom:20px" :body-style="{ padding: '0px' }" shadow="hover">
                <div>
                  <img
                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    class="image"
                  />
                  <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <div class="clearfix">
                      <ul>
                        <li>
                          <i class="el-icon-picture-outline">66</i>
                        </li>
                        <li>
                          <a href>南开</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <!-- 弹出框 -->
    <el-dialog title="好吃的汉堡" :visible.sync="dialogVisible" width="30%" custom-class="ddialog">
      <div class="oContainer">
        <div class="layoutBox">
          <div class="ImgBox" v-for="(url,index) in urls" :key="index" lazy>
            <div class="dark" @click="onPreview(index)"></div>
            <el-image :src="url" :art="index" style="width:100%"></el-image>
          </div>
        </div>

        <el-image-viewer v-if="showViewer" :on-close="closeViewer" :url-list="srcList" />
      </div>
    </el-dialog>
  </div>
</template>
<script>
import MyNav from "../components/Nav.vue";
// 导入组件
import ElImageViewer from "element-ui/packages/image/src/image-viewer";
export default {
  components: {
    MyNav,
    ElImageViewer
  },
  data() {
    return {
      circleUrl:
        "http://wimg.bigbigwork.com/user_avatar/663b9362c63a4a1aa5a358deede85b15.jpg",
      isshow: false, //控制是否显示
      show: 1, //用来显示，默认显示第一个
      dialogVisible: false,
      showViewer: false,
      urls: [
        "https://imgsa.baidu.com/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=fbc3501b0a087bf469e15fbb93ba3c49/bf096b63f6246b60ea65dd24e3f81a4c510fa273.jpg",
        "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
        "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
        "https://imgsa.baidu.com/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=9fe1d71697ef76c6c4dff379fc7f969f/b03533fa828ba61ed2efcd184634970a304e5987.jpg",
        "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
        "https://imgsa.baidu.com/baike/c0%3Dbaike72%2C5%2C5%2C72%2C24/sign=f3d4063328738bd4d02cba63c0e2ecb3/a2cc7cd98d1001e910616de1be0e7bec55e797fa.jpg",
        "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
        "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
        "https://imgsa.baidu.com/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=9fe1d71697ef76c6c4dff379fc7f969f/b03533fa828ba61ed2efcd184634970a304e5987.jpg",
        "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
        "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
        "https://imgsa.baidu.com/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=9fe1d71697ef76c6c4dff379fc7f969f/b03533fa828ba61ed2efcd184634970a304e5987.jpg",
        "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
        "https://imgsa.baidu.com/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=9fe1d71697ef76c6c4dff379fc7f969f/b03533fa828ba61ed2efcd184634970a304e5987.jpg",
        "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
        "https://imgsa.baidu.com/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=9fe1d71697ef76c6c4dff379fc7f969f/b03533fa828ba61ed2efcd184634970a304e5987.jpg",
        "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg"
      ],
      srcList: [
        "https://imgsa.baidu.com/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=fbc3501b0a087bf469e15fbb93ba3c49/bf096b63f6246b60ea65dd24e3f81a4c510fa273.jpg",
        "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
        "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
        "https://imgsa.baidu.com/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=9fe1d71697ef76c6c4dff379fc7f969f/b03533fa828ba61ed2efcd184634970a304e5987.jpg",
        "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
        "https://imgsa.baidu.com/baike/c0%3Dbaike72%2C5%2C5%2C72%2C24/sign=f3d4063328738bd4d02cba63c0e2ecb3/a2cc7cd98d1001e910616de1be0e7bec55e797fa.jpg",
        "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
        "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
        "https://imgsa.baidu.com/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=9fe1d71697ef76c6c4dff379fc7f969f/b03533fa828ba61ed2efcd184634970a304e5987.jpg",
        "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
        "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
        "https://imgsa.baidu.com/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=9fe1d71697ef76c6c4dff379fc7f969f/b03533fa828ba61ed2efcd184634970a304e5987.jpg",
        "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
        "https://imgsa.baidu.com/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=9fe1d71697ef76c6c4dff379fc7f969f/b03533fa828ba61ed2efcd184634970a304e5987.jpg",
        "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
        "https://imgsa.baidu.com/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=9fe1d71697ef76c6c4dff379fc7f969f/b03533fa828ba61ed2efcd184634970a304e5987.jpg",
        "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg"
      ]
    };
  },
  methods: {
    onPreview(index) {
      let url = this.srcList[index];
      this.srcList[0] = this.srcList[index];
      this.srcList[index] = url;
      this.showViewer = true;
    },
    // 关闭查看器
    closeViewer() {
      this.showViewer = false;
    }
  }
};
</script>
<style lang="scss" scpoed>
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
.content {
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
}
.content .left {
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 50px;
}
.content .left div {
  margin-bottom: 15px;
  width: 60%;
}
.content .left .block {
  text-align: center;
}
.content .left .title {
  text-align: center;
  font-size: 20px;
  font-size: 18px;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 135px;
  overflow: hidden;
  display: inline-block;
  color: #303030;
}
.content .left .picturesetbtn ul li {
  padding: 7px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #e8e8e8;
  border-radius: 3px;
  color: #303030;
  margin-bottom: 10px;
  font-size: 15px;
  background: #fff;
}
.content .left .picturesetbtn ul li:hover {
  background: #ff4d4d;
  color: white;
  cursor: pointer;
}
.selection {
  background: #ff4d4d !important;
  color: white !important;
}
.content .rigth {
  padding-top: 50px;
  width: 80%;
}
.pictureset-tab {
  width: 100%;
}
.pictureset-tab ul {
  display: flex;
  justify-content: flex-start;
  align-content: center;
}
.pictureset-tab ul li {
  font-size: 22px;
  color: #767676;
  border-bottom: 4px solid #f8f8f8;
  padding: 5px;
}
.onclick {
  border-bottom: 4px solid #ff4d4d!important;
  cursor: pointer;
}
.pictureset-tab ul li:hover {
  border-bottom: 4px solid #ff4d4d;
  cursor: pointer;
}
.content .rigth .collection {
  height: 700px;
}
.content .rigth .openpictureset {
  height: 700px;
}
.content .rigth .privatepictureset {
  height: 700px;
}
.pictureset-header h1 {
  font-size: 24px;
  font-size: 22px;
  color: #767676;
  font-weight: 400;
}

//卡片
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.content span {
  font-size: 18px;
  font-weight: 600;
}

.clearfix ul {
  font-size: 14px;
  color: #999;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.clearfix ul li a {
  font-size: 14px;
  color: #999;
  text-decoration: none;
}
.clearfix ul li a:hover {
  border-bottom: 1px solid #999;
}
// 弹出框
.ddialog {
  width: 90% !important;
}
.el-dialog__body {
  padding: 0px;
}
// 瀑布流
.ImgBox {
  position: relative;
  margin-bottom: 15px;
}
.dark {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  opacity: 0;
  border-radius: 5px;
  transition: 0.3s;
  z-index: 999;
}

.layoutBox {
  display: block;
  width: 100%;
  margin: auto;
  padding-top: 15px;
  padding-left: 15px;
  padding: 15px;
  -moz-column-gap: 15px;
  -webkit-column-gap: 15px;
  column-gap: 15px;
}
.layoutBox:after {
  display: block;
  content: "";
  clear: both;
}
.layoutBox .el-image {
  padding: 0px;
}
.layoutBox .el-image img {
  display: block;
  width: 100%;
  height: auto;
  break-inside: avoid;

  border-radius: 5px;
}
.dark-inside {
  width: 100%;
  height: 100%;
  padding: 20px;
  position: relative;
}
.dark-inside .el-button {
  border: 1px solid #f2f6fc !important;
  background: white !important;
  color: #111;
  opacity: 0.8;
  font-size: 16px;
}
.dark-inside .el-button:hover {
  opacity: 1;
}
.dark-inside-top {
  float: right;
}
.dark-inside-bottom {
  position: absolute;
  bottom: 20px;
  right: 20px;
}
.dark-inside .el-button {
  background: rgba(241, 238, 238, 0.1);
  border: 0px;
}

@media screen and(max-width: 400px) {
  // 瀑布流
  .layoutBox {
    -moz-column-count: 1;
    -webkit-column-count: 1;
    column-count: 1;
  }
}
@media screen and (min-width: 1200px) {
  .layoutBox {
    -moz-column-count: 3;
    -webkit-column-count: 3;
    column-count: 3;
  }
  .pictureset-tab {
    display: none;
  }
}
@media screen and (min-width: 993px) and (max-width: 1199px) {
  #pictureset .image {
    width: 100%;
    height: 30vh;
    display: block;
  }
  .layoutBox {
    -moz-column-count: 3;
    -webkit-column-count: 3;
    column-count: 3;
  }
  .pictureset-tab {
    display: none;
  }
}
@media screen and (min-width: 768px) and (max-width: 992px) {
  #pictureset .image {
    width: 100%;
    height: 30vh;
    display: block;
  }
  .layoutBox {
    -moz-column-count: 2;
    -webkit-column-count: 2;
    column-count: 2;
  }
  .content {
    margin-top: 100px;
  }
  .ddialog {
    width: 100% !important;
  }
  .pictureset-tab {
    display: none;
  }
}
@media screen and (max-width: 768px) {
  .content .left {
    display: none;
  }
  .content .rigth {
    width: 100%;
    margin-left: 20px;
  }
  .pictureset-header {
    display: none;
  }
}
</style>