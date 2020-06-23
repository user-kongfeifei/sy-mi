<template>
  <div class="mobile-good">
    <van-swipe class="my-swipe kff-swiper-container" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in imgObj" :key="index">
        <img :src="item" />
      </van-swipe-item>
    </van-swipe>
    <div class="mobile-content">
      <div class="mobile-list" v-for="(item,index) in mobileObj" :key="index">
        <div>
          <img :src="item.url" alt class="mobileImg" />
        </div>
        <div class="mobile-list-foot">
          <div class="mobile-list-foot-left">
            <div class="mobile-name">{{item.title}}</div>
            <span class="mobileBrief">{{item.des}}</span>
          </div>
          <div class="mobile-list-foot-right">
            <div class="mobile-list-foot-right-price">￥{{item.price}}起</div>
            <div class="buybtn">立即购买</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mobile-good",
  data() {
    return {
      imgObj: [
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a0f5b1e18953b0d62a3670045f130b75.jpg?thumb=1&w=720&h=360",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/940c0e057307cc2078995e5b74fcb7d6.jpg?thumb=1&w=720&h=360",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5cdf9277bb658c41116e75d49bf30271.jpg?thumb=1&w=720&h=360"
      ],
      mobileObj: [
        {
          title: "小米10",
          url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7414ea8fc38d56fdbb6e2667b0c4975b.jpg?thumb=1&w=696&h=436",
          des: "骁龙865处理器/1亿像素8K电影相机",
          price: "3999"
        },
        {
          title: "小米10 Pro",
          url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/210dce8c3828bcc5ee4afd683e7ffc84.jpg?thumb=1&w=696&h=436",
          des: "骁龙865处理器 / 50倍数字变焦",
          price: "4999"
        },
        {
          title: " Redmi K30 Pro",
          url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742f1d4e57dfe913015ec0d876cf7122.jpg?thumb=1&w=696&h=436",
          des: "双模5G，120Hz流速屏，索尼6400万...",
          price: "2999"
        },
        {
          title: "Redmi K30 5G",
          url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/369da5b95afd2dec52fdb2329810b2fc.jpg?thumb=1&w=696&h=436",
          des: "双模5G，120Hz流速屏，索尼6400万...",
          price: "1899"
        }
      ]
    };
  }
};
</script>

<style>
.mobile-list-foot {
  background-color: #fff;
  padding: 0.6rem 0.67rem;
  text-align: left;
}
.mobile-content {
  background: #e6e7fb;
  height: 100%;
  padding-bottom: 50px;
}

.mobile-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px;
}
.mobileImg {
  width: 100%;
}
.mobile-list-foot {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.mobile-name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.87);
  padding: 5px 0;
}
.mobileBrief {
  margin-top: 0.06rem;
  font-size: 0.22rem;
  line-height: 0.3rem;
  color: rgba(0, 0, 0, 0.54);
  width: 80%;
   white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.buybtn {
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
.mobile-list-foot-right-price {
  color: #ea625b;
  display: inline-block;
  font-size: 15px;
}
</style>
