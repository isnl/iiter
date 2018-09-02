<template>
  <div class="arc_surround">
    <div class="arc_left">
      <random-recommond></random-recommond>
      <label-cloud></label-cloud>
    </div>
    <article-content-right></article-content-right>
  </div>
</template>

<script>
import RandomRecommond from "./articleContent/RandomRecommond.vue"
import LabelCloud from "./articleContent/LabelCloud.vue"
import ArticleContentRight from "./articleContent/ArticleContentRight.vue"
export default {
  data() {
    return {};
  },
  components: {
    RandomRecommond,
    LabelCloud,
    ArticleContentRight
  },
  methods: {},
  created() {}
};
</script>
<style lang='scss' scoped>
.arc_surround {
  width: 1200px;
  height: 600px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  .arc_left {
    width: 360px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
  }
  
}
</style>