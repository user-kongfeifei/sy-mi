<template>
  <div class="mi-container">
    <van-sticky>
      <div class="mi-header">
        <van-row>
          <van-col span="3">
            <img class="logo" src="../assets/images/logo.png" alt />
          </van-col>
          <van-col span="18">
            <van-search class="index_header" background="#ffffff" v-model="value"  placeholder="搜索商品名称"
            />
          </van-col>
          <van-col span="3">
            <router-link to="/user">
              <img src="../assets/images/index-header-icon.png" alt class="login" />
            </router-link>
          </van-col>
        </van-row>
      </div>
      <div class="tab-title-wrap">
        <div class="tab-wrap-left">
           <div class="tab-title tag-title " :class="{active:tagIndex==0}" @click="tagChange(0)">推荐</div>
            <div class="tab-title tag-title" :class="{active:tagIndex==1}" @click="tagChange(1)">手机</div>
           <div class="tab-title tag-title" :class="{active:tagIndex==2}" @click="tagChange(2)">智能</div>
            <div class="tab-title tag-title" :class="{active:tagIndex==3}" @click="tagChange(3)">电视</div>
           <div class="tab-title tag-title" :class="{active:tagIndex==4}" @click="tagChange(4)">笔记本</div>
           <div class="tab-title tag-title" :class="{active:tagIndex==5}" @click="tagChange(5)">家电</div>
        </div>
        <div class="tab-wrap-right" @click="indexPull">
          <img src="../assets/images/index-jt.png" alt="" class="index-jt" >
        </div>
        <div class="nav-wrap" v-if="seen">
          <div class="nav-wrap-top">
              <div>全部</div>
              <div ><img src="../assets/images/index-jt.png" alt="" class="index-jt" ></div>
          </div>
        </div>
      </div>
    </van-sticky>
    <!-- 首页标签页滚动 -->
    <component :is="tagName"></component>
    <!-- 底部footer -->
    <foot_bar></foot_bar>
  </div>
</template>
<script>
import { Toast, Overlay } from 'vant';
import foot_bar from "./foot_bar";
import currentGood from "./current-good.vue";
import mobileGood from "./mobile-good.vue";
import intelligentGood from "./intelligent-good.vue";
export default {
  name: "home",
  data() {
    return {
      tagName: "current-good",
      activeName: "1",
      tagIndex: 0,
      seen:false,
      value: "",
      active: ""
    };
  },
  methods: {
    tagChange(index) {
      this.tagIndex = index;
      if (index == 0) {
        this.tagName = "current-good";
      }
      if (index == 1) {
        this.tagName = "mobile-good";
      }
       if (index == 2) {
        this.tagName = "intelligent-good";
      }
    },
    indexPull(){

    }
  },
  components: {
    foot_bar: foot_bar,
    "current-good": currentGood,
    "mobile-good": mobileGood,
    "intelligent-good":intelligentGood
  }
};
</script>
<style>
.van-search__content {
  background: #fff;
}
.tab-wrap-left {
  display: flex;
  flex-direction: row;
  width: 85%;
  align-items: center;
  overflow-x: auto;   
  white-space: nowrap;
  overflow-x: auto;
  height: 30px;
  background: #f2f2f2;
  font-size: 14px;
}
.mi-header {
  padding: 0.4rem 0;
  background: #f2f2f2;
  color: #666;
}
.logo {
  width: 1.5rem;
  display: inline-block;
  margin-left: 16px;
  margin-top: 10px;
  margin-right: 10px;
}
.login {
  width: 1.5rem;
  display: inline-block;
  margin-left: 5px;
  margin-top: 5px;
}
.index_header {
  align-items: center;
  border: 1px solid #e5e5e5;
  text-align: left;
  width: 100%;
  flex-grow: 1;
  color: rgba(0, 0, 0, 0.3);
  background-color: #fff;
  border-radius: 0.04rem;
}

.tab-title-wrap {
  display: flex;
  flex-direction: row;
  background: #f2f2f2;
  justify-content: space-around;
}
.tab-title {
  padding: 0 8px;
}
.active {
  color: rgb(237, 91, 0);
  border-bottom: 1px solid rgb(237, 91, 0);
}

.nav-wrap{
  position: fixed;
  width: 100%;
  height: 130px;
  background: red;
  z-index:100
}
.index-jt{
  display: inline-block;
  width: 22px;
}
</style>