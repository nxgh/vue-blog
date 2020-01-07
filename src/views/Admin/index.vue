<template>
  <div class="container">
    <aside>
      <div class="side-menu-item " v-for="item in categoryList" :key="item">
        <div class="category-item" @click="handleFolder(item)">
          <img :src="Folder" alt="" />
          <span>{{ item }}</span>
        </div>
        <div class="category-posts" v-show="showFolder[item]">
          <div
            class="post-title"
            v-for="post in categoryMap[item]"
            :key="post.id"
            @click="selectPost(post.id)"
          >
            <img :src="MkdSvg" alt="" />
            <a>{{ post.title }}</a>
          </div>
        </div>
      </div>
    </aside>
    <article>
      <Editor :source="post" />
    </article>
  </div>
</template>

<script>
import { fetchCategoryMap, fetchPost } from '@/api/article'
import Folder from '@/assets/svg/folder-close.svg'
import MkdSvg from '@/assets/svg/markdown-blue.svg'

import Editor from '@/components/Editor'

export default {
  name: 'admin',
  components: {
    Editor,
  },
  data() {
    return {
      Folder,
      MkdSvg,
      categoryMap: {},
      categoryList: [],
      showFolder: {},
      post: {},
    }
  },

  methods: {
    handleFolder(item) {
      this.showFolder[item] = this.showFolder[item] ? false : true
    },
    changeWidth() {
      console.log(`changeWidth`)
    },
    selectPost(pid) {
      console.log(`selectPost`, pid)
      fetchPost(pid)
        .then(res => {
          console.log(res)
          this.post = res
        })
        .catch(err => {
          console.log(err)
        })
    },
  },
  created() {
    fetchCategoryMap()
      .then(res => {
        this.categoryMap = res
        this.categoryList = Object.keys(res)
        let folderMap = {}
        Object.keys(res).forEach(item => (folderMap[item] = true))
        this.showFolder = folderMap
        console.log(folderMap)
      })
      .catch(err => {
        console.log(err)
      })
  },
}
</script>

<style lang="less" scoped>
img {
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.5rem;
}
.container {
  display: flex;
  width: 100%;
  height: 100%;
}
aside {
  overflow-y: scroll;
  overflow-x: hidden;
  background: #353535;
  border-right: 1px solid;
  width: 20%;
  padding-right: 0.9375rem;
  min-height: 100%;
  .side-menu-item {
    margin-bottom: 0.625rem;
    cursor: pointer;
    .category-item {
      color: #ff9d00;
      display: flex;
      align-items: center;
      img {
        margin-left: 0.9375rem;
      }
      &:hover {
        background-color: rgb(88, 88, 88);
      }
    }
    .category-posts {
      color: #e3ffe0;
      margin-left: 40px;
      overflow-y: hidden;
      .post-title {
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        margin: 0.3125rem 0;
        &:hover {
          background-color: rgb(90, 90, 90);
        }
        a {
          overflow: hidden;
          font-size: 1.0625rem;
          font-family: AdobeFS;
        }
      }
    }
  }
}
aside::-webkit-scrollbar {
  width: 3px;
  height: 3px;
  border: transparent;
  background-color: #fffefe;
}
/*定义滚动条轨道内阴影+圆角*/
aside::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  background-color: #ffffff;
}
/*定义滑块内阴影+圆角*/
aside::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #555;
}
article {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
