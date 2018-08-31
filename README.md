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
> 开工啦  大吉大利 此时应该有鞭炮齐鸣，掌声雷动，手动BTS


#### 2018/08/19   周日   23.59  提交代码  完善右侧用户信息栏。
> &ensp;&ensp;&ensp;&ensp;写了一天代码，晚7点多钟出去跑步跑了五公里，路上遇到一个开着凯迪拉克蛮不讲理的蹭了别人车的车主在骂酒店的一个保安人员，理由是他挪车的时候是保安指挥的，大庭广众之下语言之粗鲁简直令人乍舌。</br>
&ensp;&ensp;&ensp;&ensp;跑完步回来的路上前面有个小姐姐在给另一个小姐姐说：我就是学这个的，java，随即感叹，这诺大的世界可真小呀，也是同道中人呢，路还长着呢，在心里默默祝福吧。</br>
&ensp;&ensp;&ensp;&ensp;恩，直到晚上回来吃完饭二狗同学都没理我！！！继续闷声写代码，可以说是很伤心了。本来是想要给她普及一下服务器以及域名相关的知识的，但她好像看电视剧很忙的样子，就算了吧...晚安，github


#### 2018/08/20   周一   23.59  提交代码  问题求助板块搜索框添加
> &ensp;&ensp;&ensp;&ensp;新的一周  新的一天  早上就出师不利  平路上差点被一个小石头绊倒，气......</br>
&ensp;&ensp;&ensp;&ensp;二狗同学一早上又没理我。</br>
&ensp;&ensp;&ensp;&ensp;心情很郁闷，以至于，平常周一总要打那么一会盹的我上班竟没有一丝睡意。这就有点匪夷所思了，原来心里难过的时候，精神状态是很亢奋的。</br>
&ensp;&ensp;&ensp;&ensp;悲伤辣么大……</br>
&ensp;&ensp;&ensp;&ensp;中午吃过饭给二狗同学发去了一段canvas代码，代码运行显示出来的内容，是个大红心，运行出来后，她说点赞正好需要这个图，纳尼？？？难道不是代表我喜欢你的意思吗？</br>
&ensp;&ensp;&ensp;&ensp;下午又主动找我聊天啦，是在她工作特别困打瞌睡的时候，这傻狗还真是调皮的可爱呢。</br>
&ensp;&ensp;&ensp;&ensp;下班后该去世纪金花的，又跑去民生了，可以说是一天不犯二都不行的傻狗了。</br>

#### 2018/08/21  周二  呃。提交代码时间，已经过了周二了吧   写了功能需求  做了问题求助板块的分类选择
> &ensp;&ensp;&ensp;&ensp;早晨去公司上班的时候，迎面走来的一个小哥，嘴里哼着一首老歌，歌曲名是《活埋》，经过我的时候，正好飘过：难道这就是你曾经skr(说)的爱，谁能告诉我，小哥经历了什么？？？</br>
&ensp;&ensp;&ensp;&ensp;路上二狗同学说她的清梦被一连串的南无阿弥陀佛给吵醒，阿弥陀佛，善哉善哉，施主你该起床写代码了。</br>
&ensp;&ensp;&ensp;&ensp;晚上下班准备做我拿手的炒麻食请张泽同学大饱口福来着，中途被舍友叫去吃鱼了。自此便一发不可收拾，生生将我吃到了从来未达到过的理想体重，65公斤，可以说是人生巅峰了。</br>
&ensp;&ensp;&ensp;&ensp;回来后当然是继续撸代码呀，二狗同学说她要赶月底搬房子，收拾行李ing......</br>
&ensp;&ensp;&ensp;&ensp;听见窗外传来一阵躁动的声音，打开窗户往楼下望去，竟下起雨了，而且风头丝毫不减，愈下愈大。突然就想到，夜来风雨声，花落知多少这首忘记了诗人究竟是杜甫还是李白的名诗。</br>
&ensp;&ensp;&ensp;&ensp;心里突然觉得异常焦躁，不安。。。终究还是熬到了12点之后，眼睛好酸呀。睡觉吧。</br>

#### 2018/08/31 周五   问题求助列表页
> &ensp;&ensp;&ensp;&ensp;昨晚12点多钟的时候莫名停电mj了，直到早上闹钟响电也没有来，热出新高度了。。。</br>
&ensp;&ensp;&ensp;&ensp;下午填了转正申请表，5.28号上班到现在，也算是三个月了。不得不感慨这时间过得可真快。 </br>
&ensp;&ensp;&ensp;&ensp;下班后：二狗同学呀，今天的风好大的。出去路上小心点哦，要是风把你吹到我身边，我可是不会还的。
