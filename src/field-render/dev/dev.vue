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
        type: 'date-picker',
        vModel: true,
        props: {
          placeholder: '请选择时间',
          type: 'date',
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
