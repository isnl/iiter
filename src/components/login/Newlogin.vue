<template>
    <div class="log_surround">
        <common-header></common-header>
        <div class="log_content">

        </div>
    </div>
</template>

<script>
import CommonHeader from "../common/CommonHeader.vue";
export default {
  data() {
    return {};
  },
  components: {
    CommonHeader
  },
  methods: {},
  created() {}
};
</script>
<style lang='scss' scoped>
.log_surround {
  display: flex;
  flex-direction: column;
  .log_content {
    flex: 1;
    background: #fff;
  }
}
</style>