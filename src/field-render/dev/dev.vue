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
        type: 'rate',
        vModel: true,
        props: {
          'show-text': true,
          texts: ['一', '二', '三', '四', '五']
        }
      },
      value: null
    }
  }
}
</script>

<style>
.m-l-10 {
  margin-left: 10px;
}
</style>
