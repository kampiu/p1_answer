import React from 'react'
import { FormStyle } from './style'
import FormRow from './../FormRow'

const FormComponent = () => (WrappedComponent) => function Form (props) {
	
	const { thead, list, HandleTapAction } = props
	return (
		<FormStyle>
			<thead>
			<tr>
				{
					thead.map(item => <th key={ item }>{ item }</th>)
				}
			</tr>
			</thead>
			<tbody>
			{
				list.map(item => <WrappedComponent HandleTapAction={ HandleTapAction } key={ item.guid }
				                                   card={ item }/>)
			}
			</tbody>
		</FormStyle>
	)
}
export default FormComponent()(FormRow)
