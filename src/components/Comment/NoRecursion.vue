<template>
  <section>
    <ul v-for="comment in comments" :key="comment.id" class="cover-comment">
      <li :id="comment.id" class="comment">
        <!-- FIXME: 记得换 url 格式 -->
        <img :src="base_url + comment.user_id + '.png'" alt="" />
        <div>
          <p>{{ comment.username }}</p>
          <p>{{ comment.body }}</p>
        </div>
      </li>
      <li>
        <ul v-for="reply in comment.reply" :key="reply.id" class="cover-reply">
          <li :id="reply.id" class="reply">
            <img :src="base_url + reply.user_id + '.png'" alt="" />
            <div>
              <p>{{ reply.username }}</p>
              <p>回复：{{ reply.reply_name }}</p>
              <p>{{ reply.body }}</p>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      base_url: 'http://192.168.1.106:8000/avatar/', // FIXME: 发布时修改
    }
  },
  props: {
    comments: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="less" scoped>
img {
  height: 2.5rem;
  width: 2.5rem;
  margin-right: 0.625rem;
  margin-top: 1.25rem;
  border-radius: 50%;
  border: 1px solid #000;
}
.cover-comment {
  display: flex;
  flex-direction: column;
  .comment,
  .reply {
    display: flex;
    border-bottom: 1px solid #eee;
  }
}
.reply {
  margin-left: 1.875rem;
}
</style>
