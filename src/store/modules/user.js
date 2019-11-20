import { login, check_token, register } from '@/api/user.js'

const state = {
  is_login: false,
  token: '',
  roles: 'anon', // 当前用户角色, 默认未登录用户anon
}

const getters = {
  get_login_status: () => state.is_login,
  get_token: () => state.token,
  get_roles: () => state.roles,
}

const mutations = {
  set_login_status(state, obj) {
    // console.log('token', obj.is_login)
    if (obj.token !== '') {
      state.roles =
        JSON.parse(atob(obj.token.split('.')[1])).data.authority.toLowerCase() === 'admin'
          ? 'admin'
          : 'user'
    } else {
      state.roles = 'anon'
    }
    localStorage.setItem('token', obj.token)
    state.is_login = obj.is_login
    state.token = obj.token
  },
}

const actions = {
  // 用户登录
  request_login({ commit }, user_info) {
    login(user_info)
      .then(res => {
        console.log(res)
        commit('set_login_status', { is_login: true, token: res.token })
      })
      .catch(err => {
        console.log(err)
      })
  },
  // 注册
  request_register({ commit }, user_info) {
    register(user_info)
      .then(res => {
        commit('set_login_status', { is_login: true, token: res.token })
      })
      .catch(err => {
        console.log(err)
      })
  },
  // 验证token
  request_auth_token({ commit }) {
    if (localStorage.getItem('token') !== '') {
      check_token()
        .then(res => {
          commit('set_login_status', {
            is_login: true,
            token: localStorage.getItem('token'),
          })
          console.log(res)
        })
        .catch(err => {
          commit('set_login_status', { is_login: false, token: '' })
          console.log(err)
        })
    }
  },
  logout({ commit }) {
    commit('set_login_status', { is_login: false, token: '' })
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
