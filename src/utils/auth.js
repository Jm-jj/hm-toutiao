// 提供认证相关api   （token）

//存储用户信息
const KEY = 'hm-toutiao-pc'
const setUser = (user) => {
  window.sessionStorage.setItem(KEY, JSON.stringify(user))
}
//获取用户信息
const getUser = () => {
  return JSON.parse(window.sessionStorage.getItem(KEY) || '{}')
}
//删除用户信息
const delUser = () => {
  window.sessionStorage.removeItem(KEY)
}
//导出
export default {
  setUser,
  getUser,
  delUser
}
