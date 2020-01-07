<template>
  <div class="cover">
    <div class="form frosted-glass">
      <input v-model="loginForm.email" type="text" placeholder="Email" />
      <input v-model="loginForm.password" type="password" placeholder="Password" />
      <button @click="login">─=≡Σ((( つ•̀ω•́)つ</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login-form',
  data() {
    return {
      loginForm: { email: 'hshao@mingzhao.cn', password: 'helloworld' },
    }
  },
  methods: {
    login() {
      this.$store
        .dispatch('actLogin', this.loginForm)
        .then(res => {
          console.log(`res`, res)
          this.$router.push({ path: '/admin' })
        })
        .catch(err => {
          console.log(err)
        })
    },
  },
}
</script>

<style lang="less" src="./FormStyle.less" scoped></style>
