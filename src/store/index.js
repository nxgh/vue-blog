import Vue from 'vue'
import Vuex from 'vuex'
import { authToken, login } from '@/api/auth'
import { setToken, rmToken } from '@/utils/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    isLogin: false,
  },
  getter: {
    getToken: state => state.token,
    isLogin: state => state.isLogin,
  },
  mutations: {
    SET_LOGIN_STATUS(state, token, login) {
      state.token = token
      state.isLogin = login
    },
  },
  actions: {
    async actLogin({ commit }, args) {
      console.log('args', args)
      await login(args)
        .then(res => {
          commit('SET_LOGIN_STATUS', res.token, true)
          setToken(res.token)
        })
        .catch(err => {
          throw err
        })
    },
    async actAuthToken({ commit }) {
      try {
        let res = await authToken()
        return res
      } catch (error) {
        commit('SET_LOGIN_STATUS', '', false)
        rmToken()
        throw error
      }
    },
    removeToken({ commit }) {
      rmToken()
      commit('SET_LOGIN_STATUS', '', false)
    },
  },
})
