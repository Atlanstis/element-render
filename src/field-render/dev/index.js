import Vue from 'vue'
import { Button, Input, Radio, RadioGroup, RadioButton } from 'element-ui'
import Dev from './dev.vue'
Vue.use(Button).use(Input).use(Radio).use(RadioGroup).use(RadioButton)

new Vue({
  el: '#app',
  render: (h) => h(Dev)
})
