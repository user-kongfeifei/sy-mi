<template>
  <div class="mi-container">
    <van-sticky>
      <div class="mi-header">
        <van-row>
          <van-col span="3">
            <img class="logo" src="../assets/images/logo.png" alt />
          </van-col>
          <van-col span="18">
            <van-search
              class="index_header"
              background="#ffffff"
              placeholder="搜索商品名称"
              @click="searchClick"
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
          <div
            class="tab-title tag-title"
            :class="{activeindex:tagIndex==0}"
            @click="tagChange(0)"
          >推荐</div>
          <div
            class="tab-title tag-title"
            :class="{activeindex:tagIndex==1}"
            @click="tagChange(1)"
          >手机</div>
          <div
            class="tab-title tag-title"
            :class="{activeindex:tagIndex==2}"
            @click="tagChange(2)"
          >智能</div>
          <div
            class="tab-title tag-title"
            :class="{activeindex:tagIndex==3}"
            @click="tagChange(3)"
          >电视</div>
          <div
            class="tab-title tag-title"
            :class="{activeindex:tagIndex==4}"
            @click="tagChange(4)"
          >笔记本</div>
          <div
            class="tab-title tag-title"
            :class="{activeindex:tagIndex==5}"
            @click="tagChange(5)"
          >家电</div>

          <div
            class="tab-title tag-title"
            :class="{activeindex:tagIndex==6}"
            @click="tagChange(6)"
          >生活周边</div>
        </div>
        <div class="tab-wrap-right" @click="indexDown">
          <img src="../assets/images/index-jt.png" alt class="index-jt" />
        </div>
        <transition name="fade-overlay">
        <div class="nav-wrap" v-if="seen">
          <div class="nav-wrap-top">
            <div class="nav-all">全部</div>
            <div>
              <img src="../assets/images/indexUp.png" alt class="index-jt" @click="indexUp" />
            </div>
          </div>
          <div class="nav-list">
            <div class="nav-btn" :class="{activenav:tagIndex==0}" @click="tagChange(0)">推荐</div>
            <div class="nav-btn" :class="{activenav:tagIndex==1}" @click="tagChange(1)">手机</div>
            <div class="nav-btn" :class="{activenav:tagIndex==2}" @click="tagChange(2)">智能</div>
            <div class="nav-btn" :class="{activenav:tagIndex==3}" @click="tagChange(3)">电视</div>
            <div class="nav-btn" :class="{activenav:tagIndex==4}" @click="tagChange(4)">笔记本</div>
            <div class="nav-btn" :class="{activenav:tagIndex==5}" @click="tagChange(5)">家电</div>
            <div class="nav-btn" :class="{activenav:tagIndex==6}" @click="tagChange(6)">生活周边</div>
          </div>
        </div>
          </transition>
        <div class="index-overlay" v-if="indexOverlay"></div>
      </div>
    </van-sticky>
    <!-- 首页标签页滚动 -->
    <keep-alive>
      <transition name="fade">
        <component :is="tagName"></component>
      </transition>
    </keep-alive>
    <!-- 底部footer -->
    <foot_bar></foot_bar>
 
  </div>
</template>
<script>
import { Toast, Overlay, Search } from "vant";
import Foot_bar from "./Foot_bar";
import currentGood from "./CurrentGood.vue";
import MobileGood from "./MobileGood.vue";
import IntelligentGood from "./IntelligentGood.vue";
import TvGood from "./TvGood.vue";
import NoteGood from "./NoteGood.vue";
import HomeApply from "./HomeApply.vue";
import AroundLife from "./AroundLife.vue";

export default {
  name: "home",
  data() {
    return {
      activenav: "",
      tagName: "current-good",
      activeName: "1",
      tagIndex: 0,
      tagOverlay: false,
      indexOverlay: false,
      seen: false,
      value: "",
      active: ""
    };
  },
  methods: {
    searchClick() {
      this.$router.push({
        path: "/search"
      });
    },
    tagChange(index) {
      this.tagIndex = index;
      if (index == 0) {
        this.seen = false;
        this.indexOverlay = false;
        this.tagName = "current-good";
      }
      if (index == 1) {
        this.seen = false;
        this.indexOverlay = false;
        this.tagName = "mobile-good";
      }
      if (index == 2) {
        this.seen = false;
        this.indexOverlay = false;
        this.tagName = "intelligent-good";
      }
      if (index == 3) {
        this.seen = false;
        this.indexOverlay = false;
        this.tagName = "tv-good";
      }
      if (index == 4) {
        this.seen = false;
        this.indexOverlay = false;
        this.tagName = "note-good";
      }
      if (index == 5) {
        this.seen = false;
        this.indexOverlay = false;
        this.tagName = "home-apply";
      }
      if (index == 6) {
        this.seen = false;
        this.indexOverlay = false;
        this.tagName = "around-life";
      }
    },
    indexDown() {
      this.seen = true;
      this.indexOverlay = true;
    },
    indexUp() {
      this.seen = false;
      this.indexOverlay = false;
    }
  },

created(){
  this.$store.commit("myindex",0)
},
  components: {
    foot_bar: Foot_bar,
    "current-good": currentGood,
    "mobile-good": MobileGood,
    "intelligent-good": IntelligentGood,
    "tv-good": TvGood,
    "note-good": NoteGood,
    "home-apply": HomeApply,
    "around-life": AroundLife
  }
};
</script>
<style>

.fade-enter {
  transform: translateX(-100%);
}
.fade-leave-to {
  transform: translateX(100%);

}
.fade-enter-active,
.fade-leave-active {
  transition: all .6s ;
}
.nav-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.van-search__content {
  background: #fff;
}
.tab-title {
  width: 15%;
  text-align: center;
  margin: 0 15px;
}
.tab-title p {
  display: inline-block;
  width: 80%;
}
.tab-wrap-left {
  display: flex;
  flex-direction: row;
  flex-flow: 1;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  overflow-x: auto;
  height: 30px;
  background: #f2f2f2;
  font-size: 14px;
}
.tab-wrap-left::-webkit-scrollbar {
  display: none;
}
.index-overlay {
  position: fixed;
  width: 100%;
  z-index: 100;
  height: 100%;
  z-index: 99;
  background: rgba(0, 0, 0, 0.3);
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

.activeindex {
  color: rgb(237, 91, 0);
  padding: 5px 0;
  border-bottom: 2px solid rgb(237, 91, 0);
}

.nav-btn {
  background-color: #fde0d5;
  border-color: #ff6700;
  color: #3c3c3c;
  margin-left: 8px;
  margin-bottom: 5px;
  display: inline-block;
  width: 22%;
  height: 25px;
  line-height: 25px;
  text-align: center;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  font-size: 14px;
  background-color: #fff;
}

.activenav {
  background-color: #fde0d5;
  border-color: #ff6700;
  color: #ff6700;
}

.nav-wrap-top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 3px 10px;
  z-index: 100;
}
.nav-wrap {
  position: fixed;
  width: 100%;
  height: 100px;
  background: #f2f2f2;
  z-index: 100;
}
.index-jt {
  display: inline-block;
  width: 22px;
}
.nav-all {
  font-size: 15px;
  color: #3c3c3c;
}
</style>