<template>
  <div class="arcr_surround">
    <common-title titleName="精彩博文"></common-title>
  </div>
</template>

<script>
import CommonTitle from "../../common/CommonTitle.vue";
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
.arcr_surround {
  width: 820px;
  padding: 20px;
  box-sizing: border-box;
  height: 100%;
  background: #fff;
  box-shadow: 0 0 20px rgba(102, 102, 102, 0.1);
}
</style>