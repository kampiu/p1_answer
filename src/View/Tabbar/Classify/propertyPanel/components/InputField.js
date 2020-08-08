import React, { useContext } from 'react'
import { Form, Input } from 'antd'

function InputField ({ options }) {
	
	const {
		type,
		key,
		label,
		value,
		disabled,
		required,
		placeholder,
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
		<Form.Item name={ key } key={ key } label={ label } required={ required } hidden={ hidden } rules={rules}>
			<Input disabled={ disabled } placeholder={ placeholder }/>
		</Form.Item>
	)
}

export default InputField
