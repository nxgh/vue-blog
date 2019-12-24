<template>
  <section>
    <ul v-for="comment in comments" :key="comment.comment_id" class="cover-comment">
      <li :id="comment.comment_id" class="comment">
        <img :src="comment.avatar" alt="" class="avatar" />
        <div style="width: 100%">
          <p>{{ comment.username }}</p>
          <p v-if="comment.reply_id">
            回复：
            <span class="reply_name">{{ comment.reply_username }}</span>
          </p>
          <p>{{ comment.content }}</p>
          <p class="stat">
            <span>{{ comment.comment_id | Id2Time }}</span>
            <span class="state-img">
              <img :src="like_svg" alt="" />
              <img :src="reply_svg" alt="" @click="click_comment(comment)" />
            </span>
          </p>
        </div>
      </li>
      <li v-if="comment.reply" class="reply">
        <recomment :comments="comment.reply"></recomment>
      </li>
    </ul>
    <!-- <CommentInput :source="reply_info" /> -->
  </section>
</template>

<script>
import reply_svg from '@/assets/svg/reply.svg'
import like_svg from '@/assets/svg/like.svg'
// import CommentInput from './CommentInput'
export default {
  name: 'recomment',
  components: {
    // CommentInput,
  },
  data() {
    return {
      reply_svg,
      like_svg,
      info: {},
    }
  },
  props: {
    comments: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    click_comment(comment) {
      let data = {
        name: comment.username,
        id: comment.id,
        body: comment.body,
      }
      this.$store.dispatch('post/set_current_comment', data)
    },
  },
}
</script>

<style lang="less" scoped>
section {
  width: 100%;
}
.cover-comment {
  display: flex;
  flex-direction: column;
  width: 100%;
  .comment {
    .avatar {
      height: 2.5rem;
      width: 2.5rem;
      margin-right: 0.625rem;
      margin-top: 1.25rem;
      border-radius: 50%;
      border: 1px solid #000;
    }
    .stat {
      display: flex;
      justify-content: space-between;
      margin-right: 3.125rem;
      width: 100%;
      margin-bottom: 0.375rem;
      span {
        font-size: 0.875rem;
      }
      img {
        height: 1.25rem;
        width: 1.25rem;
        margin-left: 2.5rem;
      }
    }
  }
  .comment,
  .reply {
    display: flex;
    border-bottom: 1px solid #eee;
  }
  .reply {
    margin-left: 3.125rem;
  }
}
.reply_name {
  color: #0099ff;
}
</style>
