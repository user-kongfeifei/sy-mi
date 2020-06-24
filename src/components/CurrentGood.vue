
<template>
  <!-- 首页推荐列表 -->
  <div class="current-good">
    <!-- 轮播 -->
    <van-swipe class="my-swipe kff-swiper-container" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in imgObj" :key="index">
        <img :src="item" />
      </van-swipe-item>
    </van-swipe>

    <!-- 二排5列 -->
    <van-grid :column-num="5" :border="false" :gutter="0" class="kff-cells_auto_fill">
      <van-grid-item v-for="(item,index) in good_icon" :key="index" :gutter="0">
        <a :href="item.url">
          <img :src="item.imgurl" class="cells_auto_fill" />
        </a>
      </van-grid-item>
    </van-grid>

    <!--中间横图-->
    <van-row>
      <van-col class="kff-swiper-container">
        <img src="../assets/images/index-banner1.jpg" alt />
      </van-col>
    </van-row>
    <van-row>
      <van-col class="kff-swiper-container">
        <img src="../assets/images/index-banner2.jpg" alt />
      </van-col>
    </van-row>

    <!--图片展示列表-->
    <div class="index-imgList">
      <div
        class="index-imglist-col"
        v-for="(item,index) in indexList"
        :key="index"
        @click="myproduct(index)"
      >
        <img :src="item.img" alt />
        <div class="info bgw align-center">
          <div class="name">{{item.title}}</div>
          <div class="brief">{{item.subtitle}}</div>
          <div class="price">
            {{item.des_price}}
            <span>起</span>
          </div>
          <div class="buybtn">立即购买</div>
        </div>
      </div>
      <div class="current-goodss">
        <a href="javascript:void(0)">更多小米手机产品></a>
      </div>
      <div class="ui-line"></div>

      <van-row>
        <van-col class="kff-swiper-container">
          <img src="../assets/images/index-mi.jpg" alt />
        </van-col>
      </van-row>
      <div
        class="index-imglist-col"
        v-for="(item,index) in indexXiaomi"
        :key="index+item"
      >
        <img :src="item.img" alt />
        <div class="info bgw align-center">
          <div class="name">{{item.title}}</div>
          <div class="brief">{{item.subtitle}}</div>
          <div class="price">
            {{item.des_price}}
            <span>起</span>
          </div>
          <div class="buybtn">立即购买</div>
        </div>
      </div>
    <div class="ui-line"></div>

     <van-row>
        <van-col>
           <div class="current-goodss">
          <a href="#">更多小米手机产品></a>
            </div>
        </van-col>
      </van-row>

     
    </div>

    <!--小米电视-->
  </div>
