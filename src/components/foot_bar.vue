<template>
<div>
  <van-tabbar v-model="active">
  <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
  <van-tabbar-item to="/category" icon="search">分类</van-tabbar-item>
  <van-tabbar-item to="/discover" icon="friends-o">星球</van-tabbar-item>
  <van-tabbar-item to="/cart" icon="setting-o">购物车</van-tabbar-item>
  <van-tabbar-item to="/user" icon="setting-o">我的</van-tabbar-item>
</van-tabbar>
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
    .van-tabbar-item--active{
        color: #ff6700;
    }
</style>