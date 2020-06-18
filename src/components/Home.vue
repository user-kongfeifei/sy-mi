<template>
  <div class="mi-container">
    <!-- 头部 -->
    <div class="mi-header">
      <van-row>
        <van-col>
          <img class="logo" src="../assets/images/logo.png" alt />
        </van-col>
        <van-col>
          <van-search class="index_header" background="#f2f2f2" v-model="value" placeholder="请输入搜索关键词" />
        </van-col>
        <van-col></van-col>
      </van-row>
    </div>
    <!-- 轮播 -->
    <van-swipe class="my-swipe kff-swiper-container" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in imgObj" :key="index">
        <img :src="item" />
      </van-swipe-item>
    </van-swipe>
    <!-- 二排5列 -->
    <van-grid :column-num="5" :border="false" :gutter="0" class="kff-cells_auto_fill">
      <van-grid-item v-for="(item,index) in good_icon" :key="index" :gutter="0">
        <img :src="item.imgurl" class="cells_auto_fill" />
      </van-grid-item>
    </van-grid>
    <!-- 底部footer -->
    <foot_bar></foot_bar>
  </div>
</template>
<script>
import { Toast } from "vant";
import foot_bar from "./foot_bar";
export default {
  name: "home",
  data() {
    return {
      value: "",
      imgObj: [
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b702ae58d580077790fd21932d664f18.jpg?thumb=1&w=720&h=360",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/39f81c39ff29edcf58b1a38a11dbfd96.jpg?thumb=1&w=720&h=360",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97119026c151c2382a0d21f5dd63a3c6.jpg?thumb=1&w=720&h=360"
      ],
      good_icon: [
        {
          imgurl: require("../assets/images/index-icon1.png"),
          url: ""
        },
        {
          imgurl: require("../assets/images/index-icon2.png")
        },
        {
          imgurl: require("../assets/images/index-icon3.png")
        },
        {
          imgurl: require("../assets/images/index-icon4.png")
        },
        {
          imgurl: require("../assets/images/index-icon5.png")
        },
        {
          imgurl: require("../assets/images/index-icon6.png")
        },
        {
          imgurl: require("../assets/images/index-icon7.png")
        },
        {
          imgurl: require("../assets/images/index-icon8.png")
        },
        {
          imgurl: require("../assets/images/index-icon9.png")
        },
        {
          imgurl: require("../assets/images/index-icon10.png")
        }
      ]
    };
  },
  components: {
    foot_bar
  }
};
</script>
    
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body,
html,
#app {
  height: 100%;
  box-shadow: -15px 0 15px 0 #f2f2f2;
  z-index: 99;
}
.mi-header {
  padding: 0.8rem 0;
  background: #f2f2f2;
  color: #666;
}
.logo {
  width: 1.5rem;
  display: inline-block;
  margin-left: 16px;
}
.index_header {
  align-items: center;
  border: 1px solid #e5e5e5;
  text-align: left;
  width: 100%;
  color: rgba(0, 0, 0, 0.3);
  background-color: #fff;
  border-radius: 0.04rem;
}

.kff-swiper-container {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.kff-swiper-container img {
  display: block;
  width: 100%;
  height: auto;
}
.cells_auto_fill {
  width: 100%;
  display: block;
}
.van-grid-item {
  height: 100%;
}

.kff-cells_auto_fill .van-grid-item__content {
  padding: 0;
}
.van-search{
    padding: 0;
}
</style>