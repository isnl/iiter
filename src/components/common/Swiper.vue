<template>
  <div class="swiper-container" id="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
              <img src="http://pic-cdn.35pic.com/58pic/18/28/85/17R58PICT2p_1024.jpg">
          </div>
           <div class="swiper-slide">
               <img src="http://imgs.aixifan.com/live/1490317749074/1490317749074.jpg">
          </div>
           <div class="swiper-slide">
               <img src="http://bpic.ooopic.com/16/00/53/16005326-82dcd518dae2a347af5c670d4a8dcf70.jpg">
          </div>
           <div class="swiper-slide">
               <img src="http://pic35.photophoto.cn/20150614/0009021194815582_b.jpg">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
</template>

<script>
import Swiper from "../../../static/cdn/swiper/js/swiper.min.js";
import "../../../static/cdn/swiper/css/swiper.min.css";
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    initSwiper() {
      var mySwiper = new Swiper(".swiper-container", {
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        },
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination"
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },

        // 如果需要滚动条
        scrollbar: {
          el: ".swiper-scrollbar"
        }
      });
    }
  },
  created() {},
  mounted() {
    this.initSwiper();
  }
};
</script>
<style lang='scss' scoped>
.swiper-container {
  width: 1200px;
  height: 300px;
  margin-top: 20px;
  background: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.42);
  .swiper-wrapper {
    .swiper-slide {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>