<template>
  <div id="content">
    <input type="text" v-model="post.title" />
    <div class="util-bar">
      <span><img :src="preview" alt="预览" title="预览"/></span>
      <span><img :src="fullscreen" alt="全屏" title="全屏"/></span>
      <span><img :src="save" alt="保存" title="保存"/></span>
      <span><img :src="release" alt="发布" title="发布"/></span>
    </div>
    <textarea name="" id="" v-model="post.body"></textarea>
  </div>
</template>

<script>
import fullscreen from '@/assets/svg/fullscreen.svg'
import preview from '@/assets/svg/preview.svg'
import save from '@/assets/svg/save.svg'
import release from '@/assets/svg/release.svg'

export default {
  name: 'writer-editor',
  data() {
    return {
      // post: {},
      fullscreen,
      preview,
      save,
      release,
    }
  },
  created() {
    this.$store.dispatch('post/request_detail', this.$route.path.split('/')[2])
  },
  computed: {
    post() {
      this.$store.dispatch('post/request_detail', this.$route.path.split('/')[2])
      return this.$store.getters['post/detail'](this.$route.path.split('/')[2])
    },
  },
}
</script>

<style lang="less" src="./Editor.less" scoped></style>
