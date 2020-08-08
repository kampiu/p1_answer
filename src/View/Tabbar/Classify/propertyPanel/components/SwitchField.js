import React, { useContext } from 'react'
import { Form, Switch } from 'antd'

function SwitchField ({ options }) {
	
	const {
		type,
		key,
		label,
		value,
		disabled,
		required,
		hidden,
		rules = [{
			required: options.required || false
		}]
	} = Object.assign({
		type: 'Input',
		key: '',
		label: '',
		disabled: false,
		required: false,
		placeholder: '',
		hidden: false,
		rules: [{
			required: false
		}]
	}, options)
	
	return (
		<Form.Item valuePropName="checked" name={ key } key={ key } label={ label } required={ required } hidden={ hidden } rules={rules}>
			<Switch checkedChildren="开启" unCheckedChildren="关闭" disabled={ disabled } />
		</Form.Item>
	)
}

export default SwitchField
