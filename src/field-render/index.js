import {
  transferToElTag,
  isElTag,
  deepClone,
  isObject,
  isFunction,
  isString,
  isArray,
  removeKey,
  hasOwnProperty,
  defineUnEnumerable
} from './utils'
import { ATTR_PROPS } from './constants'

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

// 处理 v-model
const vModelBind = (dataObject, _VModel_, context) => {
  if (!context) return
  const { props, data } = context
  if (_VModel_) {
    const {
      on: { _model_change_ }
    } = data
    dataObject.props.value = props._value_
    dataObject.on.input = (...vals) => {
      _model_change_(...vals)
    }
  }
}

// 处理数据对象
const dataObjectBind = (dataObject, config) => {
  if (!isObject(config)) return
  if (!isElTag(config._tag_)) {
    removeKey(dataObject, 'nativeOn')
  }
  Object.keys(config).forEach((key) => {
    switch (key) {
      case 'class':
      case 'style':
        dataObject[key] = config[key] || {}
        break
      case 'props':
        propsHandle(dataObject, config)
        break
      case 'attrs':
        attrsHandle(dataObject, config)
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
const eventHandle = (dataObject, { on, _VModel_ }) => {
  const events = on || {}
  Object.keys(events).forEach((eventName) => {
    const func = events[eventName]
    if (isFunction(func)) {
      if (_VModel_ && eventName === 'input') {
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

const attrsHandle = (dataObject, { attrs }) => {
  if (!isObject(attrs)) return
  Object.keys(attrs).forEach((key) => {
    if (!hasOwnProperty(dataObject.attrs, key)) {
      dataObject.attrs[key] = attrs[key]
    }
  })
}

const scopedSlotsBind = (dataObject, config, h) => {
  if (isFunction(config.scopedSlots)) {
    dataObject.scopedSlots = config.scopedSlots(h)
  }
  removeKey(config, 'scopedSlots')
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
    const { tag, dataObject, childrenVnodes } = configAnalysis(
      h,
      cloneConfig,
      context
    )
    if (!tag) {
      return h('div', 'no matched component')
    }
    return h(tag, dataObject, childrenVnodes)
  }
}

// 解析配置
const configAnalysis = (h, config, context) => {
  let tag = transferToElTag(config.type)
  if (hasOwnProperty(config, 'tag') && isString(tag)) {
    tag = config.tag
  }
  if (!tag) return {}
  removeKey(config, 'type')
  defineUnEnumerable(config, '_tag_', tag)
  // 如果配置中属性 vModel 为 true，添加 v-model 标记
  if (config.vModel) {
    defineUnEnumerable(config, '_VModel_', true)
    removeKey(config, 'vModel')
  }
  // 处理子元素节点
  const childrenVnodes = childrenVNodeAnalysis(h, config)
  // 初始化数据对象
  const dataObject = makeDataObject()
  // 处理 scopedSlots，处理较为生硬，有待优化
  scopedSlotsBind(dataObject, config, h)
  // 绑定 v-model
  vModelBind(dataObject, config._VModel_, context)
  // 处理数据对象
  dataObjectBind(dataObject, config)
  return {
    tag,
    childrenVnodes,
    dataObject
  }
}

// 解析子元素
const childrenVNodeAnalysis = (h, config) => {
  const vnodes = []
  if (hasOwnProperty(config, 'text')) {
    const { text } = config
    removeKey(config, 'text')
    if (isString(text)) vnodes.push(text)
  } else if (hasOwnProperty(config, 'children')) {
    const { children } = config
    if (!isArray(children)) return []
    removeKey(config, 'children')
    for (let i = 0, length = children.length; i < length; i++) {
      const childConfig = children[i]
      if (!isObject(childConfig)) break
      const { tag, dataObject, childrenVnodes } = configAnalysis(h, childConfig)
      if (!tag) break
      vnodes.push(h(tag, dataObject, childrenVnodes))
    }
  }
  return vnodes
}
