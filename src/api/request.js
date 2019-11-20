import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 1000,
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('token') || '',
  },
})

service.interceptors.response.use(res => res.data)

export default service
