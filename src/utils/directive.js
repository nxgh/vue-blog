import hljs from 'highlight.js'

import { check } from './auth'

export const Auth = (Vue, options = {}) => {
  Vue.directive(options.name || 'auth', {
    inserted(el, binding) {
      if (!check(binding.value)) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    },
  })
}

export const Highlight = Vue => {
  Vue.directive('highlight', el => {
    let blocks = el.querySelectorAll('pre code')
    blocks.forEach(block => {
      hljs.highlightBlock(block)
    })
  })
}
