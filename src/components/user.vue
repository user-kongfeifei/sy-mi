<template>
  <div class="user-content">
    <div class="user-top">
      <div class="user-top-img">
        <img src="../assets/images/user-top-img.png" class="img" />
      </div>
      <div class="user-top-title">登录/注册</div>
    </div>
    <van-cell title="我的订单" is-link value="全部订单" />
    <div class="user-pic">
      <div class="user-pic-icon">
        <img src="../assets/images/user-dfk.png" alt />
        <p>待付款</p>
      </div>
      <div class="user-pic-icon">
        <img src="../assets/images/user-dsh.png" alt />
        <p>待收货</p>
      </div>
      <div class="user-pic-icon">
        <img src="../assets/images/user-thx.png" alt />
        <p>退换修</p>
      </div>
    </div>
    <div class="clear"></div>
    <div class="user-list">
      <div>
        <div class="ui-line"></div>
      <div class="user-list-one-img">
        <div class="kff-user-img">
          <img src="../assets/images/user-list-one-img1.png" alt />
        </div>
        <div class="user-list-one-title">
          <div class="user-list-one-hy">会员中心</div>
          <div class="user-you">
            <img src="../assets/images/user-you.png" alt />
          </div>
        </div>
      </div>
       <div class="user-list-one-img">
        <div class="kff-user-img">
          <img src="../assets/images/user-2.png" alt />
        </div>
        <div class="user-list-one-title">
          <div class="user-list-one-hy">我的优惠</div>
          <div class="user-you">
            <img src="../assets/images/user-you.png" alt />
          </div>
        </div>
      </div>
      <div class="ui-line"></div>
       <div class="user-list-one-img">
        <div class="kff-user-img">
          <img src="../assets/images/user-3.png" alt />
        </div>
        <div class="user-list-one-title">
          <div class="user-list-one-hy">服务中心</div>
          <div class="user-you">
            <img src="../assets/images/user-you.png" alt />
          </div>
        </div>
      </div>

       <div class="user-list-one-img">
        <div class="kff-user-img">
          <img src="../assets/images/user-4.png" alt />
        </div>
        <div class="user-list-one-title">
          <div class="user-list-one-hy">小米之家</div>
          <div class="user-you">
            <img src="../assets/images/user-you.png" alt />
          </div>
        </div>
     
      </div>
    <div class="ui-line"></div>
       <div class="user-list-one-img">
        <div class="kff-user-img">
          <img src="../assets/images/user-5.png" alt />
        </div>
        <div class="user-list-one-title">
          <div class="user-list-one-hy">我的F码</div>
          <div class="user-you">
            <img src="../assets/images/user-you.png" alt />
          </div>
        </div>
      </div>

       <div class="user-list-one-img">
        <div class="kff-user-img">
          <img src="../assets/images/user-6.png" alt />
        </div>
        <div class="user-list-one-title">
          <div class="user-list-one-hy">礼物品兑换</div>
          <div class="user-you">
            <img src="../assets/images/user-you.png" alt />
          </div>
        </div>
      </div>
          <div class="ui-line"></div>
        <div class="user-list-one-img">
        <div class="kff-user-img">
          <img src="../assets/images/user-7.png" alt />
        </div>
        <div class="user-list-one-title">
          <div class="user-list-one-hy">设置</div>
          <div class="user-you">
            <img src="../assets/images/user-you.png" alt />
          </div>
        </div>
      </div>

      





      </div>
    </div>
    <!-- 底部footer -->
    <foot_bar></foot_bar>
  </div>
</template>
<script>
import foot_bar from "./foot_bar";
export default {
  name: "user",
  data() {
    return {};
  },
  components: {
    foot_bar
  }
};
</script>
<style>
.clear{
  clear: both;
}
.user-content{
  height: 100%;
}
.ui-line {
    height: .6rem;
    background: #f5f5f5;
    overflow: hidden;
    clear: both;
}
.user-top {
  background: url(../assets/images/user-top-bg.png) center 0 #f37d0f;
  background-size: auto 100%;
  height: 83px;
  padding: 0.4rem 0;
  display: flex;
  
  flex-direction: row;
  justify-content: flex-start;
}
.user-list-one-title .user-you{
   display: inline-block;
   overflow: auto;
   z-index: 9999;
}
.user-list-one-title .user-you img{
  display: inline-block;
  margin-right: 15px;
  margin-top: 5px;
  width: 32px;
  height: 32px;
}
.user-top-img {
  margin-left: 1rem;
}
.user-top-img img {
  margin: 0.6rem 0;
  width: 3.1rem;
  height: 3.1rem;
  overflow: hidden;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 100%;
  border: 3px solid hsla(0, 0%, 100%, 0.4);
  text-align: center;
}
.user-top-title {
  color: #fff;
  font-size: 0.8rem;
  text-align: left;
  line-height: 75px;
  margin-left: 0.4rem;
}
.user-order {
  background-color: #fff;
  height: 2.3rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  color: rgba(0, 0, 0, 0.54);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.kff-my-order {
  font-size: 0.95rem;
  padding: 0 0 0 0.8rem;
  color: rgba(0, 0, 0, 0.87);
}
.all-my-order {
  font-size: 0.8rem;
  padding: 0 1rem 0 0;
  color: rgba(0, 0, 0, 0.87);
}
.user-pic {
  display: flex;
  flex-direction: row;
  position: relative;
  height: 90px;
  padding: 0 25px;
  justify-content: space-between;
}
.user-pic-icon {
  display: inline-block;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}
.user-pic-icon img {
  display: inline-block;
  width: 34%;
  margin: 0 auto 0.16rem;
}
.user-pic-icon p {
  text-align: center;
  font-size: 12px;
  padding-top: 3px;
}
.user-list {
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
}
.user-list-one-img {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 55px;
}
.kff-user-img {
  display: inline-block;
  height: 55px;
  width: 55px;
  flex-shrink: 0;

}
.user-list-one-img img {
  padding-left: 15px;
  padding-top:13px;
  width: 40px;
}
.user-list-one-title {
  display: flex;
  flex-grow: 1;
  height: 55px;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
}
.user-list-one-hy{
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  align-content: center;
  line-height: 55px;
  font-size: 14px;
}
</style>
