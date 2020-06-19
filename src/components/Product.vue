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
      <van-sku
        v-model="show"
        :sku="sku"
        :goods="goods"
        :goods-id="goodsId"
        :quota="quota"
        :quota-used="quotaUsed"
        :hide-stock="sku.hide_stock"
        :message-config="messageConfig"
        @buy-clicked="onBuyClicked"
        @add-cart="onAddCartClicked"
      />
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
        @change="onChange"
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
      // 加入购物车的弹出窗口
      show: false,
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: "颜色", // skuKeyName：规格类目名称
            v: [
              {
                id: "30349", // skuValueId：规格值 id
                name: "星空蓝", // skuValueName：规格值名称
                previewImgUrl: "https://img.yzcdn.cn/1p.jpg" // 用于预览显示的规格类目图片
              },
              {
                id: "1215",
                name: "珍珠白",
                previewImgUrl: "https://img.yzcdn.cn/2p.jpg"
              }
            ],
            k_s: "s1" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          }
        ],
        
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: "1215", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "1193", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          }
        ],
        price: "1.00", // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        messages: [
          {
            // 商品留言
            datetime: "0", // 留言类型为 time 时，是否含日期。'1' 表示包含
            multiple: "0", // 留言类型为 text 时，是否多行文本。'1' 表示多行
            name: "留言", // 留言名称
            type: "text", // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
            required: "1", // 是否必填 '1' 表示必填
            placeholder: "" // 可选值，占位文本
          }
        ],
        hide_stock: true // 是否隐藏剩余库存
      },
      goods: {
        // 默认商品 sku 缩略图
        picture: "https://img.yzcdn.cn/1.jpg"
      },
      messageConfig: {
        // 图片上传回调，需要返回一个promise，promise正确执行的结果需要是一个图片url
        uploadImg: () => {
          return new Promise(resolve => {
            setTimeout(
              () =>
                resolve(
                  "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581493329.10251213.jpg"
                ),
              1000
            );
          });
        },
        // 最大上传体积 (MB)
        uploadMaxSize: 3,
        // placeholder 配置
        placeholderMap: {
          text: "xxx",
          tel: "xxx"
        },
        // 初始留言信息
        // 键：留言 name
        // 值：留言内容
        initialMessages: {
          留言: "留言信息"
        }
      }
    };
  },
  computed: {
    index() {
      return this.$store.state.index;
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
    };
  },
  mounted() {
    this.container = this.$refs.container;
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    mycart() {
      this.$router.push("cart");
    },
    // 加入购物车的点击事件
    addCart(){
      this.show = true;

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