</template>
<script>
export default {
  name: "current-good",
  data() {
    return {
      indexList: [],
      imgObj: [
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b702ae58d580077790fd21932d664f18.jpg?thumb=1&w=720&h=360",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/39f81c39ff29edcf58b1a38a11dbfd96.jpg?thumb=1&w=720&h=360",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bd7349fbb622ef89d3837327be4b3682.jpg?thumb=1&w=720&h=360"
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
      ],
      indexXiaomi: [
        {
          category_img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b54738f4dce4588f9bd29a5dadf76030.png?thumb=1&w=120&h=120",
          img:
            "https://i8.mifile.cn/v1/a1/82003442-c6b7-3258-cc7a-2a851216ce8a.webp",
          title: "小米电视4A 65英寸",
          subtitle: "4K HDR，人工智能语音系统",
          now_price: "4999",
          des_price: "￥2799起",
          old_price: "",
          detail: {
            img_1:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cde5a1d682c1bdc16efb116a325e5d7c.jpg",
            img_2:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/799066a0d7b6e5070bf6f46cec9b130b.jpg",
            img_3:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d32265f5e3eb1496adf4eb53af802906.jpg",
            product_des_1:
              "「赠价值199元立式风冷无线充；信用卡分期享24期免息」",
            product_des_2: "① 骁龙865旗舰平台，双模5G，用久了也不卡",
            product_des_3: "② 向往的生活同款手机，1亿像素8K电影相机",
            product_des_4: "③ 对称式立体声，有声、有势，一听即知",
            cart_img:
              "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581493329.10251213.jpg",
            version_1: "8GB+256GB",
            version_2: "12GB+256GB",
            version_3: "12GB+512GB",
            color_1: "星空蓝",
            color_2: "珍珠白"
          }
        },
        {
          category_img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/acf2e521e29e5afabf6d493203b31f27.png?thumb=1&w=120&h=120",
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7cd59729b9a02407979848839c0e5343.jpg?thumb=1&w=344&h=280",
          title: "小米电视4X 43英寸",
          subtitle: "FHD全高清屏，人工智能语音",
          now_price: "1199",
          des_price: "￥3799起",
          old_price: "￥3999",
          detail: {
            img_1:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6ed627b7baa75e2601d88d5424aa1cd8.jpg",
            img_2:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9c86b669b21400d4f5953d2bd8f40cb3.jpg",
            img_3:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/121e370dc1d5ccf75673eb9ac7a575a3.jpg",
            product_des_1: "「闪降300元，到手仅3999元；信用卡分期享24期免息」",
            product_des_2: "① 骁龙865旗舰平台，双模5G，用久了也不卡",
            product_des_3: "② 向往的生活同款手机，1亿像素8K电影相机",
            product_des_4: "③ 6.67英寸 AMOLED 双曲面屏幕，刷新屏幕新体验",
            cart_img:
              "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581494372.61732687.jpg",
            version_1: "8GB+128GB",
            version_2: "8GB+256GB",
            version_3: "12GB+256GB",
            color_1: "钛银黑",
            color_2: "冰海蓝"
          }
        },

        {
          category_img:
            " https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a69571b4148f5e59c251658adae6db60.png?thumb=1&w=120&h=120",
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/896d989bcdae584906c36f4a4e5fa89b.jpg?thumb=1&w=344&h=280",
          title: "小米电视4C 50英寸",
          subtitle: "4K HDR，钢琴烤漆",
          now_price: "1499",
          des_price: "￥1599起",
          old_price: "￥1699",
          detail: {
            img_1:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0acb3fabe87b0a3a001c72554f28421f.jpg",
            img_2:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/19566b7da2dffb8ec89ffb937b72e343.jpg",
            img_3:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/35ab5f1966c6ef33a03478b75d71fb7e.jpg",
            product_des_1: "「闪降300元，到手仅1399元；随机抽奖赢70英寸电视」",
            product_des_2: "① 120Hz双倍流畅体验，信息仿佛在指尖流淌",
            product_des_3: "② 索尼6400万前后六摄，每一拍都惊艳",
            product_des_4: "③ 多功能NFC，3.5mm耳机孔，你想要的都没少",
            cart_img:
              "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1575881713.96322514.jpg",
            version_1: "8GB+256GB",
            version_2: "12GB+256GB",
            version_3: "12GB+512GB",
            color_1: "星空蓝",
            color_2: "珍珠白"
          }
        },

        {
          category_img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a69571b4148f5e59c251658adae6db60.png?thumb=1&w=120&h=120",
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4b624a157d24822509e1f54316c8417a.jpg?thumb=1&w=344&h=280",
          title: "小米电视4C 55英寸",
          subtitle: "4K HDR，人工智能系统",
          now_price: "1899",
          des_price: "￥1899起",
          old_price: "￥2299",
          detail: {
            img_1:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0acb3fabe87b0a3a001c72554f28421f.jpg",
            img_2:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2606e3b67e47182fc6b862c43ab3e564.jpg",
            img_3:
              "https://https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b6ca204820273f533764d6b5323e23e8.jpg",
            product_des_1: "「闪降300元，到手仅1399元；随机抽奖赢70英寸电视」",
            product_des_2: "① 120Hz双倍流畅体验，信息仿佛在指尖流淌",
            product_des_3: "② 索尼6400万前后六摄，每一拍都惊艳",
            product_des_4: "③ 双模5G，低功耗5G处理器，为你的手机提供澎湃动力",
            cart_img:
              "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1575882053.33827103.jpg",
            version_1: "8GB+256GB",
            version_2: "12GB+256GB",
            version_3: "12GB+512GB",
            color_1: "星空蓝",
            color_2: "珍珠白"
          }
        },

        {
          category_img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a69571b4148f5e59c251658adae6db60.png?thumb=1&w=120&h=120",
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3d20e4c39b6967319e89b1f779332b0e.jpg?thumb=1&w=344&h=280",
          title: "小米电视4A 32英寸",
          subtitle: "人工智能系统，高清液晶屏",
          now_price: "1399",
          des_price: "￥699起",
          old_price: "￥1399",
          detail: {
            img_1:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0acb3fabe87b0a3a001c72554f28421f.jpg",
            img_2:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2606e3b67e47182fc6b862c43ab3e564.jpg",
            img_3:
              "https://https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b6ca204820273f533764d6b5323e23e8.jpg",
            product_des_1: "「闪降100元，到手仅1299元」",
            product_des_2: "① 6400万四摄小金刚，超强解析力，超震撼",
            product_des_3: "② 液冷游戏芯片，王者玩家的配置",
            product_des_4: "③ 4500mAn大电池，游戏9小时，2小时闪速满电",
            cart_img:
              "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581493329.10251213.jpg",
            version_1: "8GB+256GB",
            version_2: "12GB+256GB",
            version_3: "12GB+512GB",
            color_1: "星空蓝",
            color_2: "珍珠白"
          }
        },
        {
          category_img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b54738f4dce4588f9bd29a5dadf76030.png?thumb=1&w=120&h=120",
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/06bd0cdc9a6d3cc76850633a8ffb9d74.png?thumb=1&w=344&h=280",
          title: "小米电视4A 50英寸",
          subtitle: "4K HDR，人工智能语音系统",
          now_price: "1099",
          des_price: "￥1599起",
          old_price: "",
          detail: {
            img_1:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cde5a1d682c1bdc16efb116a325e5d7c.jpg",
            img_2:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/799066a0d7b6e5070bf6f46cec9b130b.jpg",
            img_3:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d32265f5e3eb1496adf4eb53af802906.jpg",
            product_des_1:
              "「赠价值199元立式风冷无线充；信用卡分期享24期免息」",
            product_des_2: "① 骁龙865旗舰平台，双模5G，用久了也不卡",
            product_des_3: "② 向往的生活同款手机，1亿像素8K电影相机",
            product_des_4: "③ 对称式立体声，有声、有势，一听即知",
            cart_img:
              "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581493329.10251213.jpg",
            version_1: "8GB+256GB",
            version_2: "12GB+256GB",
            version_3: "12GB+512GB",
            color_1: "星空蓝",
            color_2: "珍珠白"
          }
        }
      ]
    };
  },
  methods: {
    myproduct(index) {
      this.$store.commit("myproductStore", index);
      this.$router.push("product");
    }
  },
  created() {
    let that = this;
    let url =
      "https://www.fastmock.site/mock/8a3644398c7f4a81add7225f4ca77420/mi/product";
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onload = function() {
      that.indexList = JSON.parse(xhr.response).data.list;
      that.indexList.length = 6;
    };
  }
};
</script>
<style>
.ti {
  width: 100%;
  text-align: center;
}
.ui-line {
  height: 0.65rem;
  background: #f5f5f5;
  overflow: hidden;
  clear: both;
}
.current-good {
  width: 100%;
  position: absolute;
  height: 100%;
  text-align: center;
}
.current-goodss a {
  line-height: 50px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
}
.current-goodss{
  text-align: center;
  margin: 0  auto;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}

