<template>
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
                    <div class="hec_cc_top">
                        <a href="">
                            <h3>{{item.helpTit}}</h3>
                        </a>
                    </div>
                    <div class="hec_cc_center">
                        <div class="hec_ccc_userlabel">
                            <a class="hec_cccu_username" href="">{{item.username}}</a>
                            <div class="hec_cccu_usergrade">
                                <img src="../../../../static/index/images/grade.png">
                                <span>{{item.usergrade}}</span>
                            </div>
                        </div>
                        <div class="hec_ccc_questionlabel">
                            <div class="hec_cccq_type">
                                <img src=".././../../../static/index/images/label.png">
                                <span>{{item.subType}}</span>
                            </div>
                            <div class="hec_cccq_status">
                                <span>{{item.status}}</span>
                                <i class="el-icon-success"></i>
                                <!-- <i class="el-icon-question"></i> -->
                                <!-- <i class="el-icon-error "></i> -->
                            </div>
                        </div>
                    </div>
                    <div class="hec_cc_bottom">
                        <div class="hec_ccb_time">{{item.time}}</div>
                        <div class="hec_ccb_listinfo">
                            <div class="hec_ccbl_list hec_ccbl_fabulous">
                                <img src="../../../../static/index/images/fabulousgray.png">
                                <span>{{item.zanNum}}</span>
                            </div>
                            <div class="hec_ccbl_list hec_ccbl_visit">
                                <img src="../../../../static/index/images/read.png">
                                <span>{{item.readNum}}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hec_contentList_right">
                    <div class="hec_cr_type" v-show="item.consultationType !== '0'">
                        赏金：
                        <span>￥{{item.consultationNum}}</span>
                    </div>
                    <a class="hec_cr_details" href="">查看详情</a>
                </div>
                <div class="hec_typeImg">
                    <!-- 类型角标 -->
                    <img v-if="item.consultationType === '0'||item.consultationType === '1'" src="../../../../static/index/images/frees.png">
                    <img v-if="item.consultationType === '2'" src="../../../../static/index/images/pay.png">
                </div>
            </div>
        </div>
        <div class="hec_control">
            <div class="hec_control_btn">
                <button class="hec_prev_btn">上一页</button>
                <button class="hec_next_btn">下一页</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
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
      queryStatusList: ["全部", "求助中", "已解决", "已取消"],
      consultationList: ["全部", "免费咨询", "积分咨询", "收费咨询"],
      questionList: [
        {
          id: "001",
          uuid: "0528",
          username: "活捉一枚小可爱、",
          usergrade: "32",
          pic:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1081097914,2853990963&fm=27&gp=0.jpg",
          type: "",
          subType: "javascript",
          consultationType: "0",
          consultationNum: "299.00",
          time: "2018-05-20 20:00:00",
          zanNum: "124",
          readNum: "999",
          status: "已解决",
          helpTit: "vue中路由全局拦截问题。求大神解决！！！",
          helpCont: "如下图，在vue项目中遇到这样的问题，很难受。。。"
        },
        {
          id: "001",
          uuid: "0528",
          username: "活捉一枚老可爱、",
          usergrade: "12",
          pic:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1583835424,2304751549&fm=27&gp=0.jpg",
          type: "",
          subType: "jQuery",
          consultationType: "1",
          consultationNum: "199.00",
          time: "2018-05-20 20:00:00",
          zanNum: "129",
          readNum: "1255",
          status: "已解决",
          helpTit: "jQuery中的选择器相关",
          helpCont: "如下图，在vue项目中遇到这样的问题，很难受。。。"
        },
        {
          id: "001",
          uuid: "0528",
          username: "活捉一枚二狗子、",
          usergrade: "12",
          pic:
            "https://imgsa.baidu.com/forum/w%3D580/sign=2ec524ef06f431adbcd243317b37ac0f/4f0c5b9659ee3d6dc98946b649166d224f4ade37.jpg",
          type: "",
          subType: "Css",
          consultationType: "2",
          consultationNum: "199.00",
          time: "2018-05-20 20:00:00",
          zanNum: "265",
          readNum: "1584",
          status: "已解决",
          helpTit: "求教，如何去掉li中前面的默认样式",
          helpCont: "如下图，在vue项目中遇到这样的问题，很难受。。。"
        },
        {
          id: "001",
          uuid: "0528",
          username: "活捉一枚小可爱、",
          usergrade: "32",
          pic:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1081097914,2853990963&fm=27&gp=0.jpg",
          type: "",
          subType: "javascript",
          consultationType: "0",
          consultationNum: "299.00",
          time: "2018-05-20 20:00:00",
          zanNum: "124",
          readNum: "999",
          status: "已解决",
          helpTit: "vue中路由全局拦截问题。求大神解决！！！",
          helpCont: "如下图，在vue项目中遇到这样的问题，很难受。。。"
        },
        {
          id: "001",
          uuid: "0528",
          username: "活捉一枚老可爱、",
          usergrade: "12",
          pic:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1583835424,2304751549&fm=27&gp=0.jpg",
          type: "",
          subType: "jQuery",
          consultationType: "1",
          consultationNum: "199.00",
          time: "2018-05-20 20:00:00",
          zanNum: "129",
          readNum: "1255",
          status: "已解决",
          helpTit: "jQuery中的选择器相关",
          helpCont: "如下图，在vue项目中遇到这样的问题，很难受。。。"
        },
        {
          id: "001",
          uuid: "0528",
          username: "活捉一枚二狗子、",
          usergrade: "12",
          pic:
            "https://imgsa.baidu.com/forum/w%3D580/sign=2ec524ef06f431adbcd243317b37ac0f/4f0c5b9659ee3d6dc98946b649166d224f4ade37.jpg",
          type: "",
          subType: "Css",
          consultationType: "2",
          consultationNum: "199.00",
          time: "2018-05-20 20:00:00",
          zanNum: "265",
          readNum: "1584",
          status: "已解决",
          helpTit: "求教，如何去掉li中前面的默认样式",
          helpCont: "如下图，在vue项目中遇到这样的问题，很难受。。。"
        }
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
.hec_left {
  position: relative;
  width: 820px;
  height: 960px;
  background: #fff;
  box-shadow: 0 0 20px rgba(102, 102, 102, 0.1);
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
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      display: block;
      width: 100px;
      height: 40px;
      text-align: right;
      line-height: 40px;
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
    padding: 0 10px;
    .hec_contentList {
      position: relative;
      width: 100%;
      height: 100px;
      margin-top: 15px;
      padding: 0 10px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 0 20px rgba(204, 204, 204, 0.5);
      border-radius: 5px;
      transition: all 0.5s;
      &:hover {
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
        transform: translateY(-4px);
      }
      .hec_contentList_left {
        a {
          position: relative;
          img {
            width: 60px;
            height: 60px;
            border-radius: 50%;
          }
          &:hover {
            span {
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
      .hec_contentList_center {
        width: 540px;
        height: 100%;
        padding: 10px 0;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .hec_cc_top {
          width: 100%;
          align-self: flex-start;
          a {
            h3 {
              width: 100%;
              font-size: 16px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              color: #666;
            }
          }
        }
        .hec_cc_center {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .hec_ccc_userlabel {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .hec_cccu_username {
              margin-right: 10px;
            }
            .hec_cccu_usergrade {
              margin-left: 10px;
              color: #9a9a9a;
              display: flex;
              align-items: center;
              img {
                width: 30px;
                height: 30px;
              }
              span {
                padding: 0 5px;
              }
            }
          }
          .hec_ccc_questionlabel {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #9a9a9a;
            .hec_cccq_type {
              display: flex;
              align-items: center;
              margin-right: 10px;
              img {
                width: 18px;
                height: 18px;
              }
              span {
                padding: 0 5px;
              }
            }
            .hec_cccq_status {
              margin-left: 10px;
              .el-icon-success {
                color: #19be6b;
              }
              .el-icon-question {
                color: #ff9900;
              }
              .el-icon-error {
                color: #ed4014;
              }
            }
          }
        }
        .hec_cc_bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .hec_ccb_time {
            color: #7a7a7a;
          }
          .hec_ccb_listinfo {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #3a3a3a;
            .hec_ccbl_list {
              display: flex;
              align-items: center;
              color: #9a9a9a;
              img {
                width: 20px;
              }
              span {
                padding: 0 5px;
              }
            }
            .hec_ccbl_fabulous {
              margin-right: 10px;
            }
            .hec_ccbl_visit {
              margin-left: 10px;
            }
          }
        }
      }
      .hec_contentList_right {
        width: 140px;
        height: 100%;
        padding: 10px 0;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #9a9a9a;
        .hec_cr_type {
          padding-top: 10px;
          flex: 1;
          span {
            font-size: 16px;
            color: #f60;
          }
        }
        .hec_cr_details {
          width: 120px;
          height: 30px;
          color: #fff;
          font-size: 12px;
          text-align: center;
          line-height: 30px;
          border-radius: 5px;
          background: #2d8cf0;
          z-index: 9;
          &:hover {
            background: #5cadff;
          }
        }
      }
      .hec_typeImg {
        position: absolute;
        right: -6px;
        top: -6px;
        img {
          width: 100px;
          height: 100px;
        }
      }
    }
  }
  .hec_control {
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    .hec_control_btn {
      button {
        transition: all 0.1s;
        width: 200px;
        height: 40px;
        border: none;
        outline: none;
        cursor: pointer;
        background: #2d8cf0;
        border-radius: 5px;
        color: #fff;
        &:hover {
          background: #5cadff;
        }
      }
    }
  }
}
</style>