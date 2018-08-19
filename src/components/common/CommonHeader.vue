<template>
  <div class="coh_surround">
      <div class="coh_box">
          <div class="coh_left">
              <a href="">艾特儿</a>
          </div>
          <div class="coh_right">
              <ul class="coh_menu">
                  <li><a href="http://">发布求助</a></li>
                  <li><a href="http://">实用工具</a></li>
                  <li><a href="http://">学习教程</a></li>
                  <li><a href="http://">软件下载</a></li>
                  <li><a href="http://">积分商城</a></li>
                  <li><a href="http://">意见反馈</a></li>
                  <li><a href="http://">百度搜索</a></li>
              </ul>
              <ul class="coh_user">
                  <li><a href="http://">注册</a></li>
                  <li><a href="http://">登录</a></li>
              </ul>
          </div>
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
.coh_surround {
  width: 100%;
  height: 50px;
  background: rgba(0,0,0,.8);
  .coh_box {
    width: 1200px;
    margin: 0 auto;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .coh_left {
      width: 100px;
      line-height: 50px;
      font-size: 16px;
      color: rgba(255, 255, 255, 0.8);
    }
    .coh_right {
      flex: 1;
      height: 50px;
      display: flex;
      li {
        height: 47px;
        line-height: 47px;
        border-bottom: 3px solid transparent;
        text-align: center;
        transition: all 0.3s;
        a {
          color: rgba(255, 255, 255, 0.8);
          transition: all 0.3s;
        }
        &:hover {
          border-color: #e41f2b;
          a {
            color: rgba(255, 255, 255, 0.9);
          }
        }
      }
      .coh_menu {
        flex: 1;
        height: 50px;
        padding-left: 40px;
        display: flex;
        align-items: center;
        li {
          width: 80px;
        }
      }
      .coh_user {
        width: 120px;
        display: flex;
        li {
          width: 60px;
        }
      }
    }
  }
}
</style>