<template>
    <div class="cof_surround">
        <div class="cof_interlink">
            友情链接
            <div class="cof_backtop fa fa-angle-double-up">

            </div>
        </div>
        <div class="cof_companyinfo">
            版权信息
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
.cof_surround {
  width: 100%;
  height: 360px;
  background: #313131;
  color: #a5a5a5;
  display: flex;
  flex-direction: column;
  // 友链字体#bebebe 文字a4a4a4
  .cof_interlink {
    position: relative;
    width: 1200px;
    margin: 0 auto;
    height: 130px;
    .cof_backtop {
      position: absolute;
      right: -80px;
      bottom: 150px;
      width: 60px;
      height: 40px;
      border-radius: 5px;
      background: #fff;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
      cursor: pointer;
      font-size: 32px;
      text-align: center;
      line-height: 40px;
      transition: all 0.5s;
      &:hover {
        transform: translateY(-10px);
      }
    }
  }
  .cof_companyinfo {
    width: 1200px;
    margin: 0 auto;
    height: 230px;
  }
}
</style>