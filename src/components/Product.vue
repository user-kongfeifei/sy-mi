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
          <van-icon name="service-o" size="22" />
          <p>客服</p>
        </div>
        <div class="pro-iconfont-wrap" @click="mycart">
          <van-icon name="cart-o" size="22" />
          <p>购物车</p>
        </div>
      </div>
      <p class="pro-cart-font" @click="addCart">加入购物车</p>
    </div>
    <!-- 加入购物车的弹出框 -->
    <div class="tz-popup">
      <van-popup
        v-model="show"
        closeable
        position="bottom"
        round
        :style="{ height: '77%' }"
        close-icon="cross"
        close-icon-position="top-right"
        :get-container="getContainer"
      >
        <div class="popup-top" v-if="message.length>0">
          <div class="left">
            <img :src="message[index].detail.cart_img" />
          </div>
          <div class="right">
            <p class="price">{{message[index].now_price}}</p>
            <p class="name">
              <span>{{message[index].title}} </span>
              <span>{{version}} </span>
              <span>{{color}} </span>
            </p>
          </div>
        </div>

        <div class="popup-wrap" v-if="message.length>0">
          <div class="popup-middle">
            <p class="tz-middle-word">版本</p>
            <p class="tz-middle-word2">
              <span :class="{changecolor:num==1}" @click="tzselect(1)">{{message[index].detail.version_1}}</span>
              <span :class="{changecolor:num==2}" @click="tzselect(2)">{{message[index].detail.version_2}}</span>
              <span :class="{changecolor:num==3}" @click="tzselect(3)">{{message[index].detail.version_3}}</span>
            </p>
          </div>
          <div class="popup-middle">
            <p class="tz-middle-word">颜色</p>
            <p class="tz-middle-word2">
              <span :class="{changecolor:num2==1}" @click="tzselect2(1)">{{message[index].detail.color_1}}</span>
              <span :class="{changecolor:num2==2}" @click="tzselect2(2)">{{message[index].detail.color_2}}</span>
            </p>
          </div>

          <div class="popup-middle-count popup-middle">
            <p class="tz-middle-word">购买数量</p>
            <p>
              <van-stepper v-model="value" @change="onChange"/>
            </p>
          </div>
          
        </div>
        <!-- 加入购物车 -->
        <div class="pro-join-cart" id="pro-join-cart2">
          <p class="pro-cart-font" id="pro-cart-font2" @click="addCart2">加入购物车</p>
        </div>
      </van-popup>
    </div>
    <!-- 顶部悬浮 -->
    <div ref="container" style="height: 400px;">
      <van-sticky :container="container">
        <div class="pro-cover">
          <van-icon name="arrow-left" />kdkdkd
        </div>
      </van-sticky>
      <!-- 轮播图 -->
      <van-swipe
        @change="onChange1"
        class="my-swipe"
        :autoplay="3000"
        indicator-color="white"
        v-if="message.length>0"
      >
        <van-swipe-item>
          <img :src="message[index].detail.img_1" />
        </van-swipe-item>
        <van-swipe-item>
          <img :src="message[index].detail.img_2" />
        </van-swipe-item>
        <van-swipe-item>
          <img :src="message[index].detail.img_3" />
        </van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">{{ current + 1 }} / 3</div>
        </template>
      </van-swipe>
    </div>

    <!-- 产品价格+内容 -->
    <div class="pro-contant" v-if="message.length>0">
      <p class="price">{{message[index].now_price}}</p>
      <p>
        <img src="../assets/cart-imgs/6.png" class="mi618" />
        <span class="pro-name">{{message[index].title}}</span>
      </p>
      <div class="tz-pro-des">
        <p class="pro-giving">{{message[index].detail.product_des_1}}</p>
        <p>{{message[index].detail.product_des_2}}</p>
        <p>{{message[index].detail.product_des_3}}</p>
        <p>{{message[index].detail.product_des_4}}</p>
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

    <div class="white-space"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      active: 2,
      container: null,
      // 存放接口数据
      message: [],
      // 加入购物车弹框是否显示
      show: false,
      // 步数器
      value: 1,
      // 选择型号和颜色
      num:1,
      num2:1,
      version:"",
      color:"",
      img:"",
      name:""
    };
  },
  computed: {
    index() {
      return this.$store.state.index;
    },
    cartlist(){
      return this.$store.state.cartlist;
    }
  },
  created() {
    let xhr = new XMLHttpRequest();
    let that = this;
    let url =
      "https://www.fastmock.site/mock/8a3644398c7f4a81add7225f4ca77420/mi/product";
    xhr.open("get", url);
    xhr.send();

    xhr.onload = function() {
      that.message = JSON.parse(xhr.response).data.list;
      that.version = that.message[that.index].detail.version_1;
      that.color = that.message[that.index].detail.color_1;
      that.img = that.message[that.index].detail.cart_img;
      that.name =that.message[that.index].title;
    };
  },
  mounted() {
    this.container = this.$refs.container;
  },
  methods: {
    onChange1(index) {
      this.current = index;
    },
    mycart() {
      this.$router.push("cart");
    },

    // 加入购物车的点击事件
    addCart() {
      this.show = true;
    },
    showPopup() {
      this.show = true;
    },
    getContainer() {
      return document.querySelector(".my-container");
    },
    // 获取型号和颜色,共享数据修改
    tzselect(num){
      this.num = num;
      if(num==1){
        this.version=this.message[this.index].detail.version_1;
      }
      if(num==2){
        this.version=this.message[this.index].detail.version_2;
      }
      if(num==3){
        this.version=this.message[this.index].detail.version_3;
      }
      
    },
    tzselect2(num2){
      this.num2 = num2;
      let d,e;
      if(num2==1){
        this.color=this.message[this.index].detail.color_1;
      }
      if(num2==2){
        this.color=this.message[this.index].detail.color_2;
      }
    },
    onChange(value){
      this.value =value
      console.log(this.value);
    },
    // 实际加入购物车
    addCart2(){
      this.$store.commit("addCart2store",{
        img:this.img,
        name:this.name,
        version:this.version,
        color:this.color,
        count:this.value,
      });
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
/* 加入购物车弹出框样式 */
.van-popup--bottom.van-popup--round {
  border-radius: 10px 10px 0 0;
}
.popup-top {
  margin: 40px 20px 10px 20px;
  display: flex;
}
.popup-top .left {
  width: 100px;
  height: 100px;
  border: 1px solid rgb(233, 233, 233);
}
.popup-top .left img {
  width: 100%;
}
.popup-top .right .price {
  font-size: 26px;
  font-weight: 500;
}
.popup-top .right .name {
  padding-top: 4px;
  font-size: 14px;
}
.popup-top .right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 10px;
}
.popup-wrap {
  overflow: scroll;
}
.popup-middle {
  margin: 0 20px;
  padding: 10px 0;
  border-bottom: 1px solid rgb(243, 243, 243);
  /* background-color: #ff6700; */
}
.tz-middle-word {
  font-size: 14px;
}
.tz-middle-word2 {
  font-size: 12px;
}
.tz-middle-word2 span {
  display: inline-block;
  border: 1px solid rgb(233, 233, 233);
  margin: 10px 5px;
  padding: 10px 5px;
}
.tz-middle-word2 .changecolor{
  border: 1px solid #ff6700;
  color: #ff6700;
}
.popup-middle-count {
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#pro-join-cart2{
  box-shadow: none;
}
#pro-cart-font2{
  width: 100%;
}


.white-space {
  height: 100px;
  background-color: white;
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
.pro-cover {
  position: absolute;
  z-index: 200;
}
.pro-join-cart {
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
.pro-cart-font {
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
.pro-icon-wrap {
  display: flex;
}
.pro-iconfont-wrap {
  padding: 0 10px;
  color: rgb(107, 107, 107);
  font-size: 12px;
  text-align: center;
}
</style>