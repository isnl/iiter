<template>
  <div class="neu_surround">
    <!-- 这里展示最新注册用户的头像及昵称 -->
    <div class="neu_title">
      <i class="fa fa-user-circle">
      </i>
      <span>最新用户</span>
    </div>
    <ul class="neu_userList">
      <li v-for="(items,index) in userList" :key="index">
        <a :href="items.ulHref"><img :src="items.ulPic" :title="items.ulName">
          <span></span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userList: [
        {
          ulPic:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1081097914,2853990963&fm=27&gp=0.jpg",
          ulHref: "/",
          ulName: "admin"
        },
        {
          ulPic:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1583835424,2304751549&fm=27&gp=0.jpg",
          ulHref: "/",
          ulName: "candy"
        },
        {
          ulPic:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2465279707,2704448211&fm=27&gp=0.jpg",
          ulHref: "/",
          ulName: "二狗"
        },
        {
          ulPic:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4102361126,151110128&fm=27&gp=0.jpg",
          ulHref: "/",
          ulName: "土豆"
        },
        {
          ulPic:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2835550198,680436981&fm=27&gp=0.jpg",
          ulHref: "/",
          ulName: "勺子"
        },
        {
          ulPic:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3438254993,2445899213&fm=27&gp=0.jpg",
          ulHref: "/",
          ulName: "小小的白芍子"
        },
        {
          ulPic:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4275549584,2977483107&fm=27&gp=0.jpg",
          ulHref: "/",
          ulName: "小羊"
        },
        {
          ulPic:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=555134610,785943331&fm=27&gp=0.jpg",
          ulHref: "/",
          ulName: "小鬼"
        },
        {
          ulPic:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1517761519,699465519&fm=27&gp=0.jpg",
          ulHref: "/",
          ulName: "小哥"
        },
        {
          ulPic:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=250555589,1390821591&fm=27&gp=0.jpg",
          ulHref: "/",
          ulName: "小弟"
        },
        {
          ulPic:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=625367403,4273541340&fm=27&gp=0.jpg",
          ulHref: "/",
          ulName: "小狗"
        },
        {
          ulPic:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3975747624,1735186794&fm=27&gp=0.jpg",
          ulHref: "/",
          ulName: "小猫"
        },
        {
          ulPic:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3727230533,4096762265&fm=27&gp=0.jpg",
          ulHref: "/",
          ulName: "小姐姐"
        },
        {
          ulPic:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3890481574,3826591238&fm=27&gp=0.jpg",
          ulHref: "/",
          ulName: "小哥哥"
        },
        {
          ulPic:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=410312134,11805400&fm=27&gp=0.jpg",
          ulHref: "/",
          ulName: "女汉子"
        }
      ]
    };
  },
  components: {},
  methods: {},
  created() {}
};
</script>
<style lang='scss' scoped>
.neu_surround {
  position: relative;
  width: 1200px;
  height: 80px;
  margin: 20px auto;
  background: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  .neu_title {
    width: 140px;
    height: 40px;
    background: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
    position: absolute;
    left: -20px;
    top: 20px;
    border-radius: 20px 0px 20px 0px;
    text-align: center;
    line-height: 40px;
    font-size: 16px;
    color: #a3a3a3;
  }
  .neu_userList {
    width: 1040px;
    height: 100%;
    margin-left: 140px;
    padding-right: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    li {
      a {
        position: relative;
        &:hover{
          span{
            display:block;
          }
        }
        img {
          border-radius: 10px;
          width: 50px;
          height: 50px;
        }
        span {
          display: none;
          width: 50px;
          height: 50px;
          position: absolute;
          border-radius: 10px;
          left:0;
          top:-50px;
          background:rgba(255,255,255,.4);
        }
      }
    }
  }
}
</style>