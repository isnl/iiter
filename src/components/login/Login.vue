<template>
  <div class="login_surround">
    <div class="login_box">
      <div class="login_ball login_leftBall"></div>
      <div class="login_ball login_rightBall"></div>
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
.login_surround {
  width: 100%;
  height: 100%;
  background: url("../../../static/common/imgs/login_bg.jpg") no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .login_box {
    position: relative;
    width: 900px;
    height: 600px;
    border-radius: 10px;
    border: 1px solid #e4e4e4;
    background: rgba(0, 0, 0, 0.8);
    .login_ball {
      width: 150px;
      height: 150px;
      position: absolute;
      border-radius: 50%;
    }
    .login_leftBall {
      left: -75px;
      top: -75px;
    }
    .login_rightBall {
      right: 0;
      top: 0;
    }
  }
}
</style>