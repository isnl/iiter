<template>
  <div class="hec_surround">
   <help-content-left></help-content-left>
    <div class="hec_right">
      <user-info></user-info>
      <ranking-list></ranking-list>
    </div>
  </div>
</template>

<script>
import UserInfo from "./helpContent/UserInfo.vue";
import RankingList from "./helpContent/RankingList.vue";
import HelpContentLeft from "./helpContent/HelpContentLeft.vue"
export default {
  data() {
    return {
      
    };
  },
  components: {
    HelpContentLeft,
    UserInfo,
    RankingList
  },
  methods: {
    
  },
  created() {}
};
</script>
<style lang='scss' scoped>
.hec_surround {
  width: 1200px;
  margin: 20px auto;
  height: 1000px;
  display: flex;
  justify-content: space-between;
  .hec_right {
    width: 320px;
    height: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>