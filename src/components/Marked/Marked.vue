<template>
  <div v-html="html" v-highlight class="markdown-body"></div>
</template>

<script>
import marked from 'marked'

export default {
  name: 'VueMarked',
  props: {
    source: {
      type: String,
      required: true,
      default: '',
    },
  },
  computed: {
    html() {
      return marked(this.source)
    },
  },
}
</script>

<style scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
  border-bottom: 0.0625rem solid #ff0000;
}
li {
  list-style: circle;
}
</style>
