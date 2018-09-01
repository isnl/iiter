<template>
  <div class="swiper-container" id="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
              <img src="http://img.zcool.cn/community/01f1d058ddd6c6a801219c77492521.jpg">
          </div>
           <div class="swiper-slide">
               <img src="http://pic.90sjimg.com/back_pic/00/01/88/75/f9d2ca920e1d352e415672d90623ed98.jpg">
          </div>
           <div class="swiper-slide">
               <img src="http://pic.90sjimg.com/back_pic/00/04/27/49/31b80e01ffb0ab3465cef4d40ba53650.jpg">
          </div>
           <div class="swiper-slide">
               <img src="http://img.zcool.cn/community/0149d15a524385a80120c2b0b05e68.png@2o.png">
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
  box-shadow:0 0 20px rgba(102, 102, 102, 0.1);
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