import Vue from 'vue'
import { Button, Input, Radio } from 'element-ui'
import Dev from './dev.vue'
Vue.use(Button).use(Input).use(Radio)

new Vue({
  el: '#app',
  render: (h) => h(Dev)
})
