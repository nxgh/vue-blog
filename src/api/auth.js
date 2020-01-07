import request from './request'

export const login = loginForm =>
  request({
    method: 'post',
    url: '/token',
    data: loginForm,
  })

export const authToken = () =>
  request({
    method: 'get',
    url: '/token',
  })
