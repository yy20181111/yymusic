import axios from 'axios'

import { getToken } from '@/utils/cookie'

// 创建实例
const service = axios.create({
  baseURL: 'api',
  timeout: 5000
})

// 请求拦截
service.interceptors.request.use(
  config => {
    if (getToken()) {
      config.headers['token'] = getToken()
    }
    return config
  }, err => {
    console.log(err)
  }
)



// 响应拦截
service.interceptors.response.use(res => {
  return res
}, err => {
  console.log(err);
})

export default service