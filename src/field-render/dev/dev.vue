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
        type: 'time-picker',
        vModel: true,
        props: {
          placeholder: '请选择时间',
          'picker-options': {
            selectableRange: '18:30:00 - 20:30:00'
          },
          'arrow-control': true,
          'is-range': true,
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
