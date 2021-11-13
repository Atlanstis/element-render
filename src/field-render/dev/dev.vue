<template>
  <div>
    <render :config="config" v-model="value"></render>
    {{ text }}
    <el-button @click="test">测试</el-button>
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
        style: { width: '300px' },
        class: 'm-l-10',
        ref: 'test',
        props: {
          placeholder: '请输入内容',
          maxlength: 3
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
      value: '',
      text: ''
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
