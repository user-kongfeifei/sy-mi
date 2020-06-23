
<template>
  <!-- 首页推荐列表 -->
  <div class="current-good">
    <!-- 轮播 -->
    <van-swipe class="my-swipe kff-swiper-container" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in imgObj" :key="index">
        <img :src="item" />
      </van-swipe-item>
    </van-swipe>

    <!-- 二排5列 -->
    <van-grid :column-num="5" :border="false" :gutter="0" class="kff-cells_auto_fill">
      <van-grid-item v-for="(item,index) in good_icon" :key="index" :gutter="0">
        <a :href="item.url">
          <img :src="item.imgurl" class="cells_auto_fill" />
        </a>
      </van-grid-item>
    </van-grid>

    <!--中间横图-->
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

    <!--图片展示列表-->
    <div class="index-imgList">
      <div
        class="index-imglist-col"
        v-for="(item,index) in indexList"
        :key="index"
        @click="myproduct(index)"
      >
        <img :src="item.img" alt />
        <div class="info bgw align-center">
          <div class="name">{{item.title}}</div>
          <div class="brief">{{item.subtitle}}</div>
          <div class="price">
            {{item.des_price}}
            <span>起</span>
          </div>
          <div class="buybtn">立即购买</div>
        </div>
      </div>
      <div class="current-good">
        <a href="javascript:void(0)">更多小米手机产品></a>
      </div>
      <div class="ui-line"></div>

      <van-row>
        <van-col class="kff-swiper-container">
          <img src="../assets/images/index-mi.jpg" alt />
        </van-col>
      </van-row>

      <div
        class="index-imglist-col"
        v-for="(item,index) in indexList"
        :key="index+item"
        @click="myproduct(index)"
      >
        <img :src="item.img" alt />
        <div class="info bgw align-center">
          <div class="name">{{item.title}}</div>
          <div class="brief">{{item.subtitle}}</div>
          <div class="price">
            {{item.des_price}}
            <span>起</span>
          </div>
          <div class="buybtn">立即购买</div>
        </div>
      </div>
    </div>

    <!--小米电视-->
  </div>
</template>
<script>
export default {
  name: "current-good",
  data() {
    return {
      indexList: [],
      imgObj: [
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b702ae58d580077790fd21932d664f18.jpg?thumb=1&w=720&h=360",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/39f81c39ff29edcf58b1a38a11dbfd96.jpg?thumb=1&w=720&h=360",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bd7349fbb622ef89d3837327be4b3682.jpg?thumb=1&w=720&h=360"
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
          url: "https://s1.mi.com/m/app/hd/index.html?id=15325"
        },
        {
          imgurl: require("../assets/images/index-icon4.png"),
          url: "https://m.mi.com/recycling/index?headless=1&needValidHost=false"
        },
        {
          imgurl: require("../assets/images/index-icon5.png"),
          url: "https://s1.mi.com/m/app/hd/index.html?id=11366"
        },
        {
          imgurl: require("../assets/images/index-icon6.png"),
          url: "https://s1.mi.com/m/app/hd/index.html?id=12965"
        },
        {
          imgurl: require("../assets/images/index-icon7.png"),
          url: "https://s1.mi.com/m/app/hd/index.html?id=11608"
        },
        {
          imgurl: require("../assets/images/index-icon8.png"),
          url: "https://s1.mi.com/m/app/hd/index.html?id=11073"
        },
        {
          imgurl: require("../assets/images/index-icon9.png"),
          url: "https://s1.mi.com/m/app/hd/index.html?id=14457"
        },
        {
          imgurl: require("../assets/images/index-icon10.png"),
          url: "https://service.10046.mi.com/channel/"
        }
      ]
    };
  },
  methods: {
    myproduct(index) {
      this.$store.commit("myproductStore", index);
      this.$router.push("product");
    }
  },
  created() {
    let that = this;
    let url =
      "https://www.fastmock.site/mock/8a3644398c7f4a81add7225f4ca77420/mi/product";
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onload = function() {
      that.indexList = JSON.parse(xhr.response).data.list;
      that.indexList.length = 4;
    };
  }
};
</script>
<style>
.ti {
  width: 100%;
  text-align: center;
}
.ui-line {
  height: 0.65rem;
  background: #f5f5f5;
  overflow: hidden;
  clear: both;
}
.current-good {
  width: 100%;
  height: 40px;
  text-align: center;
}
.current-good a {
  line-height: 50px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
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
.index-imglist-col .price span {
  font-size: 0.6rem;
}

.index-imglist-col .buybtn {
  width: 7rem;
  background: #ea625b;
  border-radius: 0.2rem;
  text-align: center;
  color: #fff;
  font-size: 0.65rem;
  padding: 0.5rem 0;
  font-weight: 700;
  margin: 0 auto;
}
</style>