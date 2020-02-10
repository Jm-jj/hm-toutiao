import axios from 'axios'
import auth from '@/utils/auth'

axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'
// axios.defaults.headers.Authorization = `Bearer ${auth.getUser().token}`

// 请求拦截器
axios.interceptors.request.use((config) => {
  const user = auth.getUser()
  if (user.token) {
    config.headers.Authorization = `Bearer ${user.token}`
  }
  return config
}, (error) => {
  return Promise.reject(error)
})
export default axios
