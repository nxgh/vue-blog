<template>
  <div class="input-label" :style="{ height: height + 'rem' }">
    <textarea
      type="text"
      :placeholder="placeholder"
      @click.left="set_height(10)"
      :style="{ height: height + 'rem' }"
      class="input"
    />
    <button>发布</button>
    <button @click="set_height(2)">取消</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'comment-input',
  data() {
    return {
      height: 2,
      info: '',
      btn_info: '↓在这评论↓',
    }
  },
  methods: {
    set_height(h) {
      this.height = h
      if (h === 2) {
        this.current_comment.name = ''
      }
    },
  },
  computed: {
    ...mapGetters('post', ['current_comment']),
    placeholder() {
      if (this.current_comment.name) {
        return '回复：' + this.current_comment.name
      } else {
        return '评论'
      }
    },
  },
}
</script>

<style>
textarea {
  resize: none;
}
.input {
  width: 60%;
  height: 5.125rem;
  border-radius: 0.3rem;
  padding-left: 1.875rem;
  padding-top: 0.725rem;
  margin: 0 1rem;
}
button {
  height: 2.5rem;
  border-radius: 3.125rem;
  margin-top: 7.5rem;
  width: 4rem;
  background-color: #ff0000a8;
  border: 0;
  color: #fff;
  margin-right: 0.9375rem;
}
.input-label {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #00000085;
  display: flex;
  padding: 0.625rem 0;
}
.close {
  position: fixed;
  width: 100px;
  background: #cfcfcf40;
  border-radius: 2px 2px 0 0;
  text-align: center;
  padding: 7px;
}
</style>
