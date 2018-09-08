<template>
  <div class="usi_surround">
    <!-- v-if做用户的显示  用户信息（放一些头像，积分等级，艾特币之类的）-->
    <div class="usi_userInfo_title">
      <span>用</span>
      <span>户</span>
      <span>信</span>
      <span>息</span>
    </div>
    <!-- 未登录显示UI -->
    <div class="usi_loginBox" v-if="!isLogin">
      <a href="" class="usi_loginPic">
        <span class="fa fa-user-circle-o"></span>
      </a>
      <a href="/login" class="usi_loginBtn">立即登录</a>
      <div class="usi_loginPrivileges">
        <span>登录特权</span>
      </div>
      <ul class="usi_privilegesList">
        <li>
          <img src="../../../../static/index/images/help.png">
          <span>发布求助</span>
        </li>
        <li>
          <img src="../../../../static/index/images/money.png">
          <span>赚取赏金</span>
        </li>
        <li>
          <img src="../../../../static/index/images/article.png">
          <span>发表文章</span>
        </li>
        <li>
          <img src="../../../../static/index/images/gift.png">
          <span>兑换礼品</span>
        </li>
      </ul>
    </div>
    <!-- 登录后显示UI(用户信息) -->
    <div class="usi_userInfo" v-if="isLogin">
      <div class="usi_userPicBox">
        <a href="" class="usi_userPic">
          <img :src="userInfo.userPic">
          <span class="usi_userPic_surround"></span>
        </a>
        <div class="usi_account">
          <a href="">{{userInfo.userName}}</a>
          <span><img src="../../../../static/index/images/signout.png" title="退出登录"></span>
        </div>
      </div>
      <ul class="usi_userTextInfo">
        <li>
          <span>
            <img src="../../../../static/index/images/userType.png">
            <i>账号类型：</i>
          </span>
          <span>普通用户</span>
        </li>
        <li>
          <span> <img src="../../../../static/index/images/money.png">
            <i>艾特儿币：</i>
          </span>
          <span>￥999</span>
        </li>
        <li>
          <span><img src="../../../../static/index/images/integral.png">
            <i>积分数量：</i>
          </span>
          <span>99999</span>
        </li>
        <li>
          <span><img src="../../../../static/index/images/fabulous.png">
            <i>获赞总量：</i>
          </span>
          <span>9876</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogin: false,
      userInfo: {
        userId: "123",
        userName: "二狗不二、",
        userPic:
          "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2278739224,3680254183&fm=27&gp=0.jpg",
        userIntegral: "2423",
        userItMoney: "213",
        userType: "普通用户"
      }
    };
  },
  components: {},
  methods: {},
  created() {}
};
</script>
<style lang='scss' scoped>
.usi_surround {
  position: relative;
  width: 100%;
  height: 360px;
  background: #fff;
  box-shadow: 0 0 20px rgba(102, 102, 102, 0.1);
  padding: 20px 20px 10px;
  box-sizing: border-box;
  .usi_userInfo_title {
    position: absolute;
    right: -20px;
    top: 70px;
    width: 40px;
    border-radius: 0px 20px 0px 20px;
    height: 100px;
    padding: 20px 0;
    background: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-size: 14px;
    color: #a1a1a1;
  }
  .usi_loginBox {
    width: 100%;
    height: 100%;
    padding:50px 0;
    box-sizing: border-box;
    .usi_loginPic {
      display: block;
      width: 100%;
      height: 60px;
      line-height: 60px;
      text-align: center;
      span {
        font-size: 60px;
        color: #ccc;
      }
    }
    .usi_loginBtn {
      display: block;
      width: 90%;
      margin: 10px auto;
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-size: 16px;
      border-radius: 5px;
      color: #fff;
      background: linear-gradient(to right, gold, orange);
    }
    .usi_loginPrivileges {
      position: relative;
      width: 80%;
      margin: 30px auto 20px;
      border-top: 1px solid #ddd;
      span {
        display: block;
        width: 80px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        position: absolute;
        background: #fff;
        left: 50%;
        top: -15px;
        margin-left: -40px;
        color: #a3a3a3;
      }
    }
    .usi_privilegesList {
      width: 90%;
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      li {
        width: 50%;
        height: 30px;
        text-align: center;
        color: #9a9a9a;
        display: flex;
        align-items: center;
        &:nth-child(2) {
          justify-content: flex-end;
          padding-right: 5px;
          box-sizing: border-box;
        }
        &:nth-child(4) {
          justify-content: flex-end;
          padding-right: 5px;
          box-sizing: border-box;
        }
        img {
          margin-right: 10px;
          width: 18px;
          height: 18px;
        }
      }
    }
  }
  .usi_userInfo {
    width: 100%;
    height: 100%;
    .usi_userPicBox {
      width: 100%;
      height: 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .usi_userPic {
        position: relative;
        width: 60px;
        height: 60px;
        padding-left: 40px;
        &:hover .usi_userPic_surround {
          display: block;
        }
        img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }
        .usi_userPic_surround {
          display: none;
          position: absolute;
          left: 40px;
          top: 0px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
        }
      }
      .usi_account {
        flex: 1;
        padding-left: 20px;
        padding-right: 10px;
        box-sizing: border-box;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        a {
          font-size: 14px;
          transition: all 0.1s;
          &:hover {
            color: orange;
          }
        }
        span {
          color: #a3a3a3;
          cursor: pointer;
          img {
            width: 24px;
            height: 24px;
          }
        }
      }
    }
    .usi_userTextInfo {
      width: 100%;
      margin: 20px auto;
      li {
        width: 100%;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
          width: 50%;
          height: 100%;
          line-height: 35px;
          display: inline-block;
          color: #9e9e9e;
          img {
            width: 18px;
            height: 18px;
            display: inline-block;
            margin-right: 5px;
          }
          &:first-child {
            text-align: right;
            display: flex;
            justify-content: flex-end;
            align-items: center;
          }
          &:last-child {
            text-align: left;
          }
        }
      }
    }
  }
}
</style>