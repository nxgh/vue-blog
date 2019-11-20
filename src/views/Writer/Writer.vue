<template>
  <div class="editor-container">
    <div class="side-menu">
      <SideMenu />
    </div>
    <div class="editor">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SideMenu from '@/components/Writer/SideMenu.vue'
export default {
  name: 'writer',
  components: {
    SideMenu,
  },
  data() {
    return {}
  },
  created() {
    this.$store.dispatch('post/request_articles')
  },
}
</script>

<style lang="less" scoped>
.editor-container {
  display: flex;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}
.side-menu {
  width: 40%;
  height: 100%;
}
.editor {
  width: 60%;
  height: 100%;
}
</style>
