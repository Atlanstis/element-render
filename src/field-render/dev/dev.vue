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
        type: 'input-number',
        vModel: true,
        props: {
          min: 1,
          max: 10
        },
        on: {
          change: (val) => {
            console.log(`change: ${val}`)
          }
        }
      },
      value: 3
    }
  }
}
</script>

<style>
.m-l-10 {
  margin-left: 10px;
}
</style>
