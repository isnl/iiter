<template>
  <div class="hec_surround">
    <div class="hec_left">
      <div class="hec_contentTit">
        <i class="fa fa-handshake-o"></i>
        <span>问题求助</span>
      </div>
      <div class="hec_contentSearch">
        <input type="text" value="vue中上滑加载问题">
        <button>搜索一下</button>
      </div>
      <div class="hec_contentType">
        <span>类型：</span>
        <ul class="hec_contentTypeList">
          <li v-for="(items,index) in questionInfo" :key="index" @click="changeType(items)" :class="items === queryQuestion.type ? 'liActive':''">{{items.aliasname}}</li>
        </ul>
      </div>
      <div class="hec_subBox hec_classification" v-if="queryQuestion.type !== null && queryQuestion.type.name !== 'all'">
        <span>分类：</span>
        <ul class="hec_subList hec_classificationList">
          <li v-for="(items,index) in queryQuestion.type.data" :key="index" @click="changeClassification(items)" :class="items === queryQuestion.subType ? 'liActive':''">{{items.aliasname}}</li>
        </ul>
      </div>
      <div class="hec_subBox hec_contentStatus">
        <span>状态：</span>
        <ul class="hec_subList hec_contentStatusList">
          <li v-for="(items,index) in queryStatusList" :key="index" @click="changeStatus(items)" :class="items === queryQuestion.status ? 'liActive':''">{{items}}</li>
        </ul>
      </div>
      <div class="hec_subBox hec_consultationType">
        <span>咨询类型：</span>
        <ul class="hec_subList hec_hec_consultationTypeList">
          <li v-for="(items,index) in consultationList" :key="index" @click="changeConsultation(items)" :class="items === queryQuestion.consultation ? 'liActive':''">{{items}}</li>
        </ul>
      </div>
      <div class="hec_content">
        <div class="hec_contentList" v-for="(item,index) in questionList" :key="index">
          <div class="hec_contentList_left">
            <a href=""><img :src="item.pic" alt="">
              <span></span>
            </a>
          </div>
          <div class="hec_contentList_center">

          </div>
          <div class="hec_contentLisst_right">

          </div>
        </div>
        <div class="hec_contentControlBtn">
          <input type="text" value="输入页数">
          <button>跳转</button>
          <button>上一页</button>
          <button>下一页</button>
        </div>
      </div>
    </div>
    <div class="hec_right">
      <div class="hec_userInfo_box">
        <!-- v-if做用户的显示  用户信息（放一些头像，积分等级，艾特币之类的）-->
        <div class="hec_userInfo_title">
          <span>用</span>
          <span>户</span>
          <span>信</span>
          <span>息</span>
        </div>
        <!-- 未登录显示UI -->
        <div class="hec_loginBox" v-if="!isLogin">
          <a href="" class="hec_loginPic">
            <span class="fa fa-user-circle-o"></span>
          </a>
          <a href="" class="hec_loginBtn">立即登录</a>
          <div class="hec_loginPrivileges">
            <span>登录特权</span>
          </div>
          <ul class="hec_privilegesList">
            <li>
              <img src="../../../static/index/images/help.png">
              <span>发布求助</span>
            </li>
            <li>
              <img src="../../../static/index/images/money.png">
              <span>赚取赏金</span>
            </li>
            <li>
              <img src="../../../static/index/images/article.png">
              <span>发表文章</span>
            </li>
            <li>
              <img src="../../../static/index/images/gift.png">
              <span>兑换礼品</span>
            </li>
          </ul>
        </div>
        <!-- 登录后显示UI(用户信息) -->
        <div class="hec_userInfo">
          <div class="hec_userPicBox">
            <a href="" class="hec_userPic">
              <img :src="userInfo.userPic">
              <span class="hec_userPic_surround"></span>
            </a>
            <div class="hec_account">
              <a href="">{{userInfo.userName}}</a>
              <span><img src="../../../static/index/images/signout.png" title="退出登录"></span>
            </div>
          </div>
          <ul class="hec_userTextInfo">
            <li>
              <span>
                <img src="../../../static/index/images/userType.png">
                <i>账号类型：</i>
              </span>
              <span>普通用户</span>
            </li>
            <li>
              <span> <img src="../../../static/index/images/money.png">
                <i>艾特儿币：</i>
              </span>
              <span>￥999</span>
            </li>
            <li>
              <span><img src="../../../static/index/images/integral.png">
                <i>积分数量：</i>
              </span>
              <span>99999</span>
            </li>
            <li>
              <span><img src="../../../static/index/images/fabulous.png">
                <i>获赞总量：</i>
              </span>
              <span>9876</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="hec_rankingList">
        选项卡效果-问题排行/活跃用户排行 <br> 日/周/月
        <br> 这里是排行榜
        <br> 实时列出点击数最多的15条问题
        <br> 1
        <br> 2
        <br> 3
        <br> 4
        <br> ...
        <br> 14
        <br> 15
        <br>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogin: true,
      userInfo: {
        userId: "123",
        userName: "二狗有点二、",
        userPic:
          "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2278739224,3680254183&fm=27&gp=0.jpg",
        userIntegral: "2423",
        userItMoney: "213",
        userType: "普通用户"
      },
      queryQuestion: {
        type: null,
        subType: null,
        status: null,
        consultation: null
      },
      questionInfo: [
        {
          name: "all",
          aliasname: "全部",
          data: []
        },
        {
          name: "web",
          aliasname: "Web前端",
          data: [
            {
              name: "html",
              aliasname: "Html"
            },
            {
              name: "css",
              aliasname: "Css"
            },
            {
              name: "javascript",
              aliasname: "javaScript"
            },
            {
              name: "nodejs",
              aliasname: "node.js"
            },
            {
              name: "jquery",
              aliasname: "jQuery"
            },
            {
              name: "vuejs",
              aliasname: "Vue.js"
            },
            {
              name: "reactjs",
              aliasname: "React.js"
            },
            {
              name: "angularjs",
              aliasname: "Angular.js"
            }
          ]
        },
        {
          name: "uidesign",
          aliasname: "UI设计",
          data: [
            {
              name: "advertisement",
              aliasname: "广告设计"
            },
            {
              name: "webUI",
              aliasname: "网页设计"
            }
          ]
        },
        {
          name: "server",
          aliasname: "服务端",
          data: []
        },
        {
          name: "other",
          aliasname: "其他类型",
          data: []
        }
      ],
      queryStatusList: ["全部", "求助中", "已解决"],
      consultationList: ["全部", "免费咨询", "积分咨询", "收费咨询"],
      questionList: [
        {
          id: "001",
          uuid: "0528",
          pic:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1081097914,2853990963&fm=27&gp=0.jpg",
          type: "",
          subType: "javascript",
          consultationType: "付费",
          consultationNum: "299",
          zanNum: "124",
          readNUm: "999",
          status: "已解决",
          helpTit: "vue中路由全局拦截问题",
          helpCont: "如下图，在vue项目中遇到这样的问题，很难受。。。"
        },
        {},
        {},
        {},
        {},
        {}
      ]
    };
  },
  components: {},
  methods: {
    /**
     * @description 改变类型
     */
    changeType(items, index) {
      this.queryQuestion.type = items;
      console.log(this.queryQuestion);
    },
    /**
     *@description 改变分类
     */
    changeClassification(items, index) {
      this.queryQuestion.subType = items;
    },
    /**
     *@description 改变状态
     */
    changeStatus(items) {
      this.queryQuestion.status = items;
    },
    /**
     *@description 改变咨询类型
     */
    changeConsultation(items) {
      this.queryQuestion.consultation = items;
    }
  },
  created() {}
};
</script>
<style lang='scss' scoped>
.hec_surround {
  width: 1200px;
  margin: 20px auto;
  height: 1000px;
  display: flex;
  justify-content: space-between;
  .hec_left {
    position: relative;
    width: 820px;
    height: 960px;
    background: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    padding: 20px;
    .hec_contentTit {
      width: 140px;
      height: 40px;
      background: #fff;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
      position: absolute;
      left: -20px;
      top: 20px;
      border-radius: 0px 20px 0px 20px;
      text-align: center;
      line-height: 40px;
      font-size: 16px;
      color: #a3a3a3;
      span {
        margin-left: 2px;
      }
    }
    .hec_contentSearch {
      width: 680px;
      height: 40px;
      margin-left: 140px;
      line-height: 40px;
      font-size: 0;
      display: flex;
      justify-content: flex-end;
      input {
        width: 300px;
        height: 32px;
        border-radius: 5px 0 0 5px;
        outline: none;
        border: 1px solid#ccc;
        border-right: none;
        padding: 2px;
        text-indent: 10px;
        vertical-align: middle;
        font-size: 14px;
        color: #9a9a9a;
      }
      button {
        font-size: 14px;
        outline: none;
        border: none;
        cursor: pointer;
        vertical-align: middle;
        display: inline-block;
        text-align: center;
        line-height: 38px;
        width: 120px;
        height: 38px;
        border-radius: 0 5px 5px 0;
        background: rgba(0, 0, 0, 0.8);
        color: #fff;
      }
    }
    .hec_contentType {
      width: 100%;
      height: 40px;
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        display: block;
        width: 100px;
        height: 40px;
        text-align: right;
        line-height: 40px;
        font-size: 16px;
        color: #9a9a9a;
      }
      .hec_contentTypeList {
        flex: 1;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        li {
          width: 80px;
          height: 38px;
          margin: 0 10px;
          line-height: 40px;
          text-align: center;
          color: #9a9a9a;
          cursor: pointer;
          border-bottom: 2px solid transparent;
          transition: all 0.3s;
          &:hover {
            color: gold;
            border-bottom-color: gold;
          }
        }
        .liActive {
          color: gold;
          border-bottom: 2px solid gold;
        }
      }
    }
    .hec_subBox {
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        display: block;
        width: 100px;
        height: 40px;
        text-align: right;
        line-height: 40px;
        font-size: 14px;
        color: #9a9a9a;
      }
      .hec_subList {
        padding-left: 10px;
        flex: 1;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        li {
          width: 70px;
          height: 38px;
          margin: 0 5px;
          line-height: 40px;
          text-align: center;
          color: #9a9a9a;
          cursor: pointer;
          border-bottom: 2px solid transparent;
          transition: all 0.3s;
          &:hover {
            color: gold;
            border-bottom-color: gold;
          }
        }
        .liActive {
          border-bottom: 2px solid gold;
        }
      }
    }
    .hec_content {
      .hec_contentList {
        width: 100%;
        height: 100px;
        margin-top: 20px;
        padding: 0 10px;
        box-sizing: border-box;
        border: 1px solid red;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .hec_contentList_left {
          a {
            position: relative;
            img {
              width: 60px;
              height: 60px;
              border-radius: 50%;
            }
            &:hover{
              span{
                display: block;
              }
            }
            span {
              display: none;
              width: 60px;
              height: 60px;
              position: absolute;
              border-radius: 50%;
              left: 0;
              top: -60px;
              background: rgba(255, 255, 255, 0.2);
            }
          }
        }
      }
    }
  }
  .hec_right {
    width: 320px;
    height: 1000px;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .hec_userInfo_box {
      position: relative;
      width: 100%;
      height: 360px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
      padding: 20px 20px 10px;
      box-sizing: border-box;
      .hec_userInfo_title {
        position: absolute;
        right: -20px;
        top: 70px;
        width: 40px;
        border-radius: 0px 20px 0px 20px;
        height: 100px;
        padding: 20px 0;
        background: #fff;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        font-size: 14px;
        color: #a1a1a1;
      }
      .hec_loginBox {
        width: 100%;
        height: 100%;
        .hec_loginPic {
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
        .hec_loginBtn {
          display: block;
          width: 90%;
          margin: 10px auto;
          height: 50px;
          line-height: 50px;
          text-align: center;
          font-size: 16px;
          border-radius: 5px;
          background: linear-gradient(to right, gold, orange);
        }
        .hec_loginPrivileges {
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
        .hec_privilegesList {
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
      .hec_userInfo {
        width: 100%;
        height: 100%;
        .hec_userPicBox {
          width: 100%;
          height: 60px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .hec_userPic {
            position: relative;
            width: 60px;
            height: 60px;
            padding-left: 40px;
            &:hover .hec_userPic_surround {
              display: block;
            }
            img {
              width: 60px;
              height: 60px;
              border-radius: 50%;
            }
            .hec_userPic_surround {
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
          .hec_account {
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
        .hec_userTextInfo {
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
    .hec_rankingList {
      width: 100%;
      height: 620px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>