<template>
  <section class="cover">
    <slot></slot>
  </section>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.cover {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #72727222;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
}
</style>
