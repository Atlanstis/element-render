import Vue from 'vue'
import { Button, Input } from 'element-ui'
import Dev from './dev.vue'
Vue.use(Button).use(Input)

new Vue({
  el: '#app',
  render: (h) => h(Dev)
})
