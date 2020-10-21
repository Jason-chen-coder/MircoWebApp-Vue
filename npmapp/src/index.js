// 这里import 的 btn和btnDemo.vue的name属性名相同 ！
import btn from './btnDemo.vue'
// 给组件配置install方法
btn.install = Vue => Vue.component(btn.name, btn)

export default btn;