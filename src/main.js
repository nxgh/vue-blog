import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Id2Time from './filters'
import { Highlight } from './directive/index.js'
import 'highlight.js/styles/github.css'
import 'highlight.js/styles/atom-one-dark.css'
// import 'highlight.js/styles/dark.css'

import '@/assets/css/github-markdown.css'
import '@/assets/css/normalize.less'
import '@/assets/css/reset.less'
import '@/assets/css/GlobalStyle.less'

Vue.config.productionTip = false

Vue.use(Id2Time)
Vue.use(Highlight)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
