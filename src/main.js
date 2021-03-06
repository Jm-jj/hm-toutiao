//导包 （第三方|自己的）
import Vue from "vue";
import App from "./App.vue";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

// import router from './router/index.js'
//默认访问index.js文件
//@代表src 准确
import router from "@/router";

import axios from "@/api";

import '@/styles/index.less'

// 使用自己封装的插件
import plugin from '@/plugin'
Vue.use(plugin)
Vue.use(ElementUI);
Vue.prototype.$http = axios
// 配置vue框架的日志级别 productionTip
// false 不是生产环境级别日志，开发环境日志，详细
// true 生产环境级别日志，上线之后部署服务器之后，日志简单
Vue.config.productionTip = false;

// 根实例
// 使用App.vue组件渲染到 #app容器中
new Vue({
  render: h => h(App),
  router
}).$mount("#app");

// main.js的职责
// 1. 依赖项目需要的资源 (公用功能模块，需要导入main.js)
// 2. 创建一个Vue根实例
