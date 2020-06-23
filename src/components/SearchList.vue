<template>
  <div class="searchList">
    <div class="searchList-top">
      <img src="../assets/images/index-search-zuo.png" alt class="searchImg" @click="searchList" />
      <input type="text" v-model="message" placeholder="搜索商品名称" class="input" />
      <img src="../assets/images/search-btn.png" alt class="searchImg" @click="searchList" />
    </div>
    <van-row>
      <van-col class="search-find" >搜索发现</van-col>
    </van-row>
    <van-row>
      <van-col class="search-swiper-container padd20">
        <img src="../assets/images/search-list-img.jpg" alt />
      </van-col>
    </van-row>
    <div class="search-list">
      <ul>
        <li>
          <a href="#">小米手环5</a>
        </li>
        <li>
          <a href="#">百元好物清单</a>
        </li>
        <li>
          <a href="#">Redmi K30 Pro</a>
        </li>
        <li>
          <a href="#">小米手机</a>
        </li>
        <li>
          <a href="#">冰箱</a>
        </li>
        <li>
          <a href="#">小米10</a>
        </li>
        <li>
          <a href="#">家电</a>
        </li>
        <li>
          <a href="#">智能</a>
        </li>
        <li>
          <a href="#">全部商品</a>
        </li>
        <li>
          <a href="#">米家插线板快充版27W</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Foot_bar from "./Foot_bar";
export default {
  name: "searchList",
  data() {
    return {
      message: ""
    };
  },
  components: {
    Foot_bar
  },
  methods: {
    searchList() {
      this.$router.go(-1);
    }
  },
  watch:{

  }
};
</script>
<style>
.searchList-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  background: #f2f2f2;
}
.searchImg {
  width: 26px;
  flex-shrink: 0;
  margin: 8px;
}
.input {
  flex-grow: 1;
  border: 1px solid #e5e5e5;
  border-radius: 0.04rem;
  outline: 0;
  margin: 5px;
  margin-top: 5px;
  font-size: 16px;
  font-weight: 400;
  height: 20px;
  padding-left: 10px;
  line-height: normal;
}
.search-find {
  margin: 10px;
  margin-top: 25px;
  margin-left: 15px;
  font-size: 15px;
  font-weight: 600;
  color: #3c3c3c;
}
.padd20 {
  padding: 0 20px;
}
.search-swiper-container img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 12px;
}
.search-list {
  widows: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.search-list ul{
  margin-top: 10px;
}
.search-list li {
  width: 48%;
  line-height: 30px;
  float: left;
}
.search-list li  a{
  font-size: 13px;
  color: #3c3c3c;
  padding: 0 20px;
}
</style>