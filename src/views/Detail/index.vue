<template>
  <div class="container">
    <aside>
      <div id="home">
        <router-link to="/">
          Nxgh
        </router-link>
      </div>
    </aside>
    <header>
      <h1>{{ title }}</h1>
    </header>
    <article v-html="content" v-highlight class="markdown-body"></article>
    <section>
      <Comment />
    </section>
  </div>
</template>

<script>
import Marked from '@/utils/marked'

import { fetchPost } from '@/api/article'
import Comment from './Comment'

export default {
  name: 'detail',
  components: {
    Comment,
  },
  data() {
    return {
      detail: {},
      content: '',
      title: '',
    }
  },
  created() {
    fetchPost(this.$route.path.split('/')[2])
      .then(res => {
        // console.log(res)
        this.content = Marked(res.content)
        this.title = res.title
      })
      .catch(err => {
        console.log(err)
      })
  },
}
</script>

<style lang="less" scoped>
@toc: 300px;
@container-left: @toc+100px;
h1 {
  font-family: AdobeFS;
  font-size: 2.9rem;
}
/deep/ pre {
  background-color: #3d3434 !important;
}
/deep/ pre .flag {
  height: 0.9375rem;
  margin-bottom: 0.3125rem;
  span {
    border-radius: 50%;
    display: inline-block;
    margin-right: 0.375rem;
    border: 0.4375rem solid;
  }
  .span-r {
    border-color: #ff0000;
  }
  .span-y {
    border-color: #ffff00;
  }
  .span-g {
    border-color: #00ff00;
  }
}
/deep/ code {
  font-family: Monaco;
}
.container {
  margin: 30px 300px 20px @container-left;
  #home {
    a {
      font-family: AdobeFS;
    }
    position: fixed;
    font-size: 50px;
    left: 30px;
    max-width: @toc;
  }
}
/deep/ .table-of-contents {
  position: fixed;
  left: 0;
  top: 9.375rem;
  max-width: @toc;
}
/deep/ .markdown-body a {
  color: #000000;
  text-decoration: none;
  &:hover {
    color: #747474;
    font-size: 18px;
  }
}

@media screen and (max-width: 1080px) {
  .container {
    margin: 1.25rem 3.125rem;
    #home {
      position: relative;
    }
  }
  /deep/ .table-of-contents {
    position: relative;
  }
}
article {
  padding-bottom: 1.875rem;
  border-bottom: 1px solid #292929;
  margin-bottom: 1.875rem;
}
</style>
