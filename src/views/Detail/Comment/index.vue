<template>
  <div id="gitalk-container"></div>
</template>

<script>
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'

export default {
  name: 'comment',
  mounted() {
    // FIXME:
    var gitalk = new Gitalk({
      clientID: '928d0f2a6104846efb4f',
      clientSecret: 'fad479fed69035991b23c595bce2372ae8a89c10',
      repo: 'Notizen',
      owner: 'nxgh',
      admin: ['nxgh'],
      id: location.pathname, // Ensure uniqueness and length less than 50
      distractionFreeMode: true, // Facebook-like distraction free mode
    })

    gitalk.render('gitalk-container')
  },
}
</script>

<style></style>
