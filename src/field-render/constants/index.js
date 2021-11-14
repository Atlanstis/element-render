const EL_INPUT = 'el-input'
const EL_RADIO = 'el-radio'
const EL_RADIO_GROUP = 'el-radio-group'
const EL_RADIO_BUTTON = 'el-radio-button'
const EL_CHECKBOX = 'el-checkbox'
const EL_CHECKBOX_GROUP = 'el-checkbox-group'
const EL_CHECKBOX_BUTTON = 'el-checkbox-button'
const EL_INPUT_NUMBER = 'el-input-number'
const EL_CASCADER = 'el-cascader'

export const ALLOW_TAGS = [
  EL_INPUT,
  EL_RADIO,
  EL_RADIO_GROUP,
  EL_RADIO_BUTTON,
  EL_CHECKBOX,
  EL_CHECKBOX_GROUP,
  EL_CHECKBOX_BUTTON,
  EL_INPUT_NUMBER,
  EL_CASCADER
]

export const ALLOW_SIZE = [
  EL_INPUT,
  EL_RADIO,
  EL_RADIO_GROUP,
  EL_CHECKBOX,
  EL_CHECKBOX_GROUP,
  EL_INPUT_NUMBER
]

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
  [EL_RADIO]: ['name'],
  [EL_RADIO_BUTTON]: ['name'],
  [EL_CHECKBOX]: ['name'],
  [EL_CHECKBOX_BUTTON]: ['name'],
  [EL_INPUT_NUMBER]: ['name']
}
