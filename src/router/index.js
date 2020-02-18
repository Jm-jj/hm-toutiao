//进行路由初始化 和 配置
//导入
import VueRouter from "vue-router";
import auth from '@/utils/auth';
//注册
import Vue from "vue";
import Login from "@/views/login";
import home from "@/views/home";
import Welcome from "@/views/welcome";
import NotFound from "@/views/404";
import Article from '@/views/article';
import Image from '@/views/image';
import Publish from '@/views/publish';

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
        }, {
          path: '/article',
          component: Article
        },
        {
          path: '/image',
          component: Image
        },
        {
          path: '/publish',
          component: Publish
        }
      ]
    },
    {
      path: '*',
      component: NotFound
    }
  ]
});
router.beforeEach((to, from, next) => {
  if (to.path !== '/login' && !auth.getUser().token) {
    return next('/login')
  }
  next()
})
// 导出
export default router;
