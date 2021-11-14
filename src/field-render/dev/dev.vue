<template>
  <div>
    <render :config="config" v-model="value"> </render>
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
        type: 'time-select',
        vModel: true,
        props: {
          placeholder: '请选择时间',
          'picker-options': {
            start: '8:30',
            end: '18:00',
            step: '00:15'
          },
          size: 'small'
        }
      },
      value: ''
    }
  }
}
</script>

<style>
.m-l-10 {
  margin-left: 10px;
}
</style>
