import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import { getToken } from '@/utils/auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home/index'),
  },
  {
    path: '/post/:id',
    name: 'detail',
    component: () => import('@/views/Detail/index'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login'),
  },
  {
    path: '/admin',
    name: 'admin',
    meta: { authority: ['admin'] },
    children: [],
    component: () => import('@/views/Admin'),
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@/views/Exception/403.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
router.beforeEach((to, from, next) => {
  const record = to.matched.filter(item => item.meta.authority)
  if (record.length !== 0 && !getToken() !== '') {
    // 需要验证的路由
    console.log(`需要验证`)
    store
      .dispatch('actAuthToken')
      .then(res => {
        console.log(`验证成功`, res)
        next()
      })
      .catch(err => {
        console.log(`验证失败`, err)
        next({
          path: '/login',
        })
      })
  } else {
    next()
  }
})

export default router
