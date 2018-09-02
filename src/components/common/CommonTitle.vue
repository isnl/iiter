<template>
    <div class="cot_surround">
        <span class="cot_tit">{{titleName}}</span>
        <span class="cot_refresh" v-if="refresh=='true'" @click="titleRefresh">
            <i class="fa fa-refresh"></i>
            <span>换一批</span>
        </span>
    </div>
</template>

<script>
export default {
  props: {
    titleName: {
      type: String
    },
    refresh: {
      type: String
    }
  },
  data() {
    return {};
  },
  components: {},
  methods: {
    /**
     * @description 点击标题上的刷新按钮
     */
    titleRefresh() {
      this.$emit("titleRefresh");
    }
  },
  created() {}
};
</script>
<style lang='scss' scoped>
.cot_surround {
  width: 100%;
  height: 35px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .cot_tit {
    flex: 1;
    padding-left: 20px;
    margin-left: 10px;
    font-size: 16px;
    box-sizing: border-box;
    font-weight: normal;
    color: #6a6a6a;
    border-left: 3px solid gold;
  }
  .cot_refresh {
    display: inline-block;
    width: 80px;
    color: #9a9a9a;
    cursor: pointer;
  }
}
</style>