<template>
  <div class="login_surround">
    <div class="go_home">
      <span class="fa fa-angle-left"></span>
      <a href="/">返回首页</a>
    </div>
    <!-- 登录 -->
    <div v-show="isLogin" class="login_box">
      <div class="login_form">
        <div class="login_username">
          <input type="text" placeholder="用户名/邮箱/手机号">
        </div>
        <div class="login_password">
          <input type="password" placeholder="密码">
        </div>
        <div class="login_check">
          <input type="text" placeholder="验证码">
          <span></span>
        </div>
      </div>
      <div class="login_other">
        <a href="">忘记密码？</a>
        <a @click="goReg">立即注册</a>
      </div>
      <div class="login_btn">立即登录</div>
    </div>
    <!-- 注册 -->
    <div v-show="!isLogin" class="reg_box">
      <div class="reg_form">
        <div class="reg_username">
          <input type="text" placeholder="邮箱">
        </div>
        <div class="reg_check">
          <span>获取验证码</span>
          <input type="text" placeholder="验证码">
        </div>
        <div class="reg_password">
          <input type="password" placeholder="密码">
        </div>
        <div class="reg_rpassword">
          <input type="password" placeholder="重复密码">
        </div>
        <div class="reg_qq">
          <input type="text" placeholder="QQ">
        </div>
      </div>
      <div class="reg_other">
        已有账号？
        <a @click="goLogin">立即登录</a>
      </div>
      <div class="reg_btn">立即注册</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogin: true
    };
  },
  components: {},
  methods: {
    goLogin() {
      this.isLogin = true;
    },
    goReg(){
      this.isLogin = false;
    }
  },
  created() {
    //判断点击的是注册还是登录
    if (this.$route.query.id == 1) {
      this.isLogin = false;
    } else if (this.$route.query.id == 2) {
      this.isLogin = true;
    }
  }
};
</script>
<style lang='scss' scoped>
.login_surround {
  width: 100%;
  height: 100%;
  background: url("../../../static/common/imgs/login_bg.jpg") no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    &:hover {
      color: #ccc;
    }
  }
  .go_home {
    position: fixed;
    left: 80px;
    top: 50px;
    color: #bebebe;
    display: flex;
    align-items: center;
    span {
      font-size: 24px;
      margin-right: 10px;
    }
  }
  .login_box {
    position: relative;
    width: 900px;
    height: 600px;
    border-radius: 20px;
    background: rgba(0, 0, 0, 0.8);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .login_form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      div {
        width: 420px;
        margin-bottom: 20px;
        input {
          width: 100%;
          height: 50px;
          border-radius: 10px;
          text-indent: 20px;
          background: rgba(0, 0, 0, 0.4);
          font-size: 16px;
          color: #bebebe;
          border: none;
          outline: none;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
        }
      }
      .login_check {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        input {
          width: 160px;
        }
        span {
          width: 240px;
          height: 50px;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
        }
      }
    }
    .login_other {
      width: 420px;
      height: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      a{
        cursor: pointer;
      }
    }
    .login_btn {
      width: 420px;
      color: #fff;
      cursor: pointer;
      height: 50px;
      border-radius: 5px;
      line-height: 50px;
      text-align: center;
      color: #bebebe;
      margin-top: 50px;
      transition: all 0.3s;
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
      &:hover {
        box-shadow: 0 0 30px rgba(255, 255, 255, 0.6);
      }
    }
  }
  .reg_box {
    position: relative;
    width: 900px;
    height: 600px;
    border-radius: 20px;
    background: rgba(0, 0, 0, 0.8);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .reg_form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      div {
        width: 420px;
        margin-bottom: 20px;
        input {
          width: 100%;
          height: 50px;
          border-radius: 10px;
          text-indent: 20px;
          background: rgba(0, 0, 0, 0.4);
          font-size: 16px;
          color: #bebebe;
          border: none;
          outline: none;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
        }
      }
      .reg_check {
        display: flex;
        justify-content: space-between;
        align-items: center;
        input {
          width: 240px;
        }
        span {
          width: 160px;
          height: 50px;
          color: #a3a3a3;
          line-height: 50px;
          text-align: center;
          border-radius: 10px;
          transition: all 0.2s;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
          &:hover {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.6);
          }
        }
      }
      .reg_qq {
        margin-bottom: 10px;
      }
    }
    .reg_other {
      width: 420px;
      height: 30px;
      color: #a3a3a3;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      a {
        cursor: pointer;
      }
    }
    .reg_btn {
      width: 420px;
      color: #fff;
      cursor: pointer;
      height: 50px;
      border-radius: 5px;
      line-height: 50px;
      text-align: center;
      color: #bebebe;
      margin-top: 50px;
      transition: all 0.3s;
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
      &:hover {
        box-shadow: 0 0 30px rgba(255, 255, 255, 0.6);
      }
    }
  }
}
</style>