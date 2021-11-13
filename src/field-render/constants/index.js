export const EL_INPUT = 'el-input'
export const EL_RADIO = 'el-radio'

export const ALLOW_TAGS = [EL_INPUT, EL_RADIO]

// 原生属性列表
export const ATTR_PROPS = {
  [EL_INPUT]: [
    'placeholder',
    'maxlength',
    'minlength',
    'autocomplete',
    'name',
    'readonly',
    'max',
    'min',
    'step',
    'form'
  ],
  [EL_RADIO]: ['name']
}
