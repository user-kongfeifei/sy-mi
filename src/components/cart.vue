<template>
  <div id="cart">
    <!--  -->
    <div class="tz-top">
      <van-nav-bar title="购物车">
        <template #left>
          <van-icon name="arrow-left" color="#ccc" size="25" />
        </template>
        <template #right>
          <van-icon name="search" size="25" color="#ccc" />
        </template>
      </van-nav-bar>
    </div>

    <div class="tz-container">
      <div class="tz-nologin" v-show="true">
        <p>登录后享受更多优惠</p>
        <p>
          <a href="#" class="tz-login-in">
            去登录
            <van-icon name="arrow" />
          </a>
        </p>
      </div>

      <div class="tz-noitems" v-show="true">
        <a href="/">
          <span class="tz-empty">购物车还是空的</span>
          <em class="tz-gogo">去逛逛</em>
        </a>
      </div>

      <div class="tz-top-img">
        <img src="../assets/cart-imgs/1.jpg" />
      </div>

      <div class="tz-product-wrap">
        <div class="tz-product">
          <img src="../assets/cart-imgs/2.jpg" alt />
          <p class="name">小米CC9</p>
          <p class="price">￥2599</p>
        </div>

                <div class="tz-product">
          <img src="../assets/cart-imgs/2.jpg" alt />
          <p class="name">小米CC9</p>
          <p class="price">￥2599</p>
        </div>

                <div class="tz-product">
          <img src="../assets/cart-imgs/2.jpg" alt />
          <p class="name">小米CC9</p>
          <p class="price">￥2599</p>
        </div>
                <div class="tz-product">
          <img src="../assets/cart-imgs/2.jpg" alt />
          <p class="name">小米CC9</p>
          <p class="price">￥2599</p>
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
  name: "cart",
  data() {
    return {};
  },
  components: {
    foot_bar
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    }
  }
};
</script>

<style>
.van-nav-bar {
  background-color: #f2f2f2;
}
.van-nav-bar__title {
  color: rgb(116, 116, 116);
}
.tz-top-img img {
  width: 100%;
}
.tz-nologin {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  background-color: rgb(255, 255, 255);
}
.tz-noitems {
  padding: 20px 0;
  background-color: rgb(238, 238, 238);
  text-align: center;
}

.tz-login-in {
  font-size: 14px;
  color: rgb(126, 126, 126);
}
.tz-empty {
  font-size: 14px;
  color: rgb(126, 126, 126);
}
.tz-gogo {
  display: inline-block;
  font-style: normal;
  color: rgb(41, 41, 41);
  border: 1px solid rgb(214, 214, 214);
  font-size: 14px;
  padding: 5px 10px;
  margin-left: 5px;
}
html,
body,
#cart {
  /* height: 100%; */
  height: 600px;
  overflow: hidden;
}
#cart {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.tz-top {
  flex-shrink: 0;
}
.tz-container {
  flex-grow: 1;
  overflow: auto;
}
.tz-product{
  margin: 0 2px;
}
.tz-product img {
  width: 180px;
}
.tz-product p{
  margin: 5px 20px;
}
.tz-product-wrap {
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
}
.price{
  color: #ff6700;
}
</style>
