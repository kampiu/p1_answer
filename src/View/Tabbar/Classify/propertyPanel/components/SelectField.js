import React, { useContext } from 'react'
import { Form, Select } from 'antd'
import * as IconAll from '@ant-design/icons'

function SelectField ({ options }) {
	
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
		}],
		dataList = []
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
		}],
		dataList: []
	}, options)
	
	return (
		<Form.Item name={ key } key={ key } label={ label } required={ required } hidden={ hidden } rules={ rules }>
			<Select disabled={ disabled } placeholder={ placeholder }>
				{
					dataList.map(item => <Select.Option value={ item.value }>{ item.text }</Select.Option>)
				}
			</Select>
		</Form.Item>
	)
}

export default SelectField
