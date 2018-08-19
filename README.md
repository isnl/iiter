# 艾提儿（临时名称） web前端互助社区

> A Vue.js project

## Build Setup

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
# 命名规则
# 文件夹命名  - 小写
# vue文件命名  大驼峰
# 路由的path路径  全部为小写，name和component为大驼峰
# class命名 以一个vue组件举栗子 例：ArticleContent.vue，则其当前组件外面的最大盒子class名为第一个单词的前两个字母，和后面单词的第一个字母+surround（arc_surround）,盒子里面内容的class命名前缀则以 arc_ 为标准，语义化命名。如有三个单词，例HelpContentTest.vue  则前缀对应为 hect_
# vue组件的模板 
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

# 全局盒子阴影
# box-shadow:0 0 20px rgba(0,0,0,.2)

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
