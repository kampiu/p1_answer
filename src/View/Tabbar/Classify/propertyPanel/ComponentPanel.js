import React, { Component, memo, useEffect, useRef, useState } from 'react'
import { UpdateData } from '../../../../Store/Modules/EditorModule'
import { connect } from 'react-redux'
import { Form, Input } from 'antd'
import { FormPanelStyle, EmptyStyle } from './style'
import FieldComponent from './components'
import Factory from './factory'

function ComponentPanel ({ componentId, selected, UpdateData }) {
	
	const [Group, changeGroup] = useState([])
	const formRef = useRef()
	
	useEffect(() => {
		if (selected && selected.componentType) {
			changeGroup(Factory[selected.componentType])
			formRef.current.setFieldsValue({ ...selected })
		}
	}, [selected])
	
	function onValuesChange (values) {
		UpdateData(values)
	}
	
	return (
		<FormPanelStyle>
			{
				selected ? (
					<Form
						layout="vertical"
						labelCol={ { span: 10 } }
						wrapperCol={ { span: 24 } }
						ref={ formRef }
						initialValues={ { ...selected } }
						onValuesChange={ onValuesChange }>
						{
							Group.map(item => {
								const Component = FieldComponent[item.type]
								return <Component key={ item.key } options={ item }/>
							})
						}
					</Form>
				) : (
					<EmptyStyle>请选择表单组件</EmptyStyle>
				)
			}
		</FormPanelStyle>
	)
}

export default connect((state) => ({
	selected: state.Editor.selected
}), {
	UpdateData
})(memo(ComponentPanel))
