<template>
  <div class="oContainer">
    <div class="layoutBox">
      <div class="ImgBox" v-for="(url,index) in urls" :key="index" lazy>
        <div class="dark" @click="onPreview(index)"></div>
        <el-image :src="url" :art="index"></el-image>
        <!-- <img class="imgs" :src="url" alt /> -->
      </div>
    </div>
    <el-image-viewer v-if="showViewer" :on-close="closeViewer" :url-list="srcList" />
  </div>
</template>
<script>
// 导入组件
import ElImageViewer from "element-ui/packages/image/src/image-viewer";
export default {
  components: { ElImageViewer },
  data() {
    return {
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
<style scoped lang="scss">
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}
.ImgBox {
  position: relative;
}
.dark {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: grey;
  opacity: 0;
  border-radius: 5px;
  transition: 0.5s;
  z-index: 999;
}
.ImgBox:hover .dark {
  opacity: 0.5;
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
.layoutBox .el-image img {
  display: block;
  width: 100%;
  height: auto;
  break-inside: avoid;
  margin-bottom: 15px;
  border-radius: 5px;
}
@media screen and (min-width: 1200px) {
  .layoutBox {
    -moz-column-count: 6;
    -webkit-column-count: 6;
    column-count: 6;
  }
}
@media screen and (min-width: 993px) and (max-width: 1199px) {
  .layoutBox {
    -moz-column-count: 4;
    -webkit-column-count: 4;
    column-count: 4;
  }
}
@media screen and (min-width: 768px) and (max-width: 992px) {
  .layoutBox {
    -moz-column-count: 2;
    -webkit-column-count: 2;
    column-count: 2;
  }
}
@media only screen and (max-width: 767px) {
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
</style>
