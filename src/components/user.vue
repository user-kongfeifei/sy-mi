<template>
<div>
  <div class="user-content">
    <div class="user-top" @click="userOverlayClick">
      <div class="user-top-img">
        <img src="../assets/images/user-top-img.png" class="img" />
      </div>
      <div class="user-top-title">登录/注册</div>
    </div>
    <div class="user-order">
      <div class="user-my-order">我的订单</div>
      <div class="user-all-order">
        <div class="user-all-order-title">全部订单</div>
        <div class="kff-order-icon">
          <img src="../assets/images/user-you.png" alt />
        </div>
      </div>
    </div>
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
          <div class="user-list-one-title user-border-bottom">
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
          <div class="user-list-one-title user-border-bottom">
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
          <div class="user-list-one-title user-border-bottom">
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

   <div class="user-overlay" v-if="userOverlay">
      <div class="user-overlay-kuang">
        <div class="user-overlay-top">
          <a href>《小米商城用户协议》</a>
          <a href>《小米商城用户协议》</a>
          <br />
          <a href>《小米帐号用户协议》</a>
          <a href>《小米帐号隐私政策》</a>
          <div class="user-xy">请您仔细阅读以上协议，其中有对您权利义务的特别约定等重要条款，同意后方可使用本软件</div>
        </div>
        <div class="user-overlay-bottom">
          <div class="user-agree" @click="unGreen">不同意</div>
          <div class="user-agree" @click="green">
            <span>同意</span>
          </div>
        </div>
      </div>
    </div>

    </div>
</template>
<script>
import foot_bar from "./foot_bar";
export default {
  name: "user",
  data() {
    return {
      show: false,
      userOverlay: false
    };
  },
  methods: {
    userOverlayClick() {
      this.userOverlay = true;
      console.log(this.userOverlay,'userOverlayClick')
    },
    unGreen() {
      this.userOverlay = false;
    },
    green() {
      this.$router.push({ path: "/SignIn" });
    }
  },
  components: {
    foot_bar
  }
};
</script>
<style>
.clear {
  clear: both;
}
.user-overlay-kuang {
  width: 90%;
  background: #fff;
  position: relative;
  height: 170px;
  margin: 0 auto;
  top: 40%;
  border-radius: 6px;
}
.user-overlay-top {
  width: 90%;
  margin: 0 auto;
  padding-top: 15px;
  padding-bottom: 25px;
}
.user-overlay-top a {
  display: inline-block;
  font-size: 13px;
  color: #ff6700;
  font-weight: 600;
  margin-left: 10px;
  margin-right: 10px;
}
.user-overlay {
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0px;
  left: 0;
  bottom: 0;
  z-index: 9999999;
  height: 100%;
}
.user-overlay-bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.user-agree {
  width: 50%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-right: 1px solid #f5f5f5;
  border-top: 1px solid #d9d9d9;
}
.user-agree span {
  color: #f37d0f;
}
.user-content {
  height: 100%;
  overflow: auto;
  color: #3c3c3c;
  padding-bottom: 52px;
  border-top: 1px solid #d9d9d9;
  left: 0;
  top: 0;
}
.user-xy {
  font-size: 13px;
  padding: 0 6px;
  padding-top: 6px;
}
.ui-line {
  height: 0.65rem;
  background: #f5f5f5;
  overflow: hidden;
  clear: both;
}
.user-top {
  background: url(../assets/images/user-top-bg.png) center 0 #f37d0f;
  background-size: auto 100%;
  padding: 3px 0;
  display: flex;

  flex-direction: row;
  justify-content: flex-start;
}
.kff-order-icon {
  width: 16px;
  height: 16px;
  margin-right: 15px;
  margin-top: 10px;
}
.kff-order-icon img {
  width: 100%;
}

.user-list-one-title .user-you {
  display: inline-block;
  overflow: auto;
  z-index: 9999;
}
.user-list-one-title .user-you img {
  display: inline-block;
  margin-right: 15px;
  margin-top: 5px;
  width: 20px;
  height: 20px;
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
  height: 2.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.18);
  color: rgba(0, 0, 0, 0.54);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.user-my-order {
  font-size: 0.9rem;
  padding: 0 0 0 1.1rem;
  color: rgba(0, 0, 0, 0.87);
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
  color: rgba(0, 0, 0, 0.87);
}
.user-list {
  display: flex;
  flex-direction: column;
  padding-bottom: 52px;
  background: #f5f5f5 !important;
}
.user-list-one-img {
  display: flex;
  background: #fff;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 55px;
}
.user-all-order {
  display: flex;
  flex-direction: row;
}
.kff-user-img {
  display: inline-block;
  height: 55px;
  width: 55px;
  flex-shrink: 0;
}
.user-all-order-title {
  line-height: 2.3rem;
  font-size: 13px;
  margin-right: 5px;
  color: rgba(0, 0, 0, 0.87);
}
.user-list-one-img img {
  padding-left: 15px;
  padding-top: 13px;
  width: 25px;
}
.user-list-one-title {
  display: flex;
  flex-grow: 1;
  height: 55px;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
}
.user-border-bottom {
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
}
.user-list-one-hy {
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  align-content: center;
  line-height: 55px;
  font-size: 14px;
}

/* 小于 */
@media screen and (min-width: 900px) {
  article {
    padding: 1rem 3rem;
  }
}
</style>
