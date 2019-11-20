<template>
  <div class="main-container article-list">
    <h1>文章列表</h1>
    <span class="split-line"></span>
    <ul>
      <li v-for="item in posts" :key="item.id" @click="push_router(item.id)">
        <time>{{ item.id | Id2Time }}</time>
        <span>{{ item.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'article-list',
  computed: {
    ...mapGetters('post', {
      posts: 'posts_arr',
    }),
  },
  methods: {
    push_router(id) {
      this.$router.push({ path: '/article/' + id })
    },
  },
  created() {
    this.$store.dispatch('post/set_header_title', {
      title: '将军百战死，壮士十年归',
      description: '若有人兮山之阿，披碧落兮带女萝',
    })
  },
}
</script>

<style lang="less" scoped>
.article-list {
  display: flex;
  flex-direction: column;
}
ul {
  margin: 1.25rem 2.5rem;
  li {
    cursor: pointer;
    margin: 1.25rem 0;
    time {
      margin-right: 0.9375rem;
      color: #868686;
    }
    &:hover {
      color: rgb(156, 156, 156);
    }
  }
}
</style>
