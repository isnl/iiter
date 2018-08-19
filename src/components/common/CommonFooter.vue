<template>
  <div class="cof_surround">
      <div class="cof_interlink">
          友情链接
      </div>
      <div class="cof_companyinfo">
          版权信息
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  components: {},
  methods: {},
  created(){}
}

</script>
<style lang='scss' scoped>
.cof_surround{
    width:100%;
    height:260px;
    background:#313131;
    color:#a5a5a5;
    display:flex;
    flex-direction: column;
    // 友链字体#bebebe 文字a4a4a4
    .cof_interlink{
        width:1200px;
        margin:0 auto;
        height:130px;
    }
    .cof_companyinfo{
        width:1200px;
        margin:0 auto;
        height:230px;
    }
}
</style>