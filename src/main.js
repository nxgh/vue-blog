import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Id2Time from '@/utils/filter'
import { Highlight, Auth } from '@/utils/directive'
import 'highlight.js/styles/github.css'

import '@/assets/css/github-markdown.css'
import '@/assets/css/normalize.less'
import '@/assets/css/reset.less'
import '@/assets/css/GlobalStyle.less'

Vue.config.productionTip = false

Vue.use(Id2Time)
Vue.use(Auth)
Vue.use(Highlight)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
