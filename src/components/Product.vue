<template>
  <div id="product" @scroll="myscroll">
    <!-- 加入购物车 -->
    <div class="pro-join-cart">
      <div class="pro-icon-wrap">
        <div class="pro-iconfont-wrap" @click="myindex">
          <van-icon name="wap-home-o" size="22" />
          <p>首页</p>
        </div>
        <div class="pro-iconfont-wrap">
          <van-icon name="service-o" size="22" />
          <p>客服</p>
        </div>
        <div class="pro-iconfont-wrap" @click="mycart">
          <van-icon name="cart-o" size="22" />
          <span class="floatnum" v-show="goodsCount!=0">{{goodsCount}}</span>
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
            <p class="price">￥{{message[index].now_price}}</p>
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
    <div class="tz-topfloat-wrap" :style="mystyle"></div>
    <div class="tz-topfloat">
      <div class="tz-floatleft" :style="mystyle2" @click="myclickreturn">
        <van-icon name="arrow-left" size="22" />
      </div>
      <div class="tz-floatmiddle" v-show="mytopshow">
        <p :class="{changecolor2:num3==1}" @click="tzselect3(1)">商品</p>
        <p :class="{changecolor2:num3==2}" @click="tzselect3(2)">评价</p>
        <p :class="{changecolor2:num3==3}" @click="tzselect3(3)">详情</p>
      </div>
      <div class="tz-floatright" :style="mystyle2">
        <van-icon name="like-o" size="22" />
      </div>
    </div>

    <!-- 轮播图 -->
    <!-- :autoplay="3000" -->
    <van-swipe
      @change="onChange1"
      class="my-swipe"
      indicator-color="white"
      v-if="message.length>0"
      id="top"
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

    <!-- 产品价格+内容 -->
    <div class="pro-contant" v-if="message.length>0">
      <p class="price">￥{{message[index].now_price}}</p>
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

    <!-- 评论 -->
    <div class="tz-comment" id="point">
      <div class="pro-comment-wrap">
        <div class="top">
          <div class="left">
            <div class="imgleft-wrap">
              <img src="../assets/cart-imgs/12.jpg">
            </div>
            <div>
              <p>独步天下</p>
              <p class="time">2020-06-22</p>
            </div>
          </div>
          <div class="right">
            <van-icon name="good-job-o" size="20" color="rgb(139, 139, 139)"/>
          </div>
        </div>
        <div class="content">
          <p>手机跑分排名第一， 屏幕素质和音质效果都很好， 刷新率高看着就是舒服， 线...</p>
        </div>
      </div>

      <div class="pro-comment-wrap">
        <div class="top">
          <div class="left">
            <div class="imgleft-wrap">
              <img src="../assets/cart-imgs/2.jpg">
            </div>
            <div>
              <p>独步天下</p>
              <p class="time">2020-06-22</p>
            </div>
          </div>
          <div class="right">
            <van-icon name="good-job-o" size="20" color="rgb(139, 139, 139)"/>
          </div>
        </div>
        <div class="content">
          <p>手机跑分排名第一， 屏幕素质和音质效果都很好， 刷新率高看着就是舒服， 线...</p>
        </div>
      </div>
    </div>

    <div class="tz-more">更多评论<van-icon name="play" /></div>

    <!-- 产品详情介绍 -->
    <div class="pro-detail" id="details">
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
      name:"",
      price:"",
      checked:true,
      // 顶部透明度的变化
      mystyle:[],
      mytopshow:false,
      mystyle2:[],
      num3:1,
    };
  },
  computed: {
    index() {
      return this.$store.state.index;
    },
    cartlist(){
      return this.$store.state.cartlist;
    },
    goodsCount(){
      let sum =0
      for(let i=0;i<this.$store.state.cartlist.length;i++){
        if(this.$store.state.cartlist[i].checked){
          sum +=this.$store.state.cartlist[i].count;
        }
      }
      return sum;
    },
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
    myindex(){
      this.$router.push("/");
    },
    // 返回
    myclickreturn(){
      this.$router.go(-1);
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
    },
    // 实际加入购物车
    addCart2(){
      this.$toast.success('成功加入购物车！');

      this.img = this.message[this.index].detail.cart_img;
      this.name =this.message[this.index].title;
      this.price =this.message[this.index].now_price;

      this.$store.commit("addCart2store",{
        img:this.img,
        name:this.name,
        version:this.version,
        color:this.color,
        price:this.price,
        value:this.value,
        checked:this.checked
      });
    },
    // 滚轮事件
    myscroll(event){
      let obj = {
        opacity:0
      }
      this.mystyle.push(obj);
      // 设置商品,评价,详情的显示
      if(event.target.scrollTop>100){
        console.log(event)
        this.mytopshow=true;
        // push样式
        this.mystyle2.push({
          backgroundColor:"rgba(39, 39, 39, 0)",
          color:"black"
        });
      }else{
        this.mytopshow=false;
        // push样式
        this.mystyle2.push({
          backgroundColor:"rgba(39, 39, 39, 0.4)",
          color:"white"
        });
      }
      // 设置商品,评价,详情的位置显示
      if(event.target.scrollTop>760){
        this.num3 =3
      }else if(event.target.scrollTop<560){
        this.num3 =1
      }else{
        this.num3 =2
      }
      // 设置渐变的透明度
      if(event.target.scrollTop>300){
        obj.opacity=1;
      }else if(event.target.scrollTop<2){
        obj.opacity=0;
      }else{
        obj.opacity +=0.5
      }
    },

    tzselect3(num){
      this.num3 = num;
      if(num==1){
        // location.href="#details"
        document.querySelector("#top").scrollIntoView(true);
      }
      if(num==2){
        document.querySelector("#point").scrollIntoView(true);
      }
      if(num==3){
        document.querySelector("#details").scrollIntoView(true);
      }
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
#product{
  height: 812px;
  overflow: scroll;
}
/* 购物车,商品数量 */
.floatnum{
  display: inline-block;
  width: 16px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  background-color: #ed4d41;
  color: white;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 120px;
}
/* 评价 */
.tz-comment{
  display: flex;
  overflow: auto;
  margin: 10px;
}
.pro-comment-wrap{
  flex-shrink: 0;
  width: 350px;
  background-color: rgb(250, 250, 250);
  border-radius: 10px;
  font-size: 14px;
  padding: 10px;
  margin-right: 10px;
}
.imgleft-wrap{
  width: 35px;
  height: 35px;
  background-color: rgb(139, 139, 139);
  border-radius: 50%;
  margin-right: 10px;
}
.imgleft-wrap img{
  width: 100%;
}
.pro-comment-wrap .top{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.pro-comment-wrap .top .left{
  display: flex;
}
.time{
  color: #a8a8a8;
}
.tz-more{
  /* background-color: red; */
  text-align: center;
  padding: 20px;
  color: rgb(0, 0, 83);
}



/* 顶部悬浮 */
.tz-topfloat-wrap{
  background-color: white;
  opacity: 0;
}
.tz-topfloat,.tz-topfloat-wrap{
  width: 100%;
  height: 44px;
  position: fixed;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}
.tz-floatleft,.tz-floatright{
  height: 30px;
  width: 30px;
  background-color: rgba(39, 39, 39, 0.3);
  border-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tz-floatmiddle{
  display: flex;
}
.tz-floatmiddle p{
  margin: 0 10px;
  font-size: 14px;
}
.changecolor2{
  border-bottom: 2px solid #ff6700;
  color: #ff6700;
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