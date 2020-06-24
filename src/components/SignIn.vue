<template>
  <div>
    <div class="li-heart-title">
      <div class="li-heart-title-img">
        <img src="../assets/li-images/milogo.png" alt />
        <h4>小米帐号登录</h4>
      </div>
    </div>
    <div class="li-sign-in" v-if="show">
      <div class="li-sign-in-tel">
        <label class="li-sign-in-tel-label" for>
          <input type="tel" placeholder="邮箱/手机号码/小米ID" id="username" />
        </label>
      </div>
      <div class="li-sign-in-number">
        <label class="li-sign-in-number-label" for>
          <input type="number" placeholder="密码" id="pwd" />
        </label>
      </div>
      <div class="li-signin-sign-up">
        <div class="li-sign-in-sign-up">
          <a href>登录</a>
        </div>
        <div class="li-sign-in-with-pwd" @click.self="add">用手机短信登录/注册</div>

        <div class="li-sign-in-code">
          <a href>立即注册</a>
          |
          <a href>忘记密码？</a>
        </div>
      </div>
      <div>
        <fieldset class="li-more-options">
          <legend class="more-options">其他方式登录</legend>
        </fieldset>
      </div>
    </div>
    <div class="li-sign-in" v-else>
      <div class="li-sign-in-tel">
        <label class="li-sign-in-tel-label" for>
          <span>+86 ></span>
          <input type="tel" placeholder="手机号码" id="username" />
        </label>
      </div>
      <div class="li-sign-in-number">
        <label class="li-sign-in-number-label" for>
          <input type="number" placeholder="短信验证码" id="pwd" />
          <span>获取验证码</span>
        </label>
      </div>
      <div class="li-signin-sign-up">
        <div class="li-sign-in-sign-up">
          <a href>立即登录/注册</a>
        </div>
        <div class="li-sign-in-with-pwd" @click.self="add1">用户密码登录</div>
        <div class="li-sign-in-code">
          <a href>收不到验证码？</a>
        </div>
      </div>
      <div>
        <fieldset class="li-more-options">
          <legend class="more-options">其他方式登录</legend>
        </fieldset>
      </div>
    </div>
    <div class="li-bomtton">
      <ul class="li-bomtton-ul">
        <li>
          <a href>简体</a>
          |
        </li>
        <li>
          <a
            href="https://account.xiaomi.com/pass/serviceLogin?callback=https%3A%2F%2Fm.mi.com%2Fv1%2Fauthorize%2Fsso_callback%3Ffollowup%3Dhttps%253A%252F%252Fm.mi.com%252Fuser%26sign%3DZWJiMDc5YWVjOTNkNGE5YzM4Mjc2Y2I1MGYxMmE0YmY4MmRkMDY1Ng%2C%2C&sid=mi_eshopm_go&_bal=true&_loginSign=ticket&_loginType=ticket&_locale=zh_TW"
          >繁体</a>
          |
        </li>
        <li>
          <a
            href="https://account.xiaomi.com/pass/serviceLogin?callback=https%3A%2F%2Fm.mi.com%2Fv1%2Fauthorize%2Fsso_callback%3Ffollowup%3Dhttps%253A%252F%252Fm.mi.com%252Fuser%26sign%3DZWJiMDc5YWVjOTNkNGE5YzM4Mjc2Y2I1MGYxMmE0YmY4MmRkMDY1Ng%2C%2C&sid=mi_eshopm_go&_bal=true&_loginSign=ticket&_loginType=ticket&_locale=en"
          >English</a>
          |
        </li>
        <li>
          <a href="https://static.account.xiaomi.com/html/faq/zh_CN/faqList.html">常见问题</a>
          |
        </li>
        <li>
          <a href="https://privacy.mi.com/miaccount/zh_CN/">隐私政策</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    };
  },
  methods: {
    add() {
      if ((this.show = true)) {
        this.show = false;
      }
      
    },
    add1() {
        this.show = true;
    },
    
  }
  
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}

.li-heart-title-img {
  text-align: center;
  padding: 30px 0 10px;
}

h4 {
  font-size: 18px;
  padding-top: 10px;
  color: #000;
  font-weight: normal;
}

.li-sign-in-tel {
  padding: 0 20px;
}

.li-sign-in-tel-label {
  line-height: 20px;
  font-size: 18px;
  margin-bottom: 1px;
  border-bottom: 1px solid #d3d3d3;
  display: -webkit-box;
  -webkit-box-align: center;
  background-color: #ffffff;
  outline: 0 none;
}

.li-sign-in-tel-label > span {
  padding: 10px;
  margin-right: 10px;
  color: #9b9b9b;
}

.li-sign-in-tel-label > input {
  line-height: 20px;
  font-size: 18px;
  width: 100%;
  padding: 10px;
  line-height: normal;
  display: block;
  color: #4a4a4a;
  outline: none;
  border: none;
}

.li-sign-in-number-label > input {
  line-height: 20px;
  font-size: 18px;
  width: 100%;
  padding: 10px;
  line-height: normal;
  display: block;
  color: #4a4a4a;
  outline: none;
  border: none;
}

.li-sign-in-number-label {
  line-height: 20px;
  font-size: 18px;
  margin-bottom: 1px;
  border-bottom: 1px solid #d3d3d3;
  display: -webkit-box;
  -webkit-box-align: center;
  background-color: #ffffff;
  outline: 0 none;
}

.li-sign-in-number {
  padding: 0 20px;
  padding-top: 10px;
}

.li-sign-in-number-label > span {
  margin-left: -120px;
  cursor: pointer;
  color: #2ea5e5;
  font-size: 14px;
}

.li-signin-sign-up {
  padding-top: 24px;

  margin: 10px 20px;
}

.li-signin-sign-up a {
  text-decoration: none;
  color: #000;
}

.li-sign-in-sign-up > a {
  color: #fff;
}

.li-sign-in-sign-up {
  width: 100%;
  padding: 10px 0;
  display: block;
  margin-bottom: 14px;
  text-align: center;
  font-size: 18px;
  color: #fff;
  cursor: pointer;

  border-radius: 6px;
  overflow: hidden;
  background-color: #ff6700;
}

.li-sign-in-with-pwd {
  background: #fff;
  margin-top: 0.5%;
  border: 1px solid #d3d3d3;
  width: 100%;
  padding: 10px 0;
  margin-bottom: 14px;
  text-align: center;
  font-size: 18px;

  cursor: pointer;
  border-radius: 6px;
}

.li-sign-in-code {
  text-align: center;
}

.li-sign-in-code > a {
  color: #9b9b9b;
  font-size: 16px;
}

.li-more-options {
  margin-top: 50px;
  border: 0;
  border-top: 1px solid #f2f2f2;
}

.more-options {
  font-size: 12px;
  color: #b0b0b0;

  text-align: center;
}

.li-bomtton {
  margin-top: 180px;
  margin-left: 10%;
}

.li-bomtton a {
  text-decoration: none;
  color: #9b9b9b;
}

.li-bomtton-ul {
  list-style: none;
  display: flex;
  text-align: center;
  font-size: 14px;
}

.li-bomtton-ul > li {
  color: #9b9b9b;
  margin: 0 2%;
}
</style>