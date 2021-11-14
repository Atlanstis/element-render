import Vue from 'vue'
import {
  Button,
  Input,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxGroup,
  CheckboxButton,
  InputNumber
} from 'element-ui'
import Dev from './dev.vue'
Vue.use(Button)
  .use(Input)
  .use(Radio)
  .use(RadioGroup)
  .use(RadioButton)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(CheckboxButton)
  .use(InputNumber)
new Vue({
  el: '#app',
  render: (h) => h(Dev)
})
