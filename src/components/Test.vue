<template>
  <div class="box">
    <div class="header"></div>
    <div class="content">
     <mt-loadmore :top-method="loadTop"  :bottom-method="loadBottom" :bottom-all-loaded="allLoaded"  ref="loadmore" topLoadingText="加载中">
  <ul>
    <li v-for="(item,index) in list" :key="index">{{ item }}</li>
  </ul>
</mt-loadmore>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      allLoaded: false
    };
  },
  computed: {},
  methods: {
    loadBottom() {
      //拿出list最后一个  每次给后面添加10条数据 (根据后台返回的内容添加)
      let tempNumber = this.list[this.list.length-1];
      for(var i = tempNumber;i<tempNumber+10;i++){
        this.list.push(i)
      }
      this.allLoaded = true;// 若数据已全部获取完毕
      this.$refs.loadmore.onBottomLoaded();
      this.allLoaded = false
    },
    loadTop() {
      this.$refs.loadmore.onTopLoaded();
    }
  }
};
</script>
<style scoped>
.box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.header {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #333;
}
.content {
  width: 100%;
  overflow-y: auto;
  flex: 1;
}
.content ul li {
  line-height: 50px;
  text-align:center;
  border-bottom: 1px dashed #ccc;
}
.footer {
  width: 100%;
  height: 60px;
  border-top: 1px solid #333;
}
</style>
