<template>
  <div class="intelligent-good">
    <van-swipe class="my-swipe kff-swiper-container" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in imgObj" :key="index">
        <img :src="item" />
      </van-swipe-item>
    </van-swipe>

     <van-grid :column-num="5" :border="false" :gutter="0" class="kff-cells_auto_fill">
      <van-grid-item v-for="(item,index) in good_icon" :key="index" :gutter="0">
        <a :href="item.url">
          <img :src="item.imgurl" class="cells_auto_fill" />
        </a>
      </van-grid-item>
    </van-grid>



  </div>
</template>

<script>
export default {
  name: "intelligent-good",
  data() {
    return {
      imgObj: [
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0b2bb13c396cc6205dd91da3a91a275a.jpg?thumb=1&w=720&h=360",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/78d9c88ba057de8dfaf87bd77e60459e.jpg?thumb=1&w=720&h=360",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9c38e65ab342e58438c9248921539567.jpg?thumb=1&w=720&h=360",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/46fd162a201253acf373412201c5c1e8.jpg?thumb=1&w=720&h=360",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f6bf6ffec5d75d5194bedeb0cf356c21.jpg?thumb=1&w=720&h=360"
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
  }
};
</script>

<style>
</style>