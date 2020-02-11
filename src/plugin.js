import MyBread from '@/components/my-bread'
export default {
  // 在main.js使用Vue.use(当前插件)传入Vue
  install(Vue) {
    // 使用Vue扩展功能
    Vue.component(MyBread.name, MyBread)
  }
}
