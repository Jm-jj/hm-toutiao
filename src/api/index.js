import axios from 'axios'
import auth from '@/utils/auth'
import router from '@/router'

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
// 响应拦截器
axios.interceptors.response.use((response) => {
  return response
}, (error) => {
  if (error.response.status === 401 && error.response) {
    router.push('/login')
  }
  return Promise.reject(error)
})
export default axios
