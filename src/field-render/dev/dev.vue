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
        type: 'radio-group',
        vModel: true,
        children: [
          {
            type: 'radio-button',
            text: '222',
            props: {
              label: 2
            }
          },
          {
            type: 'radio-button',
            text: '333',
            props: {
              label: 3
            }
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
