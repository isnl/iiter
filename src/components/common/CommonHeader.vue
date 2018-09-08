<template>
  <div class="coh_surround">
    <div class="coh_box">
      <div class="coh_left">
        <a href="">艾特儿</a>
      </div>
      <div class="coh_right">
        <ul class="coh_menu">
          <li>
            <a href="http://">发布求助</a>
            <div class="coh_aline"></div>
          </li>
          <li>
            <a href="http://">实用工具</a>
            <div class="coh_aline"></div>
          </li>
          <li>
            <a href="http://">学习教程</a>
            <div class="coh_aline"></div>
          </li>
          <li>
            <a href="http://">软件下载</a>
            <div class="coh_aline"></div>
          </li>
          <li>
            <a href="http://">积分商城</a>
            <div class="coh_aline"></div>
          </li>
          <li>
            <a href="http://">全网搜索</a>
            <div class="coh_aline"></div>
          </li>
          <li>
            <a href="http://">意见反馈</a>
            <div class="coh_aline"></div>
          </li>
        </ul>
        <ul class="coh_user">
          <li>
            <a href="/login?id=1">注册</a>
            <div class="coh_aline"></div>
          </li>
          <li>
            <a href="/login?id=2">登录</a>
            <div class="coh_aline"></div>
          </li>
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
  background: rgba(0, 0, 0, 0.8);
  .coh_box {
    width: 1200px;
    margin: 0 auto;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .coh_left {
      width: 200px;
      line-height: 50px;
      font-size: 16px;
      color: rgba(255, 255, 255, 0.8);
    }
    .coh_right {
      flex: 1;
      height: 50px;
      display: flex;
      li {
        height: 50px;
        line-height: 50px;
        text-align: center;
        transition: all 0.3s;
        a {
          display: block;
          width: 100%;
          height: 47px;
          line-height: 47px;
          color: rgba(255, 255, 255, 0.7);
          transition: all 0.5s;
        }
        .coh_aline {
          width: 0;
          margin:0 auto;
          height: 3px;
          background: gold;
          transition: all .5s;
        }
        &:hover {
          border-color: #e41f2b;
          background-size: 100% 100%;
          .coh_aline{
            width:100%;
          }
          a {
            color: gold;
          }
        }
      }
      .coh_menu {
        flex: 1;
        height: 50px;
        padding-left: 0px;
        display: flex;
        align-items: center;
        li {
          width: 100px;
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