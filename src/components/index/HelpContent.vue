<template>
<div class="hec_surround">
    <div class="hec_left">
        问题求助板块<br>
        筛选功能<br>
        搜索功能<br>
        问题列表<br>
        上一页下一页<br>

    </div>
    <div class="hec_right">
        <div class="hec_userInfo">
            用户信息（放一些头像，积分等级，艾特币之类的）
        </div>
        <div class="hec_rankingList">
            选项卡效果-问题排行/活跃用户排行 <br> 日/周/月
            <br>
            这里是排行榜
            <br>  实时列出点击数最多的15条问题
            <br>
            1<br>
            2<br>
            3<br>
            4<br>
            ...<br>
            14<br>
            15<br>
        </div>
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
.hec_surround {
  width: 1200px;
  margin: 20px auto;
  height: 800px;
  display: flex;
  justify-content: space-between;
  .hec_left {
    width: 860px;
    height: 800px;
    background: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }
  .hec_right {
    width: 320px;
    height: 800px;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .hec_userInfo {
      width: 100%;
      height: 260px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    }
    .hec_rankingList {
      width: 100%;
      height: 520px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>