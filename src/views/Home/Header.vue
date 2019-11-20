<template>
  <header>
    <nav>
      <div class="logo"><router-link to="/">Nxgh</router-link></div>
      <ul>
        <li><router-link to="/blog">首页</router-link></li>
        <li><router-link to="/category">分类</router-link></li>
        <li><router-link to="/writer">写文章</router-link></li>
        <li><a @click="switch_authform">登录·注册</a></li>
      </ul>
    </nav>
    <section>
      <h1>{{ header_title.title }}</h1>
      <span class="split-line"></span>
      <p class="">{{ header_title.description }}</p>
    </section>
    <AuthDialog :show="is_show" @close="switch_authform" />
  </header>
</template>

<script>
import AuthDialog from '@/views/Auth/AuthDialog'
import { mapGetters } from 'vuex'

export default {
  name: 'v-header',
  data() {
    return {
      is_show: false,
    }
  },
  methods: {
    switch_authform() {
      this.is_show ? (this.is_show = false) : (this.is_show = true)
    },
  },
  components: {
    AuthDialog,
  },
  computed: {
    ...mapGetters('post', ['header_title']),
  },
}
</script>

<style lang="less" src="./header.less" scoped></style>
