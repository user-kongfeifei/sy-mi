<template>
<div>
  <van-tabbar v-model="active" :fixed="true" z-index="9999" active-color="#07c160" inactive-color="#000">
  <van-tabbar-item  replace to="/" icon="home-o">首页</van-tabbar-item>
  <van-tabbar-item  replace to="/category" icon="search">分类</van-tabbar-item>
  <van-tabbar-item  replace to="/discover" icon="friends-o">星球</van-tabbar-item>
  <van-tabbar-item  replace to="/cart" icon="setting-o">购物车</van-tabbar-item>
  <van-tabbar-item  replace to="/user" icon="setting-o">我的</van-tabbar-item>
</van-tabbar>

<!-- <van-tabbar v-model="active">
  <van-tabbar-item name="home" icon="home-o">标签</van-tabbar-item>
  <van-tabbar-item name="search" icon="search">标签</van-tabbar-item>
  <van-tabbar-item name="friends" icon="friends-o">标签</van-tabbar-item>
  <van-tabbar-item name="setting" icon="setting-o">标签</van-tabbar-item>
</van-tabbar> -->

</div>
</template>
 <script>
import footer_bar from './foot_bar';
export default {
    name:"foot_bar",
    data(){
        return {
            active: 0
        }
    }
}
</script>

<style>

</style>