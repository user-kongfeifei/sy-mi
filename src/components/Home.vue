<template>
  <div class="mi-container">
    <!-- 头部 -->
    <van-sticky>
      <div class="mi-header">
        <van-row>
          <van-col span="3">
            <img class="logo" src="../assets/images/logo.png" alt />
          </van-col>
          <van-col span="18">
            <van-search
              class="index_header"
              background="#ffffff"
              v-model="value"
              placeholder="搜索商品名称"
            />
          </van-col>
          <van-col span="3">
            <img src="../assets/images/index-header-icon.png" alt class="login" />
          </van-col>
        </van-row>
      </div>
      <!-- 首页标签页滚动 -->
      <van-tabs>
        <van-tab
          v-for="(item,index) in tablist" :title="item" :key="index" v-model="active"  background="#f2f2f2">内容 {{ item }}
        </van-tab>
      </van-tabs>
    </van-sticky>
    <!-- 轮播 -->
    <van-swipe class="my-swipe kff-swiper-container" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in imgObj" :key="index">
        <img :src="item" />
      </van-swipe-item>
    </van-swipe>
    <!-- 二排5列 -->
    <van-grid :column-num="5" :border="false" :gutter="0" class="kff-cells_auto_fill">
      <van-grid-item v-for="(item,index) in good_icon" :key="index" :gutter="0" >
        <a :href="item.url"><img :src="item.imgurl" class="cells_auto_fill"  /></a>
      </van-grid-item>
    </van-grid>
    <!--  -->
    <van-row>
      <van-col class="kff-swiper-container">
        <img src="../assets/images/index-banner1.jpg" alt />
      </van-col>
    </van-row>
    <van-row>
      <van-col class="kff-swiper-container">
        <img src="../assets/images/index-banner2.jpg" alt />
      </van-col>
    </van-row>
    <div class="index-imgList">
      <div class="index-imglist-col">
        <img src="../assets/images/index-col-1.jpg" alt />
        <div class="info bgw align-center">
          <div class="name">小米10 Pro</div>
          <div class="brief">骁龙865 / 50倍变焦</div>
          <div class="price">
            ￥4999
            <span>起</span>
          </div>
          <div class="buybtn">立即购买</div>
        </div>
      </div>

           <div class="index-imglist-col">
        <img src="../assets/images/index-col-1.jpg" alt />
        <div class="info bgw align-center">
          <div class="name">小米10 Pro</div>
          <div class="brief">骁龙865 / 50倍变焦</div>
          <div class="price">
            ￥4999
            <span>起</span>
          </div>
          <div class="buybtn">立即购买</div>
        </div>
      </div>

       <div class="index-imglist-col">
        <img src="../assets/images/index-col-1.jpg" alt />
        <div class="info bgw align-center">
          <div class="name">小米10 Pro</div>
          <div class="brief">骁龙865 / 50倍变焦</div>
          <div class="price">
            ￥4999
            <span>起</span>
          </div>
          <div class="buybtn">立即购买</div>
        </div>
      </div>


         <div class="index-imglist-col">
        <img src="../assets/images/index-col-1.jpg" alt />
        <div class="info bgw align-center">
          <div class="name">小米10 Pro</div>
          <div class="brief">骁龙865 / 50倍变焦</div>
          <div class="price">
            ￥4999
            <span>起</span>
          </div>
          <div class="buybtn">立即购买</div>
        </div>
      </div>

         <div class="index-imglist-col">
        <img src="../assets/images/index-col-1.jpg" alt />
        <div class="info bgw align-center">
          <div class="name">小米10 Pro</div>
          <div class="brief">骁龙865 / 50倍变焦</div>
          <div class="price">
            ￥4999
            <span>起</span>
          </div>
          <div class="buybtn">立即购买</div>
        </div>
      </div>
         <div class="index-imglist-col">
        <img src="../assets/images/index-col-1.jpg" alt />
        <div class="info bgw align-center">
          <div class="name">小米10 Pro</div>
          <div class="brief">骁龙865 / 50倍变焦</div>
          <div class="price">
            ￥4999
            <span>起</span>
          </div>
          <div class="buybtn">立即购买</div>
        </div>
      </div>
    </div>

 
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
      indexList:[],
      value: "",
      active: "",
      tablist: ["推荐", "手机", "智能", "电视", "笔记本", "家电", "生活周边"],
      imgObj: [
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b702ae58d580077790fd21932d664f18.jpg?thumb=1&w=720&h=360",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/39f81c39ff29edcf58b1a38a11dbfd96.jpg?thumb=1&w=720&h=360",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97119026c151c2382a0d21f5dd63a3c6.jpg?thumb=1&w=720&h=360"
      ],
      good_icon: [
        {
          imgurl: require("../assets/images/index-icon1.png"),
          url: "https://m.mi.com/seckill"
        },
        {
          imgurl: require("../assets/images/index-icon2.png"),
          url: "https://m.mi.com/crowdfunding/home"
        },
        {
          imgurl: require("../assets/images/index-icon3.png"),
          url:"https://s1.mi.com/m/app/hd/index.html?id=15325"
        },
        {
          imgurl: require("../assets/images/index-icon4.png"),
          url:"https://m.mi.com/recycling/index?headless=1&needValidHost=false"
        },
        {
          imgurl: require("../assets/images/index-icon5.png"),
          url:"https://s1.mi.com/m/app/hd/index.html?id=11366"
        },
        {
          imgurl: require("../assets/images/index-icon6.png"),
          url:"https://s1.mi.com/m/app/hd/index.html?id=12965"
        },
        {
          imgurl: require("../assets/images/index-icon7.png"),
          url:"https://s1.mi.com/m/app/hd/index.html?id=11608"
        },
        {
          imgurl: require("../assets/images/index-icon8.png"),
          url:"https://s1.mi.com/m/app/hd/index.html?id=11073"
        },
        {
          imgurl: require("../assets/images/index-icon9.png"),
          url:"https://s1.mi.com/m/app/hd/index.html?id=14457"
        },
        {
          imgurl: require("../assets/images/index-icon10.png"),
          url:"https://service.10046.mi.com/channel/"
        }
      ]
    };
  },
  created() {
     let that = this;
    let url =
      "https://www.fastmock.site/mock/8a3644398c7f4a81add7225f4ca77420/mi/product";
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onload = function() {
    
    };
  },
  components: {
    foot_bar
  }
};
</script>
    
