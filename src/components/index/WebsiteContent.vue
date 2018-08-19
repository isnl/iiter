<template>
  <div class="wec_surround">
      <div class="wec_left">
          网址导航   tab切换  swiper
      </div>
      <div class="wec_right">
          实用工具
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
.wec_surround {
  width: 1200px;
  height: 480px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  .wec_left {
    width: 860px;
    height: 100%;
    background: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }
  .wec_right {
    width: 320px;
    height: 100%;
    background: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }
}
</style>