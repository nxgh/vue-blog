<template>
  <div class="container">
    <header id="top">
      <div id="menu">sks</div>
      <div id="heading">
        <h1 id="logo">
          Nxgh
        </h1>
        <div id="tagline">
          面向工资编程
        </div>
      </div>
    </header>
    <section id="posts-list">
      <div id="posts">
        <article v-for="item in posts" :key="item.id" class="post">
          <div class="post-container">
            <div class="title">
              <router-link :to="'/post/' + item.id">
                <h2>{{ item.title }}</h2>
              </router-link>
            </div>
            <div class="meta">
              <span>{{ item.id | Id2Time }} ·</span>
              <router-link :to="'/category/' + item.category" class="category">
                {{ item.category }}
              </router-link>
            </div>
          </div>
          <div></div>
        </article>
        <div id="more">
          <router-link to="/archive">
            More>>>
          </router-link>
        </div>
      </div>
    </section>
    <textarea style="background:#000;"></textarea>
  </div>
</template>

<script>
import { fetchPosts } from '@/api/article'
export default {
  name: 'home',
  data() {
    return {
      posts: [],
    }
  },
  components: {},
  created() {
    fetchPosts()
      .then(res => {
        this.posts = res.posts
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  },
}
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  background-color: #000000;
}
#top {
  height: 100%;
  #heading {
    -webkit-user-select: none;
    position: absolute;
    top: 50%;
    margin-top: -9.375rem;
    text-align: center;
    width: 100%;
    color: #fff;
    h1 {
      margin-top: 0;
    }
  }
  #logo {
    font: 9.375rem 'Italiana', sans-serif;
    margin-bottom: 0;
  }
}

section {
  border-bottom: 0.0625rem solid #eee;
  min-height: 50%;
  text-align: center;
}
section:nth-child(2n) {
  background: #fdfdfd;
  box-shadow: inset 0 0.0625rem 0 0 white;
}
section:not(:last-child) {
  border-bottom: 0.0625rem solid #eee;
}

#posts-list {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 50px;
}

#posts {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  .post {
    width: 60%;
    display: flex;
    justify-content: space-between;
    .title {
      h2 {
        font-size: 1.5rem;
        color: #000;
        font-weight: 300;
        font-family: AdobeFS;
        text-align: left;
        &:hover {
          color: #8a8a8a;
        }
      }
    }
    .meta {
      text-align: left;
      & span,
      & a {
        color: #a7a7a7;
      }
      & a:hover {
        color: #5f5f5f;
      }
    }
  }
}
@media screen and (max-width: 760px) {
  #posts {
    width: 95%;
    .post {
      width: 100%;
    }
  }
}
#more {
  margin-top: 1.875rem;
  font-size: 1rem;
  padding: 2px 0 0.625rem 0;
  border-radius: 1px;
  cursor: pointer;
  a {
    color: rgb(0, 0, 0);
  }
  a:hover {
    color: rgb(179, 179, 179);
  }
}
</style>
