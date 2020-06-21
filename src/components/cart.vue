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

        <div class="tz-product" v-for="(item,index) in message" @click="myproduct(index)" :key="index">
          <div class="img-wrap">
            <img :src="item.img" />
          </div>
          <p class="name">{{item.title}}</p>
          <p class="price">{{item.now_price}}</p>
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
    return {
      // 存放接口数据
      message: []
    };
  },
  components: {
    foot_bar
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
      that.message.length=4;
    };
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    },
    myproduct(index) {
      this.$store.commit("myproductStore",index);
      this.$router.push("product");
    },
    myreturn() {
      this.$router.go(-1);
    }
  }
};
</script>

<style>
.img-wrap{
  height: 170px;
  background: rgb(245, 245, 245);
}
.img-wrap img{
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
  padding: 10px 20px;
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

#cart {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  height: 90%;
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
}
.price {
  color: #ff6700;
}
</style>
