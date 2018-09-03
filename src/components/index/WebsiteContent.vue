<template>
  <div class="wec_surround">
    <div class="wec_left">
      <common-title titleName="网址导航"></common-title>
    </div>
    <div class="wec_right">
      <common-title titleName="实用工具"></common-title>
    </div>
  </div>
</template>

<script>
import CommonTitle from "../common/CommonTitle.vue";
export default {
  data() {
    return {};
  },
  components: {
    CommonTitle
  },
  methods: {},
  created() {}
};
</script>
<style lang='scss' scoped>
.wec_surround {
  width: 1200px;
  height: 480px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  .wec_left {
    width: 860px;
    padding: 20px;
    box-sizing: border-box;
    height: 100%;
    background: #fff;
    box-shadow: 0 0 20px rgba(102, 102, 102, 0.1);
  }
  .wec_right {
    width: 320px;
    padding: 20px;
    box-sizing: border-box;
    height: 100%;
    background: #fff;
    box-shadow: 0 0 20px rgba(102, 102, 102, 0.1);
  }
}
</style>