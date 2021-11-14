<template>
  <div>
    <render :config="config" v-model="value">
      <!-- <template slot-scope="{ data, node }">
        <span>{{ data.label }}</span>
        <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
      </template> -->
    </render>
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
        type: 'cascader',
        vModel: true,
        props: {
          options: [
            {
              value: 'zhinan',
              label: '指南',
              children: [
                {
                  value: 'shejiyuanze',
                  label: '设计原则',
                  children: [
                    {
                      value: 'yizhi',
                      label: '一致'
                    },
                    {
                      value: 'fankui',
                      label: '反馈'
                    },
                    {
                      value: 'xiaolv',
                      label: '效率'
                    },
                    {
                      value: 'kekong',
                      label: '可控'
                    }
                  ]
                },
                {
                  value: 'daohang',
                  label: '导航',
                  children: [
                    {
                      value: 'cexiangdaohang',
                      label: '侧向导航'
                    },
                    {
                      value: 'dingbudaohang',
                      label: '顶部导航'
                    }
                  ]
                }
              ]
            }
          ]
        },
        scopedSlots: (h) => {
          return {
            default: (props) => {
              const eles = [h('span', props.data.label)]
              if (!props.node.isLeaf) {
                eles.push(h('span', '(' + props.data.children.length + ')'))
              }
              return eles
            }
          }
        },
        children: [],
        on: {
          change: (val) => {
            console.log(`change: ${val}`)
          }
        }
      },
      value: []
    }
  }
}
</script>

<style>
.m-l-10 {
  margin-left: 10px;
}
</style>
