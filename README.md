# 艾特儿（临时名称） web前端互助社区

> A Vue.js project 旨在为前端工程师打造一个快速解决问题的友好社区

### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
### 命名规则
文件夹命名  - 小写
vue文件命名  大驼峰
路由的path路径  全部为小写，name和component为大驼峰
class命名 以一个vue组件举栗子 例：ArticleContent.vue，则其当前组件外面的最大盒子class名为第一个单词的前两个字母，和后面单词的第一个字母+surround（arc_surround）,盒子里面内容的class命名前缀则以 arc_ 为标准，语义化命名。如有三个单词，例HelpContentTest.vue  则前缀对应为 hect_
### vue组件的模板 
``` bash
<template>
  <div class=""></div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  components: {},
  methods: {},
  created(){}
}

</script>
<style lang='scss' scoped>
</style>
```

### 全局盒子阴影
``` bash
box-shadow:0 0 20px rgba(0,0,0,.2)
```

### 全局弹窗消息提示 


```javascript
this.$message("提示消息");

this.$message({
  message: "成功消息",
  type: "success"
});

this.$message({
  message: "警告消息",
  type: "warning"
});

this.$message.error("错误消息");
```

### 使用 ES6 风格编码源码 定义变量使用 let ,定义常量使用 const 使用 export ，import 模块化







### 开发人员
前端-candy 如果二狗同学想参与的话，安排安排!
后端-oliver
### 项目周期
2018/08/18 - 2018/12/30   共计134天






### 打卡签到
##### 2018/08/18  第一天  周六  
> 开工啦  大吉大利 此时应该有鞭炮齐鸣，掌声雷动，手动BTS

##### 2018/08/19  第二天  周日   23.59  提交代码  完善右侧用户信息栏。
> 写了一天代码，晚7点多钟出去跑步跑了五公里，路上遇到一个开着凯迪拉克蛮不讲理的蹭了别人车的车主在骂酒店的一个保安人员，理由是他挪车的时候是保安指挥的，大庭广众之下语言之粗鲁简直令人乍舌。跑完步回来的路上前面有个小姐姐在给另一个小姐姐说：我就是学这个的，java，随即感叹，这诺大的世界可真小呀，也是同道中人呢，路还长着呢，在心里默默祝福吧。恩，直到晚上回来吃完饭二狗同学都没理我！！！继续闷声写代码，可以说是很伤心了。本来是想要给她普及一下服务器以及域名相关的知识的，但她好像看电视剧很忙的样子，就算了吧...晚安，github
