const EL_INPUT = 'el-input'
const EL_RADIO = 'el-radio'
const EL_RADIO_GROUP = 'el-radio-group'
const EL_RADIO_BUTTON = 'el-radio-button'

export const ALLOW_TAGS = [EL_INPUT, EL_RADIO, EL_RADIO_GROUP, EL_RADIO_BUTTON]

export const ALLOW_SIZE = [EL_INPUT, EL_RADIO, EL_RADIO_GROUP]

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
  [EL_RADIO_BUTTON]: ['name']
}
