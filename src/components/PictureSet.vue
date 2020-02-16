<template>
  <!-- 图片集 -->
  <div id="pictureset">
    <el-row :gutter="20" style="margin:20px" v-infinite-scroll="load">
      <el-col
        :span="6"
        v-for="(o, index) in count"
        :key="o"
        :offset="index > 0 ? 2 : 0"
        :xs="12"
        :sm="8"
        :md="6"
        infinite-scroll-disabled="disabled"
        style="margin-bottom:20px"
      >
        <el-card :body-style="{ padding: '0px' }" shadow="hover">
          <div @click="dialogVisible=true">
            <img
              src="https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg"
              class="image"
            />
            <div class="pictureset-describe">
              <span>好吃的汉堡</span>
              <div class="clearfix">
                <ul>
                  <li>
                    <i class="el-icon-picture-outline">66</i>
                  </li>
                  <li>
                    <a href>南桥及</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <!-- 弹出框 -->
    <el-dialog
      title="图片集"
      :visible.sync="dialogVisible"
      :fullscreen="false"
      top="5vh"
      width="30%"
      custom-class="ddialog"
    >
      <div class="dialog-header">
        <div class="dialog-geader-left">
          <el-avatar icon="el-icon-user-solid"></el-avatar>
          <el-tag type="success">程序员的头发</el-tag>
        </div>

        <ul class="dialog-geader-rigth">
          <li>
            <a>
              <i class="el-icon-star-off"></i>
            </a>
          </li>
          <li>
            <a>
              <i class="el-icon-plus">Collect</i>
            </a>
          </li>
          <li @click="dialogVisible = false">
            <a>
              <i class="el-icon-close"></i>
            </a>
          </li>
        </ul>
      </div>

      <div class="oContainer">
        <div class="layoutBox">
          <div class="ImgBox" v-for="(url,index) in urls" :key="index" lazy>
            <div class="dark" @click="onPreview(index)">
              <div class="dark-inside">
                <div class="dark-inside-top">
                  <el-button size="small">
                    <i class="el-icon-star-off"></i>
                  </el-button>
                  <el-button size="small">
                    <i class="el-icon-plus"></i>
                  </el-button>
                </div>
                <div class="dark-inside-bottom">
                  <el-button size="small">
                    <i class="el-icon-bottom"></i>
                  </el-button>
                </div>
              </div>
            </div>
            <el-image :src="url" :art="index" style="width:100%"></el-image>
          </div>
        </div>

        <el-image-viewer v-if="showViewer" :on-close="closeViewer" :url-list="srcList" />
      </div>
    </el-dialog>
  </div>
</template>
<script>
// 导入组件
import ElImageViewer from "element-ui/packages/image/src/image-viewer";
export default {
  components: { ElImageViewer },
  data() {
    return {
      count: 12,
      loading: false,
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
  computed: {
    noMore() {
      return this.count >= 20;
    },
    disabled() {
      return this.loading || this.noMore;
    }
  },
  methods: {
    load() {
      this.loading = true;
      setTimeout(() => {
        this.count += 12;
        this.loading = false;
      }, 200);
    },
    onPreview(index) {
      let url = this.srcList[index];
      this.srcList[0] = this.srcList[index];
      this.srcList[index] = url;
      this.showViewer = true;
    },
    // 关闭查看器
    closeViewer() {
      this.showViewer = false;
    },
    openPictureSet() {
      this.dialogVisible = true;
    },
    shout() {
      this.dialogVisible = false;
    }
  }
};
</script>
<style lang="scss" >
* {
  margin: 0px;
  padding: 0px;
  list-style: none;
  box-sizing: border-box;
  font-family: "PingFang SC", "Microsoft Yahei", sans-serif;
}
body {
  background: #f8f8f8;
}
//图片集
#pictureset .time {
  font-size: 13px;
  color: #999;
}
#pictureset .button {
  padding: 0;
  float: right;
}

#pictureset .image {
  width: 100%;
  height: 35vh;
  display: block;
}
#pictureset .pictureset-describe {
  padding: 14px;
}
#pictureset .pictureset-describe span {
  font-size: 18px;
  font-weight: 600;
}
#pictureset .pictureset-describe .clearfix ul {
  font-size: 14px;
  color: #999;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#pictureset .pictureset-describe .clearfix ul li a {
  font-size: 14px;
  color: #999;
  text-decoration: none;
}
#pictureset .pictureset-describe .clearfix ul li a:hover {
  border-bottom: 1px solid #999;
}
#pictureset .clearfix:before,
#pictureset .clearfix:after {
  display: table;
  content: "";
}

#pictureset .clearfix:after {
  clear: both;
}
#pictureset .el-col-offset-2 {
  margin-left: 0px;
}
.ddialog {
  width: 90% !important;
}
#pictureset .el-dialog__header {
  display: none;
}
#pictureset .el-dialog__body {
  padding: 0px;
}
#pictureset .dialog-header {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1em;
  padding-top: 10px;
  border-bottom: 1px solid #faf6f6;
}
#pictureset .dialog-geader-left {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#pictureset .dialog-geader-left .el-avatar {
  margin-right: 20px;
}
#pictureset .dialog-geader-rigth {
  width: 180px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#pictureset .dialog-geader-rigth li {
  padding: 10px;
  font-size: 16px;
  text-align: center;
  color: #767676;
  border: 1px solid #faf6f6;
  border-radius: 4px;
  transition: all 0.4s;
}
#pictureset .dialog-geader-rigth li:hover {
  border: 1px solid #d1d1d1;
  cursor: pointer;
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
.ImgBox:hover .dark {
  opacity: 1;
  background-color: rgba(199, 195, 195, 0.2);
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
@media screen and(max-width: 768px) {
  .el-carousel__container {
    height: 300px !important;
  }
  #pictureset .image {
    width: 100%;
    height: 30vh;
    display: block;
  }
  .ddialog {
    width: 100% !important;
  }
  .layoutBox {
    -moz-column-count: 1;
    /* Firefox */
    -webkit-column-count: 1;
    /* Safari 和 Chrome */
    column-count: 1;
    -moz-column-gap: 1em;
    -webkit-column-gap: 1em;
    column-gap: 1em;
  }
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
}
</style>