<template>
  <div class="index_surround">
    <common-header></common-header>
    <new-user></new-user>
    <Swiper></Swiper>
    <help-content></help-content>
    <index-advertisement :ad="ad"></index-advertisement>
    <article-content></article-content>
    <index-advertisement></index-advertisement>
    <website-content></website-content>
    <common-footer></common-footer>
    <back-top></back-top>
  </div>
</template>

<script>
import CommonHeader from "../common/CommonHeader.vue";
import NewUser from "./NewUser.vue";
import Swiper from "../common/Swiper.vue";
import HelpContent from "./HelpContent.vue";
import IndexAdvertisement from "../common/IndexAdvertisement.vue";
import ArticleContent from "./ArticleContent.vue";
import WebsiteContent from "./WebsiteContent.vue";
import CommonFooter from "../common/CommonFooter.vue";
import BackTop from "../common/BackTop.vue"
export default {
  data() {
    return {
      ad:{
        pic:"../../../static/advertisement/imgs/ad1.gif"
      }
    };
  },
  components: {
    CommonHeader,
    Swiper,
    HelpContent,
    NewUser,
    IndexAdvertisement,
    ArticleContent,
    WebsiteContent,
    CommonFooter,
    BackTop
  },
  methods: {},
  created() {
  }
};
</script>
<style lang='scss' scoped>
</style>