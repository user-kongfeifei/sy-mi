<template>
  <!-- 二排5列 -->
  <div>
    <!-- 轮播 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in imgObj" :key="index">
        <img :src="item" />
      </van-swipe-item>
    </van-swipe>
    <van-grid :column-num="5">
      <van-grid-item v-for="value in 10" :key="value" icon="photo-o" text="文字" />
    </van-grid>



    <!-- 底部footer -->
    <foot_bar></foot_bar>
  </div>
</template>

<script>
import { Toast } from 'vant';
import foot_bar from "./foot_bar";
export default {
  name: "home",
  data() {
    return {
      imgObj: [
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97119026c151c2382a0d21f5dd63a3c6.jpg?thumb=1&w=720&h=360",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97119026c151c2382a0d21f5dd63a3c6.jpg?thumb=1&w=720&h=360"
      ]
    };
  },
  components: {
    foot_bar
  }
};
</script>

<style >
.my-swipe {
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 100px;
  text-align: center;
  background-color: #39a9ed;
}
</style>