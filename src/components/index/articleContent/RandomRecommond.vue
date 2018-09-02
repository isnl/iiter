<template>
  <div class="rar_surround">
    <common-title titleName="随机推荐" refresh="true" @titleRefresh="randomRefresh"></common-title>
    <ul class="rar_listBox">
      <li v-for="(item,index) in articleList" :key="index" :title="item.content">
        <i></i>
        <span>{{item.content}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import CommonTitle from "../../common/CommonTitle.vue";
export default {
  data() {
    return {
      articleList: [
        {
          content: "在vue中使用Element-UI,安装以及后续一系列操作啊啊啊啊"
        },
        {
          content: "jQuery的曾连续选择器呀呀呀有没有占位字当然有的啊"
        },
        {
          content: "vue的父子传值问题，vue中如何使用vuex"
        },
        {
          content: "css3制作无敌炫酷吊炸天的动画"
        },
        {
          content: "javascript面向对象"
        },
        {
          content: "看完这个，你必须得明白深拷贝和浅拷贝"
        },
        {
          content: "深入理解原型链与原型链继承"
        },
        {
          content: "node.js的安装与卸载"
        },
        {
          content: "linux系统一键安装php环境"
        },
        {
          content: "javascript从入门到放弃，如何拒绝自杀性加班"
        }
      ]
    };
  },
  components: {
    CommonTitle
  },
  methods: {
    /**
     * @description 随机刷新数据
     */
    randomRefresh() {}
  },
  created() {}
};
</script>
<style lang='scss' scoped>
.rar_surround {
  width: 100%;
  height: 380px;
  background: #fff;
  box-shadow: 0 0 20px rgba(102, 102, 102, 0.1);
  padding: 20px;
  box-sizing: border-box;
  .rar_listBox {
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    li {
      width: 100%;
      height: 30px;
      color: #6a6a6a;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      i {
        display: inline-block;
        width: 8px;
        height: 8px;
        margin:0 10px;
        background: url("../../../../static/common/imgs/circle.png");
        background-size: 8px 8px;
      }
      span {
        flex: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>