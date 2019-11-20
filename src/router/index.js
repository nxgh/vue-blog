import Vue from 'vue'
import VueRouter from 'vue-router'
import findLast from 'lodash/findLast'

import NotFound from '@/views/Exception/404'
import Forbidden from '@/views/Exception/403'
import ServerError from '@/views/Exception/500'

import { check, is_login } from '@/utils/auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/Terminal/Terminal.vue'),
  },
  {
    path: '/blog',
    component: () => import('@/views/Home/Home.vue'),
    children: [
      {
        path: '/blog',
        name: 'article-list',
        component: () => import('@/components/ArticleList/ArticleList.vue'),
      },
      {
        path: '/article/:id',
        name: 'article-detail',
        component: () => import('@/components/ArticleDetail/ArticleDetail.vue'),
      },
      {
        path: '/category',
        name: 'category',
        component: () => import('@/components/Category/Category.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    meta: { authority: ['anon'] },
    component: () => import('@/views/Auth/AuthDialog.vue'),
  },
  {
    path: '/writer',
    name: 'writer',
    meta: { authority: ['admin'] },
    component: () => import('@/views/Writer/Writer.vue'),
    children: [
      {
        path: '/writer/:id',
        name: 'editor',
        component: () => import('@/components/Writer/Editor.vue'),
      },
    ],
  },
  {
    path: '*',
    name: '404',
    component: NotFound,
  },
  {
    path: '/403',
    name: '403',
    component: Forbidden,
  },
  {
    path: '/500',
    name: '500',
    component: ServerError,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
router.beforeEach((to, from, next) => {
  const record = findLast(to.matched, record => record.meta.authority)
  if (record && !check(record.meta.authority)) {
    if (!is_login() && to.path !== '/login') {
      next({
        path: '/login',
      })
    } else if (to.path !== '/403') {
      next({
        path: '/403',
      })
    }
  } else {
    next()
  }
})

export default router
