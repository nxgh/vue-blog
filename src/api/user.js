import request from './request'

export function register(data) {
  // url: /users
  // method: POST
  // desc: 用户注册
  // body: {
  //   username: '',
  //   email: '',
  //   pwd: '',
  // }
  // Return :
  //  - Success: {
  //   token: '',
  //   token_type: '',
  // }, 200
  //  - Failed:
  return request({
    url: '/users',
    method: 'post',
    data: data,
  })
}

export function login(data) {
  // url: '/token'
  // method: POST
  // desc: 用户登录
  // body: {
  //   email: '',
  //   pwd: '',
  // }
  // Return
  // - Success: {
  //   token: '',
  //   token_type: '',
  // },
  // - Failed:
  return request({
    url: '/token',
    method: 'post',
    data: data,
  })
}

export function check_token() {
  // url: '/token'
  // method: GET
  // 首次登录token验证
  // Return:
  //  - Success: 200
  //  - Failed:
  return request({
    url: '/token',
    method: 'get',
  })
}
