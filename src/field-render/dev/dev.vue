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
        type: 'switch',
        vModel: true,
        props: {
          'active-color': '#13ce66',
          'inactive-color': '#ff4949'
        }
      },
      value: true
    }
  }
}
</script>

<style>
.m-l-10 {
  margin-left: 10px;
}
</style>
