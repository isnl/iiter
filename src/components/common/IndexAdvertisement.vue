<template>
  <div class="ina_surround">
    <a href="">
      <img :src="ad.pic" alt="">
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    ad: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  components: {},
  methods: {},
  created() {}
};
</script>
<style lang='scss' scoped>
.ina_surround {
  width: 1200px;
  height: 120px;
  margin: 0 auto;
  background: #fff;
  box-shadow: 0 0 20px rgba(102, 102, 102, 0.1);
  a {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>