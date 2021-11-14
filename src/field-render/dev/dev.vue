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
        type: 'checkbox-group',
        vModel: true,
        children: [
          {
            type: 'checkbox-button',
            props: {
              label: 'a'
            },
            text: 'A'
          },
          {
            type: 'checkbox-button',
            props: {
              label: 'b'
            },
            text: 'B'
          }
        ],
        on: {
          change: (val) => {
            console.log(`change: ${val}`)
          }
        }
      },
      value: ['a', 'b']
    }
  }
}
</script>

<style>
.m-l-10 {
  margin-left: 10px;
}
</style>
