<template>
  <div>
    <render :config="config" v-model="value"></render>
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
        children: [
          {
            tag: 'template',
            slot: 'prepend',
            text: 'Http://'
          }
        ],
        on: {
          change: (val) => {
            console.log(`change: ${val}`)
          }
        }
      },
      value: 2
    }
  }
}
</script>

<style>
.m-l-10 {
  margin-left: 10px;
}
</style>
