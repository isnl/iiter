# 艾特儿（临时名称） web前端互助社区

> A Vue.js project 旨在为前端工程师打造一个快速解决问题的友好社区重点内容

### Build Setup(运行)

``` bash
# install dependencies-安装依赖
npm install

# serve with hot reload at localhost:8080-运行
npm run dev

# build for production with minification-发布
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
### 命名规则

 1. 文件夹命名  - 小写
 2. vue文件命名  大驼峰
 3. 路由的path路径  全部为小写，name和component为大驼峰
 4. class命名 以一个vue组件举栗子。例：***ArticleContent.vue***，则其当前组件外面的最大盒子class名为第一个单词的前两个字母，和后面单词的第一个字母+surround（***arc_surround***）,盒子里面内容的class命名前缀则以
    arc_ 为标准，语义化命名。如有三个单词，例HelpContentTest.vue  则前缀对应为 ***hect_***

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
box-shadow:0 0 20px rgba(102, 102, 102, 0.1);
```
### 全局标题阴影
``` bash
box-shadow:0 0 20px rgba(0, 0, 0, 0.4);
```
</br>
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

this.$message({
  message: "错误消息",
  type: "error"
})
```
### 使用 ES6 风格编码源码 / 定义变量使用 let / 定义常量使用 const / 使用 export ，import 模块化







### 开发人员
前端 - candy。如果二狗同学想参与的话，安排安排！
后端 - oliver 同 学
### 项目周期
2018/08/18 - 2018/12/30     共计134天






### 打卡签到
#### 2018/08/18   周六  
> 开工

#### 2018/08/19   周日
> 完善右侧用户信息栏。

#### 2018/08/20   周一  
> 问题求助板块搜索框添加

#### 2018/08/21  周二  
> 写了功能需求  做了问题求助板块的分类选择

#### 2018/08/31 周五   
> 问题求助列表页

#### 2018/09/01  周六   
> 完善问题求助列表页

#### 2018/09/02 周日
> 完善问题排行榜页，封装返回顶部组件


