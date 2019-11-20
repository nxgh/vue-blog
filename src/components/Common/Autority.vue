<script>
import { check } from '../utils/auth'
export default {
  functional: true,
  props: {
    authority: {
      type: Array,
      required: true,
    },
  },
  render(h, context) {
    const { props, scopedSlots } = context
    return check(props.authority) ? scopedSlots.default() : null
  },
}
// 使用方式
/* main.js
 * import Authorized from "./components/Authorized"
 * Vue.component("Authorized", Authorized)
 */
</script>
