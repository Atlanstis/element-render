<template>
  <div>
    <div>
      <render :config="config" v-model="value"></render>
      {{ text }}
      <el-button @click="test">测试</el-button>
    </div>
    <div>
      <render :config="radioConfig" v-model="radio"></render>
      <render :config="radioConfig2" v-model="radio"></render>
    </div>
  </div>
</template>

<script>
import Render from '../index'
export default {
  components: {
    Render
  },
  data() {
    return {
      config: {
        type: 'input',
        vModel: true,
        style: { width: '300px' },
        class: 'm-l-10',
        ref: 'test',
        props: {
          placeholder: '请输入内容',
          maxlength: 20
        },
        key: 'input',
        on: {
          focus: () => {
            console.log('focus')
          },
          change: (val) => {
            console.log(`change: ${val}`)
          },
          input: (val) => {
            this.text = val
          }
        }
      },
      radioConfig: {
        type: 'radio',
        props: {
          label: '3',
          disabled: true
        },
        on: {
          change: (val) => {
            console.log(val)
          }
        },
        text: 'radio3',
        vModel: true
      },
      radioConfig2: {
        type: 'radio',
        props: {
          label: '4'
        },
        on: {
          change: (val) => {
            console.log(val)
          }
        },
        text: 'radio4',
        vModel: true
      },
      value: '',
      text: '',
      radio: ''
    }
  },

  methods: {
    test() {
      this.$refs.test.focus()
    }
  }
}
</script>

<style>
.m-l-10 {
  margin-left: 10px;
}
</style>
