//进行路由初始化 和 配置
//导入
import VueRouter from 'vue-router'
//注册
import Vue from 'vue'
import Login from '@/views/login'
Vue.use(VueRouter)
// 初始化
const router = new VueRouter({
  routers: [
    {path:'/login',component:Login}
  ]
})
// 导出
export default router
