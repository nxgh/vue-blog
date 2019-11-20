<template>
  <div class="main-container">
    <article>
      <section class="post-body">
        <Marked :source="detail.body" />
      </section>
    </article>
    <section class="post-comment">
      <h2>Comment</h2>
      <Comment :comments="detail.comments" />
    </section>
    <ArticleMenu :source="detail.body" />
    <CommentInput />
  </div>
</template>

<script>
import Comment from '@/components/Comment/ReComment'
import CommentInput from '@/components/Comment/CommentInput'
import ArticleMenu from './ArticleMenu'
import Marked from '@/components/Marked/Marked'

export default {
  data() {
    return {
      post: {},
    }
  },
  components: {
    Comment,
    Marked,
    ArticleMenu,
    CommentInput,
  },
  computed: {
    detail() {
      return this.$store.getters['post/detail'](this.$route.path.split('/')[2])
    },
  },
  created() {
    this.$store.dispatch('post/request_detail', this.$route.path.split('/')[2])
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
