import React, { useEffect, useState } from 'react'
import { Select, Form } from 'antd'
import ComponentMenu from './ComponentMenu'

/*
 * addonAfter       带标签的 input，设置后置标签
 * addonBefore      带标签的 input，设置前置标签
 * defaultValue     输入框默认内容
 * disabled         是否禁用状态，默认为 false
 * id               输入框的 id
 * maxLength        最大长度
 * allowClear       可以点击清除图标删除内容
 * type             声明 input 类型，同原生 input 标签的 type 属性
 * size             控件大小。注：标准表单内的输入框大小限制为 large
 * key              组件的Key
 * componentType    组件渲染类型  INPUT
 */
export const Config = {
	defaultValue: '',
	disabled: false,
	id: null,
	key: '',
	label: '下拉框',
	componentType: 'SELECT',
	dataList: [],
	dataKey: '',
	dataValue: '',
	required: false,
}

function CustomCheckbox ({
	defaultValue = '',
	disabled = false,
	id,
	label = '下拉框',
	componentType = 'INPUT',
	description = '',
	dataList = [],
	dataKey = '',
	dataValue = '',
	required = false,
	placeholder = '',
}) {
	
	const [options, InitOptions] = useState([{
		label: '选项A',
		value: 'AAA'
	}, {
		label: '选项B',
		value: 'BBB'
	}, {
		label: '选项C',
		value: 'CCC'
	}])
	
	const Config = {
		extra: description,
		label,
		labelAlign: 'right',
		defaultValue,
		required
	}
	
	return (
		<Form.Item { ...Config } style={ { margin: 0 } }>
			<Select disabled={ disabled } placeholder={placeholder}>
				{
					options.map(item => <Select.Option key={ item.value }
					                                    value={ item.value }>{ item.label }</Select.Option>)
				}
			</Select>
		</Form.Item>
	)
}

export default ComponentMenu(CustomCheckbox)
