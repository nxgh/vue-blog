<template>
  <cover v-show="show">
    <form class="form">
      <div class="form-title">
        <span :class="{ active: active.login }" @click="switch_form('LoginForm')"
          >登录</span
        >·
        <span :class="{ active: active.register }" @click="switch_form('RegisterForm')"
          >注册</span
        >
        <span class="close-symbol" @click="close_form">×</span>
      </div>
      <component :is="form"></component>
    </form>
  </cover>
</template>

<script>
import Cover from '@/components/Common/DialogCover.vue'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
export default {
  props: {
    show: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      form: 'LoginForm',
      active: {
        login: true,
        register: false,
      },
    }
  },
  methods: {
    switch_form(form) {
      this.form = form
      this.active.login = !this.active.login
      this.active.register = !this.active.register
    },
    close_form() {
      if (this.$route.path === '/login') {
        this.$router.push({
          path: '/blog',
        })
      } else {
        console.log('close login form !')
        // this.show = false
        this.$emit('close')
      }
    },
  },
  components: {
    Cover,
    LoginForm,
    RegisterForm,
  },
}
</script>

<style lang="less" scoped>
.form {
  width: 18.75rem;
  min-height: 27rem;
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 0.125rem;
  display: flex;
  flex-direction: column;
  .form-title {
    margin: 0.9375rem 0 0.625rem 1.25rem;
    span:hover {
      color: #707070;
      cursor: pointer;
    }
    .close-symbol {
      cursor: pointer;
      float: right;
      margin-right: 0.9375rem;
    }
  }
}
.active {
  font-size: 1.3125rem;
  color: #0035ff;
}
</style>
