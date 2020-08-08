import React, { Component, memo, useEffect, useRef, useState } from 'react'
import { UpdateForm } from '../../../../Store/Modules/EditorModule'
import { connect } from 'react-redux'
import { Form, Input } from 'antd'
import { FormPanelStyle } from './style'
import FieldComponent from './components'

function FormPanel ({ formConfig, UpdateForm, ...props }) {
	
	const [Group, changeGroup] = useState([])
	const formRef = useRef()
	
	useEffect(() => {
		changeGroup([{
			type: 'Input',
			key: 'id',
			label: '表单ID',
			value: formConfig.id,
			required: true,
			placeholder: '请填写表单ID',
		}, {
			type: 'Input',
			key: 'form_name',
			label: '表单名称',
			value: formConfig.form_name,
			required: true,
			placeholder: '请填写表单名称',
		}, {
			type: 'Input',
			key: 'action_url',
			label: '表单提交URL',
			value: formConfig.action_url,
			required: true,
			placeholder: '请填写表单提交URL',
		}, {
			type: 'Input',
			key: 'source_url',
			label: '表单数据源URL',
			value: formConfig.source_url,
			placeholder: '请填写表单数据源URL',
		}, {
			type: 'Button',
			key: 'layout',
			label: '表单布局',
			value: formConfig.layout,
			dataList: [{ value: 'horizontal', text: 'Horizontal' }, {
				value: 'vertical',
				text: 'Vertical'
			}, { value: 'inline', text: 'Inline' }]
		}, {
			type: 'Button',
			key: 'labelAlign',
			label: '标题对齐方式',
			value: formConfig.labelAlign,
			dataList: [{ value: 'left', text: '左边' }, { value: 'right', text: '右边' }]
		}, {
			type: 'Input',
			key: 'labelCol',
			label: '表单Label布局',
			value: formConfig.labelCol,
			required: true,
			placeholder: '请选择表单Label布局',
		}, {
			type: 'Button',
			key: 'size',
			label: '表单大小',
			value: formConfig.size,
			required: true,
			dataList: [{ value: 'small', text: '小' }, { value: 'middle', text: '中' }, { value: 'large', text: '大' }]
		}])
	}, [])
	
	useEffect(() => {
		formRef.current.setFieldsValue({ ...formConfig })
	}, [formConfig])
	
	function onValuesChange (values) {
		UpdateForm(values)
	}
	
	return (
		<FormPanelStyle>
			<Form
				layout="vertical"
				labelCol={ { span: 10 } }
				wrapperCol={ { span: 24 } }
				ref={ formRef }
				initialValues={ { ...formConfig } }
				onValuesChange={ onValuesChange }>
				{
					Group.map(item => {
						const Component = FieldComponent[item.type]
						return <Component key={ item.type + '_' + item.key } options={ item }/>
					})
				}
			</Form>
		</FormPanelStyle>
	)
}

export default connect((state) => ({
	formConfig: state.Editor.formConfig
}), {
	UpdateForm
})(memo(FormPanel))
