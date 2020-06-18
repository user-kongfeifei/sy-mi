<template>
  <div id="product">
    <!-- 加入购物车 -->
    <div class="pro-join-cart">
      <div class="pro-icon-wrap">
        <div class="pro-iconfont-wrap">
          <van-icon name="wap-home-o" size="22" />
          <p>首页</p>
        </div>
        <div class="pro-iconfont-wrap">
          <van-icon name="service-o" size="22"  />
          <p>客服</p>
        </div>
        <div class="pro-iconfont-wrap" @click="mycart">
          <van-icon name="cart-o" size="22"  />
          <p>购物车</p>
        </div>
      </div>
      <p class="pro-cart-font">加入购物车</p>
    </div>
    <!-- 顶部悬浮 -->
    <div ref="container" style="height: 400px;">
      <van-sticky :container="container">
        <div class="pro-cover">
          <van-icon name="arrow-left" />
          kdkdkd
        </div>
      </van-sticky>
      <!-- 轮播图 -->
      <van-swipe @change="onChange" class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="../assets/cart-imgs/4.jpg" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/cart-imgs/5.jpg" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/cart-imgs/3.jpg" />
        </van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">{{ current + 1 }} / 3</div>
        </template>
      </van-swipe>
    </div>

    <!-- 产品价格+内容 -->
    <div class="pro-contant">
      <p class="price">￥4999</p>
      <p>
        <img src="../assets/cart-imgs/6.png" class="mi618" />
        <span class="pro-name">小米10 Pro</span>
      </p>
      <div class="tz-pro-des">
        <p class="pro-giving">「赠价值199元立式风冷无线充；信用卡分期享24期免息」</p>
        <p>① 骁龙865旗舰平台，双模5G，用久了也不卡</p>
        <p>② 向往的生活同款手机，1亿像素8K电影相机</p>
        <p>③ 对称式立体声，有声、有势，一听即知</p>
      </div>
    </div>
    
    <!-- 产品型号配置 -->
    <div class="pro-model-wrap">
      <div class="pro-model">
        <p>
          <img class="pro-cpu-img" src="../assets/cart-imgs/7.png" />
        </p>
        <p class="pro-cpu">cpu</p>
        <p class="pro-cpu-model">骁龙865</p>
      </div>

      <div class="pro-model">
        <p>
          <img class="pro-cpu-img" src="../assets/cart-imgs/8.png" />
        </p>
        <p class="pro-cpu">四摄像头</p>
        <p class="pro-cpu-model">10800万</p>
      </div>

      <div class="pro-model">
        <p>
          <img class="pro-cpu-img" src="../assets/cart-imgs/9.png" />
        </p>
        <p class="pro-cpu">超大屏</p>
        <p class="pro-cpu-model">6.67英寸</p>
      </div>

      <div class="pro-model">
        <p>
          <img class="pro-cpu-img" src="../assets/cart-imgs/10.png" />
        </p>
        <p class="pro-cpu">屏幕分辨率</p>
        <p class="pro-cpu-model">2340x1080</p>
      </div>

      <div class="pro-model">
        <p>
          <img class="pro-cpu-img" src="../assets/cart-imgs/11.png" />
        </p>
        <p class="pro-cpu">极速畅玩</p>
        <p class="pro-cpu-model">8GB</p>
      </div>
    </div>

    <!-- 产品详情介绍 -->
    <div class="pro-detail">
      <van-tabs v-model="active">
        <van-tab title="商品介绍">
          <img src="../assets/cart-imgs/pro1.jpg" />
          <img src="../assets/cart-imgs/pro2.jpg" />
          <img src="../assets/cart-imgs/pro3.jpg" />
          <img src="../assets/cart-imgs/pro4.jpg" />
          <img src="../assets/cart-imgs/pro5.jpg" />
          <img src="../assets/cart-imgs/pro6.jpg" />
          <img src="../assets/cart-imgs/pro7.png" />
        </van-tab>
        <van-tab title="规格参数">
          <img src="../assets/cart-imgs/mod1.jpg" />
          <img src="../assets/cart-imgs/mod2.jpg" />
          <img src="../assets/cart-imgs/mod3.jpg" />
          <img src="../assets/cart-imgs/mod4.jpeg" />
          <img src="../assets/cart-imgs/mod5.jpg" />
          <img src="../assets/cart-imgs/mod6.jpg" />
          <img src="../assets/cart-imgs/mod7.jpg" />
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      active: 2,
      container: null
    };
  },
  mounted() {
    this.container = this.$refs.container;
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    mycart(){
      this.$router.push("cart");
    }
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}
.van-swipe-item img {
  width: 100%;
}
.van-swipe-item {
  background-color: white;
  height: 400px;
  position: relative;
}
.custom-indicator {
  width: 40px;
  text-align: center;
  height: 20px;
  line-height: 20px;
  color: white;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 50px;
}
.pro-contant {
  padding: 10px 20px;
}
.pro-contant .price {
  color: #ff6700;
  font-size: 22px;
  font-weight: bold;
  padding-bottom: 5px;
}
.mi618 {
  width: 32px;
}
.pro-name {
  padding: 10px;
  color: black;
  font-weight: bold;
}
.tz-pro-des {
  font-size: 12px;
}
.tz-pro-des p {
  padding: 1px 0;
}
.pro-giving {
  margin: 5px 0;
}
.pro-cpu-img {
  width: 25px;
}
.pro-model-wrap {
  margin: 10px 0;
  padding: 10px;
  font-size: 12px;
  display: flex;
  border-top: 1px solid rgb(221, 221, 221);
  overflow: scroll;
}
.pro-model {
  text-align: center;
  padding: 0 20px;
  flex-shrink: 0;
}
.van-tab__pane img {
  width: 100%;
  margin-bottom: -10px;
}
.pro-cover{
  position: absolute;
  z-index: 200;
}
.pro-join-cart{
  width: 95%;
  margin: 0 auto;
  height: 50px;
  position: fixed;
  background-color: white;
  bottom: 1%;
  left: 2.5%;
  z-index: 400;
  border-radius: 10px;
  box-shadow: 1px 1px 10px 8px rgba(49, 49, 49, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.pro-cart-font{
  background-color: #ff6700;
  color: white;
  height: 30px;
  line-height: 30px;
  width: 120px;
  text-align: center;
  border-radius: 50px;
  font-size: 14px;
  margin-right: 10px;
}
.pro-icon-wrap{
  display: flex;
}
.pro-iconfont-wrap{
  padding: 0 10px;
  color: rgb(107, 107, 107);
  font-size: 12px;
  text-align: center;
}
</style>