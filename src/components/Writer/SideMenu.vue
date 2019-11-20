<template>
  <div class="container">
    <div id="category">
      <ul>
        <li class="new-category">
          <router-link to="/blog" style="color:#fff;">回到首页</router-link>
        </li>
        <li class="new-category"><span class="symbol-add">十</span> 新建分类</li>
        <li
          v-for="(item, index) in category_list"
          :key="index"
          :class="[{ active: index === active.category }, 'category-item']"
          @click="into_category(item, index)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div id="title">
      <ul>
        <li
          :class="[{ active: index === active.title }, 'title-item']"
          v-for="(item, index) in title_list"
          :key="item.id"
          @click="into_title(item.id, index)"
        >
          <!-- <router-link :to="{path: '/writer/' + item.id}">{{ item.title }}</router-link> -->
          <a>{{ item.title }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'writer-category',
  data() {
    return {
      active: {
        category: 0,
        title: 0,
      },
      category: '',
    }
  },
  methods: {
    set_route_path(post_id) {
      if (this.$route.path !== '/writer/' + post_id) {
        this.$router.push({
          path: '/writer/' + post_id,
        })
      }
    },
    into_category(category, index) {
      this.active.category = index // 处理category列 选中时的样式
      this.category = category
      this.set_route_path(this.title_list[0].id) // 选中分类时默认展示第一个文章
    },
    into_title(post_id, index) {
      this.active.title = index // 处理category列 选中时的样式
      this.set_route_path(post_id) // 选中 title 列 所显示的文章
    },
    get_category_posts(posts, category) {
      return posts.filter(item => item.category === category)
    },
  },
  computed: {
    ...mapGetters('post', { posts: 'posts_arr' }),
    category_list() {
      return Array.from(new Set(this.posts.map(item => item.category)))
    },
    title_list() {
      if (this.category === '') {
        return this.get_category_posts(this.posts, this.category_list[0])
      }
      return this.get_category_posts(this.posts, this.category)
    },
  },
}
</script>

<style lang="less" scoped src="./SideMenu.less"></style>
