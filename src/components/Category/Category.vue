<template>
  <section class="main-container">
    <ul v-for="item in Object.keys(post_list)" :key="item">
      <h2>{{ item }}</h2>
      <li v-for="post in post_list[item]" :key="post.id" @click="push_router(post.id)">
        <time>{{ post.id | Id2Time }}</time>
        <span>{{ post.title }}</span>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'category',
  computed: {
    ...mapGetters('post', { posts: 'posts_arr' }),
    post_list() {
      let result = {}
      new Set(this.posts.map(item => item.category)).forEach(item => (result[item] = []))
      this.posts.forEach(item =>
        result[item.category].push({
          id: item.id,
          title: item.title,
        })
      )
      return result
    },
  },
  methods: {
    push_router(id) {
      this.$router.push({ path: '/article/' + id })
    },
  },
  created() {
    this.$store.dispatch('post/set_header_title', {
      title: '分类',
      description: '风萧萧兮易水寒，壮士去兮不复还',
    })
  },
}
</script>

<style lang="less" scoped>
h2 {
  margin-block-start: 1.25rem;
  margin-block-end: 0em;
  font-weight: 100;
}
ul {
  li {
    border-left: 0.1875rem solid #ff0000;
    margin: 0.625rem 0 0 1.25rem;
    padding-left: 0.625rem;
    font-size: 1.125rem;
    time {
      margin-right: 1.25rem;
    }
    &:hover {
      color: #cccccc;
    }
  }
}
</style>
