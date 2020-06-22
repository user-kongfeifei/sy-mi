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
  <van-row>
    <van-col>
      <img src="../assets/images/index-znbanner.jpg" alt="" class="index-znbanner">
    </van-col>
  </van-row>


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
          imgurl: require("../assets/images/index-zn1.png"),
          url: "https://s1.mi.com/m/app/hd/index.html?id=10289"
        },
        {
          imgurl: require("../assets/images/index-zn2.jpg"),
          url: "https://m.mi.com/crowdfunding/home"
        },
        {
          imgurl: require("../assets/images/index-zn3.jpg"),
          url: "https://s1.mi.com/m/app/hd/index.html?id=10291"
        },
        {
          imgurl: require("../assets/images/index-zn4.jpg"),
          url: "https://s1.mi.com/m/app/hd/index.html?id=10292"
        },
        {
          imgurl: require("../assets/images/index-zn5.jpg"),
          url: "https://s1.mi.com/m/app/hd/index.html?id=10293"
        },
        {
          imgurl: require("../assets/images/index-zn6.png"),
          url: "https://s1.mi.com/m/app/hd/index.html?id=10294"
        },
        {
          imgurl: require("../assets/images/index-zn7.png"),
          url: "https://s1.mi.com/m/app/hd/index.html?id=10295"
        },
        {
          imgurl: require("../assets/images/index-zn8.png"),
          url: "https://s1.mi.com/m/app/hd/index.html?id=10296"
        },
        {
          imgurl: require("../assets/images/index-zn9.png"),
          url: "https://s1.mi.com/m/app/hd/index.html?id=10297"
        },
        {
          imgurl: require("../assets/images/index-zn10.png"),
          url: "https://s1.mi.com/m/app/hd/index.html?id=10298"
        }
      ]
    };
  }
};
</script>

<style>
.index-znbanner{
  width: 100%;
}
</style>