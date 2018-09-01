<template>
  <div class="arc_surround">
    <div class="arc_left">
      <div class="arc_recommond">
        随机推荐文章 可刷新 可滑动播放
        <br>
        <br> 标题可以做一些贴出效果 好看 稍微出盒子
      </div>
      <div class="arc_label">
        标签云
      </div>
    </div>
    <div class="arc_right">
      博文模块<br> 筛选-按类型筛选/按阅读量排序
      <br> 搜索
      <br> 上一页下一页
      <br>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {},
  created() {}
};
</script>
<style lang='scss' scoped>
.arc_surround {
  width: 1200px;
  height: 600px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  .arc_left {
    width: 420px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .arc_recommond {
      width: 100%;
      height: 380px;
      background: #fff;
      box-shadow:0 0 20px rgba(102, 102, 102, 0.1);
    }
    .arc_label {
      width: 100%;
      height: 200px;
      background: #fff;
      box-shadow:0 0 20px rgba(102, 102, 102, 0.1);
    }
  }
  .arc_right {
    width: 760px;
    height: 100%;
    background: #fff;
    box-shadow:0 0 20px rgba(102, 102, 102, 0.1);
  }
}
</style>