<template>
  <div class="lac_surround">
    <common-title titleName="标签云"></common-title>
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
.lac_surround {
  width: 100%;
  height: 200px;
  padding: 20px;
  box-sizing: border-box;
  background: #fff;
  box-shadow: 0 0 20px rgba(102, 102, 102, 0.1);
}
</style>