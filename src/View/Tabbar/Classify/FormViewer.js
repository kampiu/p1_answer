import React, { useState, useEffect, memo, useRef } from 'react'
import { Form, Modal, Button, Input } from 'antd'
import Sortable from 'react-sortablejs'
import uniqueId from 'lodash/uniqueId'
import { ComponentType } from './components'
import { connect } from 'react-redux'

function FormViewer ({ visible, HandleCloseModal, Data, formConfig }) {
	
	const [formData, initFormData] = useState({})
	const [loading, changeLoading] = useState(true)
	const formRef = useRef()
	
	useEffect(() => {
		if (Data) {
			const _formData = {}
			Data.forEach(item => {
				_formData[item.key] = 'asdfgh'
			})
			initFormData(_formData)
			setTimeout(() => {
				changeLoading(false)
			}, 3000)
			// formRef.current.setFieldsValue({ ..._formData })
		}
	}, [visible])
	
	useEffect(() => {
		console.log('ad', formRef)
	}, [visible, Data, loading])
	
	function HandleSubmitAction (values) {
		console.log('HandleSubmitAction', values, formData, Data)
	}
	
	function HandleCloseModals () {
		changeLoading(true)
		HandleCloseModal(false)
	}
	
	function onFieldsChange () {
		console.log('onFieldsChange')
	}
	
	function onFinishFailed () {
		console.log('onFinishFailed')
	}
	
	function onValuesChange () {
		console.log('onValuesChange')
	}
	
	// 递归函数
	function loop (arr, index) {
		return arr.map((item, i) => {
			const indexs = index === '' ? String(i) : `${ index }-${ i }`
			if (item.children) {
				return (
					<div data-index={ indexs } key={ item.id } data-type={ item.componentType }>
						<Sortable
							key={ uniqueId() }
							style={ {
								minHeight: 100,
								margin: 10,
							} }
							options={ {
								...sortableOption,
							} }>
							{
								loop(item.children, indexs)
							}
						</Sortable>
					</div>
				)
			}
			
			const ComponentInfo = ComponentType[item.componentType].component
			// console.log("name", item.key)
			// return (
			// 	<Form.Item name={item.key} key={item.key}>
			// 		<ComponentInfo formState="read" key={ 'READ_' + item.id } onSelectedComponent={ () => {} } { ...item } />
			// 	</Form.Item>
			// )
			return <ComponentInfo formState="read" key={ 'READ_' + item.id }
			                      onSelectedComponent={ () => {} } { ...item } />
		})
	}
	
	const sortableOption = {
		animation: 150,
		fallbackOnBody: true,
		swapThreshold: 0.65,
		group: {
			name: 'formItem',
			pull: false,
			put: false,
		}
	}
	
	return (
		<Modal
			title="表单预览"
			visible={ visible }
			width="1000px"
			footer={ false }
			onCancel={ HandleCloseModals }
		>
			<Form labelCol={ {
				span: 2,
				offset: 1
			} } wrapperCol={ {
				span: 18,
				offset: 1
			} } { ...formConfig } className="form-layout"
			      ref={ formRef }
			      onFinish={ HandleSubmitAction }
			      onFieldsChange={ onFieldsChange }
			      onFinishFailed={ onFinishFailed }
			      onValuesChange={ onValuesChange }
			      initialValues={ { ...formData } }>
				{
					loop(Data, '')
				}
				{/*<Form.Item>*/}
				{/*	<Button type="primary" htmlType="submit">获取数据</Button>*/}
				{/*</Form.Item>*/}
			</Form>
		</Modal>
	)
}

export default connect((state) => ({
	formConfig: state.Editor.formConfig,
	Data: state.Editor.Data,
}), {})(memo(FormViewer))
