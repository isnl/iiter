<template>
  <div class="ral_surround">
    <div class="ral_title">
      <span>问</span>
      <span>题</span>
      <span>排</span>
      <span>行</span>
    </div>
    <div class="ral_control">
      <!-- 滑过高亮   点击上凸效果 -->
      <span @click="changeItem('day')" :class="actived==='day'?'ral_actived':''">日榜</span>
      <span @click="changeItem('month')" :class="actived==='month'?'ral_actived':''">月榜</span>
      <span @click="changeItem('all')" :class="actived==='all'?'ral_actived':''">总榜</span>
    </div>
    <div class="ral_box">
      <li class="ralb_list" v-for="(item,index) in questionList[actived]" :key="index">
        <span>{{index + 1}}</span>
        <a href="" :title="item.content">{{item.content}}</a>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      actived: "day",
      questionList: {
        day: [
          {
            content:
              "世界最先进的步兵“神器”，因何美国惨遭失败，中国却成功装备？",
            clickNum: "9428"
          },
          {
            content: "蔡当局将花8718万用于维安 台网友：不知民间疾苦",
            clickNum: "8462"
          },
          {
            content: "印度野心勃勃启动载人航天，想一步到位赶超中俄！",
            clickNum: "7428"
          },
          {
            content: "18年两次“卡脖子”报道，中国科技经历了什么？",
            clickNum: "6541"
          },
          {
            content: "即将开打？顿涅茨克政府：乌克兰开始准备进攻顿巴斯地区",
            clickNum: "6211"
          },
          {
            content:
              "在世界上某些被人遗忘的角落里 学生们的开学第一课是这样上的",
            clickNum: "6102"
          },
          {
            content: "外形实在抢眼，俄罗斯摄影师镜头下的武直-10帅出了新高度",
            clickNum: "5133"
          },
          {
            content: "俄战机来绕岛，日本人没辙干瞪眼！美国驻日战斗机干脆没升空",
            clickNum: "5039"
          },
          {
            content: "俄媒：解放军055新大驱世界第三 中国有望在西太平洋占上风",
            clickNum: "4019"
          },
          {
            content: "俄最强驱逐舰修六年还未完工，已经锈迹斑斑好似破烂货",
            clickNum: "3984"
          },
          {
            content: "旋风司令与日军5次白刃战，许世友五体投地：胆有鸡蛋大！",
            clickNum: "3765"
          },
          {
            content: "德军仅伤亡4万，为何俘杀50万苏军？朱可夫终生不愿提这一仗",
            clickNum: "3412"
          },
          {
            content: "“富士综合火力演习”首曝日本神秘武器：未来夺岛作战关键",
            clickNum: "3015"
          },
          {
            content: "俄军这小护卫舰像大爷：黑龙江上造6年，造好被抬到太平洋",
            clickNum: "2009"
          },
          {
            content: "美日四艘航母出现在中国家门口，联合演习频率越来越高",
            clickNum: "1065"
          }
        ],
        month: [
          {
            content: "设计高端大气的英文风格企业网站(4页)",
            clickNum: "6541"
          },
          {
            content: "网站前端修改以及增加积分和会员充值功能",
            clickNum: "6211"
          },
          {
            content: "前端切图",
            clickNum: "6102"
          },
          {
            content: "h5前端调整页面，并增加一个手机端",
            clickNum: "9428"
          },
          {
            content: "6个小程序页面",
            clickNum: "8462"
          },
          {
            content: "笔记本封面设计！",
            clickNum: "7428"
          },
          {
            content: "微信公众号的UI设计",
            clickNum: "5133"
          },
          {
            content: "设计微信学习交流群",
            clickNum: "5039"
          },
          {
            content: "德军仅伤亡4万，为何俘杀50万苏军？朱可夫终生不愿提这一仗",
            clickNum: "3412"
          },
          {
            content: "“富士综合火力演习”首曝日本神秘武器：未来夺岛作战关键",
            clickNum: "3015"
          },
          {
            content: "俄军这小护卫舰像大爷：黑龙江上造6年，造好被抬到太平洋",
            clickNum: "2009"
          },
          {
            content: "美日四艘航母出现在中国家门口，联合演习频率越来越高",
            clickNum: "1065"
          },
          {
            content: "俄媒：解放军055新大驱世界第三 中国有望在西太平洋占上风",
            clickNum: "4019"
          },
          {
            content: "俄最强驱逐舰修六年还未完工，已经锈迹斑斑好似破烂货",
            clickNum: "3984"
          },
          {
            content: "旋风司令与日军5次白刃战，许世友五体投地：胆有鸡蛋大！",
            clickNum: "3765"
          }
        ],
        all: [
          {
            content: "即将开打？顿涅茨克政府：乌克兰开始准备进攻顿巴斯地区",
            clickNum: "6211"
          },
          {
            content:
              "在世界上某些被人遗忘的角落里 学生们的开学第一课是这样上的",
            clickNum: "6102"
          },
          {
            content: "外形实在抢眼，俄罗斯摄影师镜头下的武直-10帅出了新高度",
            clickNum: "5133"
          },
          {
            content: "俄战机来绕岛，日本人没辙干瞪眼！美国驻日战斗机干脆没升空",
            clickNum: "5039"
          },
          {
            content:
              "世界最先进的步兵“神器”，因何美国惨遭失败，中国却成功装备？",
            clickNum: "9428"
          },
          {
            content: "蔡当局将花8718万用于维安 台网友：不知民间疾苦",
            clickNum: "8462"
          },
          {
            content: "印度野心勃勃启动载人航天，想一步到位赶超中俄！",
            clickNum: "7428"
          },
          {
            content: "旋风司令与日军5次白刃战，许世友五体投地：胆有鸡蛋大！",
            clickNum: "3765"
          },
          {
            content: "德军仅伤亡4万，为何俘杀50万苏军？朱可夫终生不愿提这一仗",
            clickNum: "3412"
          },
          {
            content: "“富士综合火力演习”首曝日本神秘武器：未来夺岛作战关键",
            clickNum: "3015"
          },
          {
            content: "俄军这小护卫舰像大爷：黑龙江上造6年，造好被抬到太平洋",
            clickNum: "2009"
          },
          {
            content: "美日四艘航母出现在中国家门口，联合演习频率越来越高",
            clickNum: "1065"
          },
          {
            content: "18年两次“卡脖子”报道，中国科技经历了什么？",
            clickNum: "6541"
          },
          {
            content: "俄媒：解放军055新大驱世界第三 中国有望在西太平洋占上风",
            clickNum: "4019"
          },
          {
            content: "俄最强驱逐舰修六年还未完工，已经锈迹斑斑好似破烂货",
            clickNum: "3984"
          }
        ]
      }
    };
  },
  components: {},
  methods: {
    changeItem(val) {
      this.actived = val;
    }
  },
  created() {}
};
</script>
<style lang='scss' scoped>
.ral_surround {
  position: relative;
  width: 100%;
  height: 620px;
  background: #fff;
  box-shadow: 0 0 20px rgba(102, 102, 102, 0.1);
  padding: 20px;
  padding-right: 30px;
  box-sizing: border-box;
  .ral_title {
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
  .ral_control {
    display: flex;
    width: 100%;
    height: 50px;
    padding: 0 20px;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    color: #9a9a9a;
    span {
      width: 90px;
      height: 30px;
      border-radius: 5px;
      line-height: 30px;
      cursor: pointer;
      text-align: center;
      display: inline-block;
      transition: all 0.3s;
      &:hover {
        color: #fff;
        background: #2b85e4;
      }
    }
    .ral_actived {
      color: #fff;
      background: #2b85e4;
    }
  }
  .ral_box {
    width: 100%;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    .ralb_list {
      width: 100%;
      height: 35px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        width: 30px;
        margin: 0 5px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        border-radius: 5px;
        background: #f3f3f3;
        color: #6a6a6a;
      }
      a {
        flex: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #6a6a6a;
      }
      &:nth-child(1) {
        span {
          color: #fff;
          background: #ff2a2a;
        }
      }
      &:nth-child(2) {
        span {
          color: #fff;
          background: #ff7171;
        }
      }
      &:nth-child(3) {
        span {
          color: #fff;
          background: #ff9900;
        }
      }
      &:nth-child(4) {
        span {
          color: #fff;
          background: #ffcc00;
        }
      }
      &:nth-child(5) {
        span {
          color: #fff;
          background: #e7d48e;
        }
      }
    }
  }
}
</style>