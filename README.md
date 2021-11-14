### date-picker

```js
{
  type: 'date-picker',
    vModel: true,
      props: {
        placeholder: '请选择时间',
          type: 'date',
            size: 'small'
      }
}
```

### Time-picker

```js
{
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
}
```

### time-select

```js
{
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
}
```

### slider

```js
{
  type: 'slider',
    vModel: true,
      props: {
        mix: 0,
          max: 100
      }
}
```

### switch

```js
{
  type: 'switch',
    vModel: true,
      props: {
        'active-color': '#13ce66',
          'inactive-color': '#ff4949'
      }
}
```

### cascader

```js
{
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
}
```



### input-number

```js
{
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
}
```



### checkbox-group

```js
{
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
}
```

### checkbox

```js
{
  type: 'checkbox',
    vModel: true,
      text: '测试',
        props: {
          disabled: true
        },
          on: {
            change: (val) => {
              console.log(`change: ${val}`)
            }
          }
}
```

### radio-group

```js
{
  type: 'radio-group',
  vModel: true,
  children: [
    {
      type: 'radio',
      text: '222',
      props: {
        label: 2
      }
    },
    {
      type: 'radio',
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
}
// radio-button
{
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
}
```

### input

```js
// slot
{
  type: 'input',
  vModel: true,
  children: [
    {
      tag: 'template',
      slot: 'prepend',
      text: 'Http://'
    }
  ],
  on: {
    change: (val) => {
      console.log(`change: ${val}`)
    }
  }
}
```