.kff-swiper-container {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.kff-swiper-container img {
  display: block;
  width: 100%;
  height: auto;
}
.cells_auto_fill {
  width: 100%;
  display: block;
}
.van-grid-item {
  height: 100%;
}

.kff-cells_auto_fill .van-grid-item__content {
  padding: 0;
}
.van-search {
  padding: 0;
}

/* 排列 */
.index-imgList {
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  margin-bottom: 50px;
}
.index-imglist-col {
  width: 48%;
  margin: 3px;
}
.index-imglist-col img {
  width: 100%;
}
.align-center {
  -webkit-box-align: center;
  align-items: center;
}
.index-imglist-col .buybtn {
  width: 2rem;
  background: #ea625b;
  border-radius: 0.05rem;
  text-align: center;
  color: #fff;
  font-size: 0.24rem;
  padding: 0.16rem 0;
  font-weight: 700;
}

.index-imglist-col .info {
  padding: 0.2rem 0.27rem;
}

.index-imglist-col .bgw {
  background-color: #fff;
}
.index-imglist-col .name {
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
  font-size: 0.9rem;
  text-overflow: ellipsis;
}
.index-imglist-col .brief {
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
  font-size: 0.8rem;
  text-overflow: ellipsis;
  color: rgba(0, 0, 0, 0.54);
}
.index-imglist-col .price {
  font-size: 1rem;
  color: #ea625b;
  text-align: center;
  line-height: 1.5em;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
  font-weight: 500;
}
.index-imglist-col .price span {
  font-size: 0.6rem;
}
.index-imglist-col .buybtn {
  width: 7rem;
  background: #ea625b;
  border-radius: 0.2rem;
  text-align: center;
  color: #fff;
  font-size: 0.65rem;
  padding: 0.5rem 0;
  font-weight: 700;
  margin: 0 auto;
}
</style>