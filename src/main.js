//导包 （第三方|自己的）
import Vue from "vue";
import App from "./App.vue";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// import router from './router/index.js'
//默认访问index.js文件
//@代表src 准确
import router from '@/router'

// 配置vue框架的日志级别 productionTip
// false 不是生产环境级别日志，开发环境日志，详细
// true 生产环境级别日志，上线之后部署服务器之后，日志简单
Vue.config.productionTip = false;

// 根实例
// 使用App.vue 注释渲染级别 #app容器中
// (components共用级别组件) (views页面级别的组件)
new Vue({
  render: h => h(App)
}).$mount("#app");

// main.js 的职责
//项目需要的资源都需要导入到main.js
//创建一个vue根实例
