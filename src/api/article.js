import request from './request'

export const fetchPosts = () =>
  request({
    method: 'get',
    url: '/posts',
  })

export const fetchPost = pid =>
  request({
    method: 'get',
    url: `/post/${pid}`,
  })

export const fetchCategoryMap = () =>
  request({
    method: 'get',
    url: `/categories`,
  })
