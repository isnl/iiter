<template>
    <div>
        <div class="bac_backtop fa fa-angle-double-up" @click="backTop()" v-show="backTopShow">
            <!-- 返回顶部组件 -->
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      backTopShow: false
    };
  },
  components: {},
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    backTop() {
      let back = setInterval(() => {
        if (document.body.scrollTop || document.documentElement.scrollTop) {
          document.body.scrollTop -= 30;
          document.documentElement.scrollTop -= 30;
        } else {
          clearInterval(back);
        }
      });
    },
    handleScroll() {
      if (document.documentElement.scrollTop + document.body.scrollTop > 200) {
        this.backTopShow = true;
      } else {
        this.backTopShow = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.bac_backtop {
  position: fixed;
  right: 180px;
  bottom: 20px;
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
  color:#9a9a9a;
  &:hover {
    transform: translateY(-10px);
  }
}
</style>