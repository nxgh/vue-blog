<template>
  <section class="wrap">
    <div class="title">
      <input placeholder="Title" v-model="post.title" />
    </div>
    <div class="tools">
      《
    </div>
    <textarea class="content" placeholder="Content" v-model="post.content"></textarea>
  </section>
</template>

<script>
export default {
  props: {
    source: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    post() {
      return this.source
    },
  },
}
</script>

<style lang="less" scoped>
section {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
}
.title {
  height: 50px;
  font-size: 32px;
  padding: 10px 20px;
  background-color: #353535;
  input {
    width: 100%;
    background-color: #353535;
    color: #fff;
    padding: 0 30px;
    font-family: AdobeFS;
  }
}
.tools {
  display: flex;
  color: #fff;
  background-color: #1b1b1b;
  width: 100%;
  height: 25px;
  margin: 0;
}
textarea {
  padding: 5px 30px;
  overflow: hidden;
  overflow-y: scroll;
  height: 100%;
  background-color: #353535;
  color: #fff;
  border: transparent;
  line-height: 2.5;
  &:focus {
    border: transparent;
    outline: 0;
  }
}
textarea::-webkit-scrollbar {
  width: 3px;
  height: 3px;
  background-color: #353535;
}
/*定义滚动条轨道内阴影+圆角*/
textarea::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  background-color: #353535;
}
/*定义滑块内阴影+圆角*/
textarea::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #555;
}
</style>
