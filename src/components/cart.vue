<template>
  <div id="cart">
    <!-- 顶部 -->
    <van-sticky>
      <div class="tz-top">
        <van-nav-bar title="购物车">
          <template #left>
            <van-icon name="arrow-left" color="#ccc" size="25" @click="myreturn" />
          </template>
          <template #right>
            <van-icon name="search" size="25" color="#ccc" />
          </template>
        </van-nav-bar>
      </div>
    </van-sticky>

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

      <div class="tz-noitems" v-show="cartlist.length==0">
        <a href="/">
          <span class="tz-empty">购物车还是空的</span>
          <em class="tz-gogo">去逛逛</em>
        </a>
      </div>

      <!-- 购物车的内容列表 -->
      <div class="tz-cartlist" v-for="(item,index) in cartlist" :key="index">
        <div class="tz-checkbox">
          <van-checkbox v-model="item.checked"  checked-color="#ff6700"></van-checkbox>
        </div>
        <div class="left">
          <img :src="item.img" />
        </div>
        <div class="right">
          <p>{{item.name}} {{item.version}} {{item.color}}</p>
          <p class="price">售价:{{item.price}}元</p>
          <p>
            <van-stepper v-model="item.count"/>
          </p>
        </div>
        <p>
          <van-icon name="delete" @click="tzDel(index)"/>
        </p>
      </div>


      <div class="tz-cartlist tz-cartlist-tip" v-show="cartlist.length>0">
        温馨提示：产品是否购买成功，以最终下单为准，请尽快结算
      </div>

      <div class="tz-top-img">
        <img src="../assets/cart-imgs/1.jpg" />
      </div>

      <!-- 产品列表 -->
      <div class="tz-product-wrap">
        <div
          class="tz-product"
          v-for="(item,index) in message"
          @click="myproduct(index)"
          :key="index"
        >
          <div class="img-wrap">
            <img :src="item.img" />
          </div>
          <p class="name">{{item.title}}</p>
          <p class="price">￥{{item.now_price}}</p>
        </div>
      </div>
    </div>

    <!-- 底部footer -->
    <foot_bar></foot_bar>
    <div class="tz-fill"></div>
    <!-- 去结算 -->
    <div class="tz-pay" v-show="cartlist.length>0">
      <div class="bottom-bar tz-pay2">
        <p class="p1">
          共{{goodsCount}}件 金额：
          <span>
            {{goodsSum}}
            <em>元</em>
          </span>
        </p>
        <p class="p2" @click="continueshop">继续购物</p>
        <p class="p3" @click="continuepay">去结算</p>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
import Foot_bar from "./Foot_bar";
export default {
  name: "cart",
  data() {
    return {
      // 存放接口数据
      message: [],
      // value1: this.$store.state.cartlist.count,
      // 复选框
      // checked: true,
    };
  },
  computed: {
    cartlist() {
      return this.$store.state.cartlist;
    },
    // 共几件商品
    goodsCount(){
      let sum =0
      for(let i=0;i<this.$store.state.cartlist.length;i++){
        if(this.$store.state.cartlist[i].checked){
          sum +=this.$store.state.cartlist[i].count;
        }
      }
      return sum;
    },
    // 总计金额
    goodsSum(){
      let sum2 =0
      for(let i=0;i<this.$store.state.cartlist.length;i++){
        if(this.$store.state.cartlist[i].checked){
          sum2 +=this.$store.state.cartlist[i].count*this.$store.state.cartlist[i].price;
        }
      }
      return sum2;
    }
  },
  components: {
    Foot_bar
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
      that.message.length = 4;
    };
  },
  mounted(){
    // 从缓存中读取
    if (localStorage.getItem("cartlist")) {
      this.$store.state.cartlist = JSON.parse(localStorage.getItem("cartlist"));
    }
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    },
    // 共享数据修改
    myproduct(index) {
      this.$store.commit("myproductStore", index);
      this.$router.push("product");
    },
    myreturn() {
      this.$router.go(-1);
    },
    // 删除
    tzDel(index){
      this.$store.commit("tzDelstore",index);
    },
    // 继续购物
    continueshop(){
      this.$router.push("category");
    },
    // 
    continuepay(){
      // this.$router.push("user");
      let count=0;
      for(let i =0;i<this.cartlist.length;i++){
        if(!this.cartlist[i].checked){
          count++;
        }
      }
      if(count == this.cartlist.length){
        // this.$toast.success('请勾选需要结算的商品');
        this.$dialog.alert({
          message: '请勾选需要结算的商品',
        });
      }
    }

  }
};
</script>

<style>
/* 修改需要结算的弹出框 */
.van-dialog{
  border-radius: 5px;
}
.van-dialog__message{
  color: #5f5f5f;
  font-size: 15px;
}
.van-button__text{
  color: #ff6700;
}
.van-overlay{
  background-color: rgba(27, 24, 24, 0.4);
  
}
/* 购物车的内容列表 */
.tz-cartlist {
  margin: 0 0 10px 0;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
}
.tz-cartlist .left {
  flex-shrink: 0;
  width: 100px;
  height: 100px;
  border: 1px solid rgb(233, 233, 233);
}
.tz-cartlist .left img {
  width: 100%;
}
.tz-checkbox {
  margin-right: 10px;
}
.tz-cartlist .right p {
  margin: 0 10px 5px 10px;
  font-size: 16px;
  color: #5c5c5c;
}
.tz-cartlist .right .price {
  font-size: 14px;
  color: #aaaaaa;
}
.van-icon-delete {
  color: #c9c9c9;
  font-size: 24px;
  position: relative;
  top: 32px;
}
/* 去结算 */
.tz-pay2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100000;
}
.tz-pay2 p {
  margin: 0;
  padding: 0;
  flex: 1;
  text-align: center;
  height: 54px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.tz-pay2 .p1 {
  background-color: white;
  color: #aaaaaa;
  font-size: 14px;
}
.tz-pay2 .p1 span {
  font-size: 22px;
  color: #ff6700;
  font-weight: bold;
}
.tz-pay2 .p1 span em {
  color: #aaaaaa;
  font-size: 14px;
  font-style: normal;
}
.tz-pay2 .p2 {
  background-color: rgb(244, 244, 244);
  color: #3f3f3f;
}
.tz-pay2 .p3 {
  background-color: #ff6700;
  color: white;
}
/* 底部填充的距离 */
.tz-fill {
  height: 54px;
  background: white;
}
.tz-cartlist-tip{
  font-size: 12px;
  color: #9b9b9b;
  padding-left: 20px;
}

#cart {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  height: 100%;
  background-color: rgb(242, 242, 242);
}
.img-wrap {
  height: 170px;
  background: rgb(245, 245, 245);
}
.img-wrap img {
  margin-top: 10px;
}
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
  margin: 0;
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
.tz-top {
  flex-shrink: 0;
}
.tz-container {
  flex-grow: 1;
  overflow: auto;
}
.tz-product {
  padding: 0 2px;
  width: 48%;
}
.tz-product img {
  width: 100%;
}
.tz-product p {
  margin: 5px 20px;
}
.tz-product-wrap {
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  flex-wrap: wrap;
  background-color: white;
}
.price {
  color: #ff6700;
}
</style>
