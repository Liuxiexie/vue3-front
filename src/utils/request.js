import axios from 'axios'

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use((config) => {
  config.headers.icode = 'helloqianduanxunlianying'
  return config // 必须返回配置
})
export default service

/**
 * 响应拦截器:
 * 在服务端返回数据之后, 前端.then之前会被调用
 */
service.interceptors.response.use((response) => {
  const { data, message, success } = response.data
  if (success) {
    return data
  } else {
    // TODO: 业务错误
    return Promise.reject(new Error(message))
  }
})
