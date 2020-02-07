//进行路由初始化 和 配置
//导入
import VueRouter from "vue-router";
//注册
import Vue from "vue";
import Login from "@/views/login";
import home from "@/views/home";
import Welcome from "@/views/welcome";
import NotFound from "@/views/404"

Vue.use(VueRouter);
// 初始化
const router = new VueRouter({
  routes: [{
      path: "/login",
      component: Login
    },
    {
      path: "/",
      component: home,
      children: [{
        path: '/',
        component: Welcome
      }]
    },
    {
      path: '*',
      component: NotFound
    }
  ]
});
// 导出
export default router;
