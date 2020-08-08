import React, { useState } from 'react'
import { Form, Radio } from 'antd'

function ButtonField ({ options }) {
	
	const {
		type,
		key,
		label,
		disabled,
		required,
		size,
		hidden,
		value,
		rules,
		dataList,
	} = Object.assign({
		type: 'Button',
		key: '',
		label: '',
		size: 'middle',
		value: '',
		hidden: false,
		disabled: false,
		required: false,
		placeholder: '',
		dataList: [],        // 按钮组
	}, options)
	
	const [buttonValue, changeButtonValue] = useState(value || '')
	
	return (
		<Form.Item name={ key } key={ key } label={ label } required={ required } hidden={ hidden }>
			<Radio.Group value={ buttonValue }>
				{
					dataList.map(item => {
						return <Radio.Button key={ item.value } disabled={ disabled }
						               value={ item.value }>{ item.text }</Radio.Button>
					})
				}
			
			</Radio.Group>
		</Form.Item>
	)
}

export default ButtonField
