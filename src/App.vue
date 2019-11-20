<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  created() {
    this.$store.dispatch('user/request_auth_token')
  },
}
</script>

<style>
body,
#app {
  height: 100%;
}
</style>
