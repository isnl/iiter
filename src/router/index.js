import Vue from 'vue'
import Router from 'vue-router'
import Test from "@/components/Test"
import Index from "@/components/index/Index.vue";

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: "Index",
      component: Index
    }
  ]
})
