<template>
  <div class="main-container">
    <article>
      <section class="post-body">
        <Marked :source="detail.content" />
      </section>
    </article>
    <section class="post-comment">
      <h2>Comment</h2>
      <Comment :comments="detail.comments" />
    </section>
    <ArticleMenu :source="detail.content" />
    <CommentInput />
  </div>
</template>

<script>
import { fetch_post } from '@/api/posts'

import Comment from '@/components/Comment/ReComment'
import CommentInput from '@/components/Comment/CommentInput'
import ArticleMenu from './ArticleMenu'
import Marked from '@/components/Marked/Marked'

export default {
  components: {
    Comment,
    Marked,
    ArticleMenu,
    CommentInput,
  },
  data() {
    return {
      detail: {},
    }
  },
  methods: {
    schema(post) {
      let data = post.comments
      let map = new Map()
      let res = data.filter(item => {
        if (item.reply_id !== '') {
          map.set(item.reply_id, item)
        } else {
          item.reply = []
          return item
        }
      })

      res.forEach(element => {
        let val = map.get(element.comment_id)
        if (val) {
          element.reply.push(val)
        }
      })
      post['comments'] = res
      return post
    },
  },
  created() {
    fetch_post(this.$route.path.split('/')[2])
      .then(res => {
        console.log(res)
        // this.detail = res
        this.detail = this.schema(res)
      })
      .catch(err => {
        console.log(err)
      })
  },
}
</script>

<style lang="less" scoped>
.post-comment {
  margin-top: 1.875rem;
  h2 {
    border-bottom: 0.0625rem solid #ff0000;
    padding-bottom: 0.9375rem;
  }
}
</style>
