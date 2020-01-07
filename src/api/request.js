import axios from 'axios'
import { getToken } from '@/utils/auth'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 1000,
})

service.interceptors.request.use(
  config => {
    config.headers['Authorization'] = 'Bearer ' + getToken()
    return config
  },
  err => Promise.reject(err)
)

service.interceptors.response.use(res => res.data)

export default service
