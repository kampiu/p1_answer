import Input, { Config as InputConfig } from './Input'
import Checkbox, { Config as CheckboxConfig } from './Checkbox'
import Radio, { Config as RadioConfig } from './Radio'
import Select, { Config as SelectConfig } from './Select'
import DateTime, { Config as DateTimeConfig } from './DateTime'
import Cascader, { Config as CascaderConfig } from './Cascader'

import InputIcon from './svg/input-icon.svg'
import CheckboxIcon from './svg/checkbox-icon.svg'
import RadioIcon from './svg/radio-icon.svg'
import SelectIcon from './svg/select-icon.svg'
import DateTimeIcon from './svg/date-picker-icon.svg'
import CascaderIcon from './svg/cascader-icon.svg'

export const ComponentType = {
	"INPUT": {
		title: "输入框",
		icon: InputIcon,
		component: Input,
		defaultConfig: InputConfig,
	},
	"CHECKBOX": {
		title: "多选框",
		icon: CheckboxIcon,
		component: Checkbox,
		defaultConfig: CheckboxConfig,
	},
	"RADIO": {
		title: "单选框",
		icon: RadioIcon,
		component: Radio,
		defaultConfig: RadioConfig,
	},
	"SELECT": {
		title: "下拉框",
		icon: SelectIcon,
		component: Select,
		defaultConfig: SelectConfig,
	},
	"DATETIME": {
		title: "时间选择器",
		icon: DateTimeIcon,
		component: DateTime,
		defaultConfig: DateTimeConfig,
	},
	"CASCADER": {
		title: "联级框",
		icon: CascaderIcon,
		component: Cascader,
		defaultConfig: CascaderConfig,
	},
	
}

export default {
	Input
}
