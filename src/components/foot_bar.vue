<template>
  <div>
    <van-tabbar v-model="active" route>
      <div
        class="weui-tabbar__item"
        v-for="(i,index) in tabs"
        :key="index"
        :class="{active:index == thatnum}"
        @click="addClassName(index)"
      >
        <router-link :to="i.url">
          <image v-if="thatnum!=index" :src="i.images" class="first weui-tabbar__icon" />
          <image v-if="thatnum==index" :src="i.active" class="last first weui-tabbar__icon" />
          <p class="weui-tabbar__label">{{i.text}}</p>
        </router-link>
      </div>
    </van-tabbar>
  </div>
</template>
 <script>
import foot_bar from "./foot_bar";
export default {
  name: "foot_bar",
  data() {
    return {
      active: "",
      pageIndex: 0,
      thatnum: 0,
      tabs: [
        {
          text: "首页",
          url: "/",
          images: require("../assets/images/footer-1.png"),
          active: require("../assets/images/footer-11.png")
        },
        {
          text: "分类",
          url: "/category",
          images: require("../assets/images/footer-1.png"),
          active: require("../assets/images/footer-11.png")
        },
        {
          text: "星球",
          url: "/discover",
          images: require("../assets/images/footer-1.png"),
          active: require("../assets/images/footer-11.png")
        },
        {
          text: "购物车",
          url: "/cart",
          images: require("../assets/images/footer-1.png"),
          active: require("../assets/images/footer-11.png")
        },
        {
          text: "我的",
          url: "/user",
          images: require("../assets/images/footer-1.png"),
          active: require("../assets/images/footer-11.png")
        }
      ]
    };
  },
  components: {
    foot_bar
  },
  mounted() {
    this.thatnum = this.tabName;
  },
  methods: {
    addClassName: function(index) {
      this.thatnum = index;
    }
  }
};
</script>
<style>
.bottom-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  background: #fff;
  box-shadow: 0 3px 14px 2px rgba(0, 0, 0, 0.12);
}
.bottom-button a {
  color: #999;
}
.bottom-button {
  padding: 5px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  flex-shrink: 0;
  font-size: 13px;
  color: #999;
}

.btn-images {
  width: 25px;
  margin-bottom: 5px;
}

.active {
  color: #ff6700;
}

.nav {
  width: 100%;
  height: 55px;
  align-items: center;
  display: flex;
  text-align: center;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #cccccc;
}
.weui-tabbar__item a {
  width: 100%;
  height: 100%;
  flex: 1;
}
.weui-tabbar__item {
  flex: 1;
  text-align: center;
  text-decoration: none;
}
a {
  text-decoration: none;
}
.tabWrap {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
p {
  color: #cccccc;

  font-size: 14px;
}
.active p {
  color: #1296db;
}
.weui-tabbar__icon {
  width: 25px;
}
</style>