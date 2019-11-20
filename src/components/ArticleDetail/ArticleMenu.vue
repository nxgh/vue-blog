<template>
  <aside class="side-menu" :style="{ width: w_aside + 'px' }">
    <div class="menu">
      <Marked :source="side_menu" />
    </div>
    <span class="switch-menu" :style="{ left: w_aside + 'px' }" @click="show_menu"
      >{{ w_symbol }}
    </span>
  </aside>
</template>

<script>
import Marked from '@/components/Marked/Marked'
export default {
  components: {
    Marked,
  },
  name: 'article-menu',
  data() {
    return {
      w_aside: 0,
      w_symbol: '→',
    }
  },
  props: {
    source: {
      type: String,
      default: '',
    },
  },
  methods: {
    show_menu() {
      this.w_aside === 220 ? (this.w_aside = 0) : (this.w_aside = 220)
      this.w_symbol === '→' ? (this.w_symbol = '←') : (this.w_symbol = '→')
    },
    extract_title(text, indent = 1, indent_char = ' ') {
      return text
        .split('\n')
        .map(line => line.match(/^(#+)[ \t]+(.*)$/))
        .filter(item => item !== null)
        .map(([, prefix, title]) => ({ level: prefix.length, title }))
        .map(
          ({ level, title }) =>
            indent_char.repeat((level - 1) * indent) + '- ' + `[${title}](#${title})`
        )
        .join('\n')
    },
  },
  computed: {
    side_menu() {
      return this.extract_title(this.source)
    },
  },
}
</script>

<style lang="less" scoped>
.side-menu {
  height: 100%;
  background-color: #0000005b;
  transition: width 0.2s;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: hidden;
  overflow-x: scroll;
  .switch-menu {
    transition: left 0.2s;
    background-color: #00000028;
    position: fixed;
    width: 2.5rem;
    height: 1.25rem;
    top: 50%;
    text-align: center;
    padding: 2.1875rem 0;
    font-size: 1.1875rem;
    border: 0.0625rem solid #00000028;
    border-radius: 0rem 0.3125rem 0.3125rem 0rem;
    cursor: pointer;
    &:hover {
      background-color: #00000085;
    }
  }
}
.menu {
  margin-top: 6.25rem;

  &::v-deep a {
    color: #ffffff;
    text-decoration: none;
    &:hover {
      color: #7a7a7a;
    }
  }
}
@media screen and (max-width: 400px) {
  .side-menu,
  .switch-menu {
    background-color: rgb(179, 179, 179);
  }
  .menu::v-deep a {
    color: #ffffff;
  }
}
</style>