<style>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
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
.van-search__content {
  background: #fff;
}
.mi-header {
  padding: 0.4rem 0;
  background: #f2f2f2;
  color: #666;
}
.logo {
  width: 1.5rem;
  display: inline-block;
  margin-left: 16px;
  margin-top: 10px;
  margin-right: 10px;
}
.login {
  width: 1.5rem;
  display: inline-block;
  margin-left: 5px;
  margin-top: 5px;
}
.index_header {
  align-items: center;
  border: 1px solid #e5e5e5;
  text-align: left;
  width: 100%;
  flex-grow: 1;
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
.van-search {
  padding: 0;
}

/* 排列 */
.index-imgList {
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    margin-bottom: 50px;
}
.index-imglist-col {
  width: 48%;
  margin: 3px;
}
.index-imglist-col img {
  width: 100%;
}
.align-center {
  -webkit-box-align: center;
  align-items: center;
}
.index-imglist-col .buybtn {
  width: 2rem;
  background: #ea625b;
  border-radius: 0.05rem;
  text-align: center;
  color: #fff;
  font-size: 0.24rem;
  padding: 0.16rem 0;
  font-weight: 700;
}

.index-imglist-col .info {
  padding: 0.2rem 0.27rem;
}

.index-imglist-col .bgw {
  background-color: #fff;
}
.index-imglist-col .name {
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
  font-size: 0.9rem;
  text-overflow: ellipsis;
}
.index-imglist-col .brief {
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
  font-size: 0.8rem;
  text-overflow: ellipsis;
  color: rgba(0, 0, 0, 0.54);
}
.index-imglist-col .price {
  font-size: 1rem;
  color: #ea625b;
  text-align: center;
  line-height: 1.5em;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
  font-weight: 500;
}
.index-imglist-col .price  span{
  font-size: 0.6rem;
}

.index-imglist-col .buybtn{
    width: 7rem;
    background: #ea625b;
    border-radius: .2rem;
    text-align: center;
    color: #fff;
    font-size: .65rem;
    padding: .5rem 0;
    font-weight: 700;
    margin: 0 auto;
    
}
</style>