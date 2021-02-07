import axios from 'axios'

// 创建实例
const service = axios.create({
  baseURL: 'http://123.207.32.32:9001',
  timeout: 5000
})


// 请求拦截
service.interceptors.request.use(config => {
  return config
}, err => {
  console.log(err)
}
)
  // if(token()) {
  //   config.headers.['Authorization'] = token()
  // }


// 响应拦截
service.interceptors.response.use(res =>{
  return res
},err => {
  console.log(err);
})

export default service