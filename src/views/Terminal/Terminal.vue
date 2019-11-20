<template>
  <div class="terminal-bg">
    <!-- 
      命令记录 展示
      命令结果 展示
      <p>
      <p innerHtml>
      <slot></slot> 内部维护一个array
      <input />
      命令输入 - 
     -->
    <button>当前用户角色{{ role }}</button>
    <p>测试登录</p>
    <button @click="login_admin">测试管理员登录</button>
    <p>测试登录</p>
    <button @click="login_user">测试用户登录</button>
    <p>测试anno 权限</p>
    <button>测试anno权限</button>
    <p>测试登出</p>
    <button @click="logout" v-auth="['admin', 'user']">测试登出</button>
    <p>测试admin权限</p>
    <button v-auth="['admin']">测试admin权限</button>
    <p>测试user权限</p>

    <button v-auth="['user']">测试user权限</button>
  </div>
</template>

<script>
export default {
  name: 'terminal',
  methods: {
    login_admin() {
      this.$store.dispatch('user/request_login', {
        email: 'admin@test.com',
        pwd: 'Password_123',
      })
    },
    login_user() {
      this.$store.dispatch('user/request_login', {
        email: 'test1@foxmail.com',
        pwd: 'Password_123',
      })
    },
    logout() {
      this.$store.dispatch('user/logout')
    },
  },
  computed: {
    role() {
      return this.$store.getters['user/get_roles']
    },
  },
}
</script>

<style lang="less" src="./terminal.less" scoped></style>
