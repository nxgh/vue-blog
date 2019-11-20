<template>
  <footer>
    <nav>
      <section class="sitemap">
        <ul>
          <li>SITEMAP</li>
          <li><router-link to="category">Category</router-link></li>
          <li><router-link to="about">About</router-link></li>
          <li><router-link to="login">Login</router-link></li>
        </ul>
      </section>
      <section class="social">
        <ul>
          <li>SOCIAL</li>
          <li>知乎</li>
          <li>Github</li>
        </ul>
      </section>
      <section class="link">
        <ul>
          <li>LINK</li>
        </ul>
      </section>
    </nav>
    <p>© Hello World! Powered by Vue and Flask</p>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
footer {
  background-color: #000;
  min-height: 12.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.875rem;
}
nav {
  display: flex;
  justify-content: space-between;
  width: 60%;
  section {
    display: flex;
  }
}
li,
p,
a {
  color: #fff;
}
</style>
