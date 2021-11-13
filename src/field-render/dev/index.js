import Vue from 'vue'
import { Button, Input, Radio, RadioGroup } from 'element-ui'
import Dev from './dev.vue'
Vue.use(Button).use(Input).use(Radio).use(RadioGroup)

new Vue({
  el: '#app',
  render: (h) => h(Dev)
})
