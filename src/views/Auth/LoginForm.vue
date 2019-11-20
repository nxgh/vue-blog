<template>
  <div class="form-body">
    <input v-model="email" type="text" placeholder="Email" />
    <input v-model="pwd" type="password" placeholder="Password" />
    <input @click="login" type="button" value="登录" />
  </div>
</template>

<script>
export default {
  name: 'login-form',
  data() {
    return {
      email: '',
      pwd: '',
    }
  },
  methods: {
    login() {
      this.$store.dispatch('post/request_login', {
        email: this.email,
        pwd: this.pwd,
      })
    },
  },
}
</script>

<style lang="less" src="./FormStyle.less" scoped></style>
