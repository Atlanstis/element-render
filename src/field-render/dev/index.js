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
  InputNumber,
  Cascader,
  Switch,
  Slider
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
  .use(Cascader)
  .use(Switch)
  .use(Slider)
new Vue({
  el: '#app',
  render: (h) => h(Dev)
})
