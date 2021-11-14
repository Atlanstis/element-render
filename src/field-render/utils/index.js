export const transferToElTag = (tag) => {
  if (!tag) return ''
  return `el-${tag}`
}

export const isElTag = (tag) => tag.startsWith('el-')

export const is = (val, type) =>
  Object.prototype.toString.call(val) === `[object ${type}]`

export const isObject = (val) => is(val, 'Object')

export const isFunction = (val) => is(val, 'Function')

export const isString = (val) => typeof val === 'string'

export const isArray = (val) => Array.isArray(val)

export const hasOwnProperty = (obj, key) =>
  Object.prototype.hasOwnProperty.call(obj, key)

export const removeKey = (obj, key) => {
  if (hasOwnProperty(obj, key)) delete obj[key]
}

export const defineUnEnumerable = (obj, key, value) => {
  Object.defineProperty(obj, key, {
    value,
    enumerable: false
  })
}

// 深拷贝对象
export const deepClone = (obj) => {
  const _toString = Object.prototype.toString

  // null, undefined, non-object, function
  if (!obj || typeof obj !== 'object') {
    return obj
  }

  // DOM Node
  if (obj.nodeType && 'cloneNode' in obj) {
    return obj.cloneNode(true)
  }

  // Date
  if (_toString.call(obj) === '[object Date]') {
    return new Date(obj.getTime())
  }

  // RegExp
  if (_toString.call(obj) === '[object RegExp]') {
    const flags = []
    if (obj.global) {
      flags.push('g')
    }
    if (obj.multiline) {
      flags.push('m')
    }
    if (obj.ignoreCase) {
      flags.push('i')
    }

    return new RegExp(obj.source, flags.join(''))
  }

  const result = Array.isArray(obj)
    ? []
    : obj.constructor
    ? new obj.constructor()
    : {}

  for (const key in obj) {
    result[key] = deepClone(obj[key])
  }

  return result
}
