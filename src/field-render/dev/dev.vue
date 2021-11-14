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
        type: 'slider',
        vModel: true,
        props: {
          mix: 0,
          max: 100
        }
      },
      value: 33
    }
  }
}
</script>

<style>
.m-l-10 {
  margin-left: 10px;
}
</style>
