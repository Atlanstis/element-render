import {
  transferToElTag,
  deepClone,
  isObject,
  isFunction,
  defineUnEnumerable
} from './utils'
import { ALLOW_TAGS, ATTR_PROPS } from './constants'

// 初始化数据对象
const makeDataObject = () => {
  // 深入数据对象：
  // https://cn.vuejs.org/v2/guide/render-function.html#%E6%B7%B1%E5%85%A5%E6%95%B0%E6%8D%AE%E5%AF%B9%E8%B1%A1
  return {
    class: {},
    attrs: {},
    props: {},
    domProps: {},
    nativeOn: {},
    on: {},
    style: {},
    directives: [],
    scopedSlots: {},
    slot: null,
    key: null,
    ref: null,
    refInFor: false
  }
}

const removeKey = (obj, key) => {
  delete obj[key]
}

// 处理 v-model
const vModelBind = (
  dataObject,
  {
    props,
    data: {
      on: { _model_change_ }
    }
  }
) => {
  dataObject.props.value = props._value_
  dataObject.on.input = (...vals) => {
    _model_change_(...vals)
  }
}

// 处理数据对象
const dataObjectBind = (dataObject, config) => {
  if (!isObject(config)) return
  Object.keys(config).forEach((key) => {
    switch (key) {
      case 'class':
      case 'style':
        dataObject[key] = config[key] || {}
        break
      case 'props':
        propsHandle(dataObject, config)
        break
      case 'on':
        // case 'nativeOn':
        eventHandle(dataObject, config)
        break
      case 'ref':
      case 'key':
      case 'slot':
        dataObject[key] = config[key] || null
        break
    }
  })
}

// 处理事件
const eventHandle = (dataObject, { on }) => {
  const events = on || {}
  Object.keys(events).forEach((eventName) => {
    const func = events[eventName]
    if (isFunction(func)) {
      if (eventName === 'input' && dataObject.on.input) {
        const onFunc = dataObject.on.input
        dataObject.on.input = (...vals) => {
          onFunc(...vals)
          func(...vals)
        }
      } else {
        dataObject.on[eventName] = func
      }
    }
  })
}

// 处理 props 数据，分离 props 与 attrs
const propsHandle = (dataObject, { props, _tag_ }) => {
  if (!isObject(props)) return
  const attrProps = ATTR_PROPS[_tag_] || []
  Object.keys(props).forEach((key) => {
    const value = props[key]
    attrProps.includes(key)
      ? (dataObject.attrs[key] = value)
      : (dataObject.props[key] = value)
  })
}

export default {
  functional: true,

  model: {
    prop: '_value_',
    event: '_model_change_'
  },

  props: {
    config: {
      type: Object,
      default: () => ({})
    },
    _value_: {}
  },

  render: function (h, context) {
    const cloneConfig = deepClone(context.props.config)
    const tag = transferToElTag(cloneConfig.type)
    if (!ALLOW_TAGS.includes(tag)) {
      return h('div', 'no matched tag')
    }
    removeKey(cloneConfig, 'type')
    defineUnEnumerable(cloneConfig, '_tag_', tag)
    // 初始化数据对象
    const dataObject = makeDataObject()
    // 绑定 v-model
    vModelBind(dataObject, context)
    // 处理数据对象
    dataObjectBind(dataObject, cloneConfig)

    return h(tag, dataObject)
  }
}
