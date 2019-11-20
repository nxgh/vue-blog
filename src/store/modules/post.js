import { fetch_posts, fetch_post } from '@/api/posts'

const state = {
  post_arr: [], // 请求的文章列表，不含内容
  post_obj: {}, // 以文章 id 为key，文章内容为vlaue的 obj
  header_title: {}, // Header 组件， 标题和描述
  current_comment: {}, // 评论组件，当前的评论
}

const getters = {
  posts_arr: () => state.post_arr,
  // detail: () => state.post_obj,
  detail: state => id => state.post_obj[id] || {},
  header_title: () => state.header_title,
  current_comment: () => state.current_comment,
}

const mutations = {
  set_posts_arr(state, posts) {
    state.post_arr = posts
  },
  set_post_obj(state, post) {
    // state.post_obj[post.id] = post
    state.post_obj = { ...state.post_obj, [post.id]: post }
  },
  set_header_title(state, config) {
    state.header_title = config
  },
  set_current_comment(state, comment) {
    state.current_comment = comment
  },
}

const actions = {
  request_articles({ commit, state }) {
    // 请求文章列表
    if (state.post_arr.length === 0) {
      fetch_posts()
        .then(res => {
          commit('set_posts_arr', res.posts)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  request_detail({ commit, state }, id) {
    // 根据文章id请求文章详情
    if (!state.post_obj[id]) {
      fetch_post(id)
        .then(res => {
          commit('set_post_obj', res)
          commit('set_header_title', {
            title: res.title,
            description: res.category,
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  set_header_title({ commit }, config) {
    commit('set_header_title', config)
  },
  set_current_comment({ commit }, comment) {
    commit('set_current_comment', comment)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
