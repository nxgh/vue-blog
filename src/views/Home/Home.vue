<template>
  <div class="container">
    <v-header></v-header>
    <main>
      <router-view></router-view>
    </main>
    <v-footer></v-footer>
  </div>
</template>

<script>
import Footer from './Footer'
import Header from './Header'
export default {
  components: {
    'v-header': Header,
    'v-footer': Footer,
  },
  created() {
    this.$store.dispatch('post/request_articles')
  },
}
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
}
main {
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
</style>
