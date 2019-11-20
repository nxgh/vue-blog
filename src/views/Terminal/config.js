const marked = require('marked')
// import marked from 'marked'

// export const help = marked(`
const help = marked(`
**命令列表**
  - ls      展示文章列表
  - cat     [title] 展示文章详情
  - startx  进入 blog
  - clear   清空页面
`)

// ls
// 请求 vuex — get_posts 渲染列表
// cat
//

// export const not_found = cmd => `
//    <p><span class="error-symbol">×<span>command not found: ${cmd}</p>
// `
console.log('help', help)
