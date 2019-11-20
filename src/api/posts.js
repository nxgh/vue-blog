import request from './request'

export const fetch_posts = () =>
  /**
   * url: api/posts
   * desc: 获取文章列表信息
   * method: GET
   * params:
   * Return:
   *   [
   *     {
   *        id:
   *        title:
   *        category:
   *     },
   *   ]
   */
  request({
    method: 'get',
    url: '/posts',
  })

export const fetch_post = url =>
  /**
   * url: api/posts/:id
   * desc: 根据 id 获取文章详细信息
   * method: GET
   * params
   * Return:
   * [
   *   {
   *     id: '',
   *     title: '',
   *     category: '',
   *     body: '',
   *     comments: [],
   *   }
   * ]
   * comments: [
   *   {
   *     body: '',
   *     id: '',
   *     like: 0,
   *     reply: [],
   *     user_id: '',
   *     username: '',
   *   },
   * ],
   * reply: [
   *   {
   *     body: '',
   *     id: '',
   *     like: 0,
   *     reply_id: '',
   *     reply_name: '',
   *     user_id: '',
   *     username: '',
   *   },
   * ]
   */
  request({
    method: 'get',
    url: '/post/' + url,
  })
