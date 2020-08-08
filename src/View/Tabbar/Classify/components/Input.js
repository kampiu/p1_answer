import React, { useEffect, useState } from 'react'
import { Input, Form } from 'antd'
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
	size: 'large',
	type: 'text',
	label: '单行输入框',
	placeholder: '',
	allowClear: false,
	componentType: 'INPUT',
	required: false
}

function CustomInput ({
	defaultValue = '',
	disabled = false,
	id,
	key,
	size = 'large',
	type = 'text',
	label = '单行输入框',
	placeholder = '',
	allowClear = false,
	componentType = 'INPUT',
	description = '',
	required = false,
}) {
	
	const Config = {
		extra: description,
		label,
		labelAlign: 'right',
		defaultValue,
		required,
		name: key,
	}
	
	return (
		<Form.Item { ...Config } style={ { margin: 0 } }>
			<Input placeholder={ placeholder } />
		</Form.Item>
	)
}

export default ComponentMenu(CustomInput)
