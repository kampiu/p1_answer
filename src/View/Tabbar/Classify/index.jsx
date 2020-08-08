import React, { Component, createRef } from 'react'
import Sortable from 'react-sortablejs'
import uniqueId from 'lodash/uniqueId'
import update from 'immutability-helper'
import { connect } from 'react-redux'
import { indexToArray, getItem, setInfo, isPath, getCloneItem, itemRemove, itemAdd } from './utils'
// import find from 'find-process'
import _ from 'lodash'
import { Form, Button, Modal, Empty } from 'antd'

import GlobalComponent, { ComponentType } from './components/index'
import FormViewer from './FormViewer'

import PropertyPanel from './propertyPanel'
import { FormContainer, ComponentsStyle, ComponentItemStyle, NoDataComponent } from './style'

import { ChangeData, UpdateData, ChangeSelected, ResetForm, SelectDom } from './../../../Store/Modules/EditorModule'

@connect((state) => ({
	Data: state.Editor.Data,
	selected: state.Editor.selected,
	formConfig: state.Editor.formConfig
}), {
	ChangeData,
	UpdateData,
	ChangeSelected,
	ResetForm,
	SelectDom
})
class Classify extends Component {
	
	constructor (props) {
		super(props)
		this.state = {
			visible: false
		}
		this.GetData = this.GetData.bind(this)
		this.HandleFormViewer = this.HandleFormViewer.bind(this)
		this.HandleCloseModal = this.HandleCloseModal.bind(this)
		this.onSelectedComponent = this.onSelectedComponent.bind(this)
	}
	
	HandleFormViewer () {
		this.setState({
			visible: true
		})
	}
	
	HandleCloseModal () {
		this.setState({
			visible: false
		})
	}
	
	// 拖拽的添加方法
	sortableAdd = evt => {
		// 组件名或路径
		const nameOrIndex = evt.clone.getAttribute('data-type')
		// 父节点路径
		const parentPath = evt.path[1].getAttribute('data-type')
		// 拖拽元素的目标路径
		const { newIndex } = evt
		// 新路径 为根节点时直接使用index
		const newPath = parentPath ? `${ parentPath }-${ newIndex }` : newIndex
		// 判断是否为路径 路径执行移动，非路径为新增
		if (isPath(nameOrIndex)) {
			// 旧的路径index
			const oldIndex = nameOrIndex
			// 克隆要移动的元素
			const dragItem = getCloneItem(oldIndex, this.props.Data)
			
			// 比较路径的上下位置 先执行靠下的数据 再执行考上数据
			if (indexToArray(oldIndex) > indexToArray(newPath)) {
				// 删除元素 获得新数据
				let newTreeData = itemRemove(oldIndex, this.props.Data)
				// 添加拖拽元素
				newTreeData = itemAdd(newPath, newTreeData, dragItem)
				// 更新视图
				this.setState({ Data: newTreeData })
				return
			}
			// 添加拖拽元素
			let newData = itemAdd(newPath, this.props.Data, dragItem)
			// 删除元素 获得新数据
			newData = itemRemove(oldIndex, newData)
			
			this.setState({ Data: newData })
			return
		}
		
		// 新增流程 创建元素 => 插入元素 => 更新视图
		const type = nameOrIndex
		
		const newItemType = _.cloneDeep(Object.keys(ComponentType).find(key => (ComponentType[key].defaultConfig.componentType === type)))
		
		// 添加随机ID，作为选贼器的标识，唯一的组件 用组件类型作为前缀
		const newItemConfig = Object.assign({}, ComponentType[newItemType].defaultConfig)
		const _key = uniqueId(`${ newItemType }_${ new Date().getTime() }`)
		newItemConfig.id = _key
		newItemConfig.key = _key
		
		// 为容器或者弹框时增加子元素
		if (newItemType === 'Containers') {
			// const ComponentsInfo = _.cloneDeep(GlobalComponent[newItemType].component)
			// 判断是否包含默认数据
			newItemConfig.children = []
		}
		
		let Data = itemAdd(newPath, this.props.Data, newItemConfig)
		
		this.props.ChangeData(Data)
		this.props.ChangeSelected(newItemConfig.id)
	}
	
	// 拖拽的排序方法
	sortableUpdate = evt => {
		// 交换数组
		const { newIndex, oldIndex } = evt
		// 父节点路径
		const parentPath = evt.path[1].getAttribute('data-type')
		// 父元素 根节点时直接调用data
		let parent = parentPath ? getItem(parentPath, this.props.Data) : this.props.Data
		// 当前拖拽元素
		const dragItem = parent[oldIndex]
		// 更新后的父节点
		parent = update(parent, {
			$splice: [[oldIndex, 1], [newIndex, 0, dragItem]],
		})
		// 最新的数据 根节点时直接调用data
		const Data = parentPath ? setInfo(parentPath, this.props.Data, parent) : parent
		// console.log(Data, parentPath, parent, newIndex, oldIndex)
		// 调用父组件更新方法
		this.props.ChangeData(Data)
		
	}
	
	GetData () {
		const FormData = {
			form: this.props.formConfig,
			properties: this.props.Data
		}
		console.log(FormData)
		console.log(JSON.stringify(FormData))
	}
	
	onSelectedComponent (componentType, id) {
		this.props.ChangeSelected(id)
	}
	
	ResetForm () {
		let that = this
		Modal.confirm({
			title: '提示',
			content: '确定清空表单组件?',
			okText: '确认',
			cancelText: '取消',
			onOk () {
				that.props.ResetForm()
			}
		})
	}
	
	render () {
		// 递归函数
		const loop = (arr, index) => {
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
								ref={ c => c && (this.sortable = c.sortable) }
								options={ {
									...sortableOption,
									onUpdate: evt => (this.sortableUpdate(evt)),
									onAdd: evt => (this.sortableAdd(evt)),
								} }>
								{
									loop(item.children, indexs)
								}
							</Sortable>
						</div>
					)
				}
				
				const ComponentInfo = ComponentType[item.componentType].component
				return (
					<ComponentItemStyle data-index={ indexs } key={ 'EDIT_' + item.id }
					                    data-type={ item.componentType }>
						<ComponentInfo onSelectedComponent={ this.onSelectedComponent } { ...item } />
					</ComponentItemStyle>
				)
			})
		}
		
		const sortableOption = {
			animation: 150,
			fallbackOnBody: true,
			swapThreshold: 0.65,
			group: {
				name: 'formItem',
				pull: true,
				put: true,
			},
			handle: '.move-button',
			ghostClass: 'sortable-ghost',  // drop placeholder的css类名
			chosenClass: 'sortable-chosen',  // 被选中项的css 类名
			dragClass: 'sortable-drag',  // 正在被拖拽中的css类名
		}
		
		return (
			<>
				<FormContainer>
					<div className="tool-layout">
						<span>CustomForm</span>
						<Button type="default" onClick={ () => this.HandleFormViewer() }>预览效果</Button>
						<Button type="primary" onClick={ () => this.GetData() }>获取JSON</Button>
						<Button type="danger" onClick={ () => this.ResetForm() }>清空表单</Button>
					</div>
					<div className="components-layout">
						<Sortable
							options={ {
								group: {
									name: 'formItem',
									pull: 'clone',
									put: false,
								},
								sort: false,
							} }
						>
							{
								Object.keys(ComponentType).map(key => {
									const { componentType } = ComponentType[key].defaultConfig
									return (
										<ComponentsStyle key={ componentType } data-type={ componentType }>
											<div className="icon" style={{backgroundImage: `url(${ ComponentType[key].icon })`}} />
											{ ComponentType[key].title }
										</ComponentsStyle>
									)
								})
							}
						</Sortable>
					</div>
					<Form labelCol={ {
						span: 2,
						offset: 1
					} } wrapperCol={ {
						span: 18,
						offset: 1
					} } { ...this.props.formConfig } className="form-layout">
						<Sortable className="form-layout" ref={ (c) => c && (this.sortable = c.sortable) } options={ {
							...sortableOption,
							onUpdate: evt => (this.sortableUpdate(evt)),
							onAdd: evt => (this.sortableAdd(evt))
						} }
						          key={ uniqueId() }
						>
							{
								this.props.Data.length > 0 ? loop(this.props.Data, '') : (
									<NoDataComponent>
										<Empty
											image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
											imageStyle={ {
												width: 80,
												height: 'auto',
												flex: 'none',
												margin: '0 auto 0 auto'
											} }
											description={
												<span>请拖拽组件到此</span>
											}
										/>
									</NoDataComponent>
								)
							}
						</Sortable>
					</Form>
					<PropertyPanel componentId={ this.props.selected }/>
					{
						this.state.visible && <FormViewer visible={ this.state.visible } HandleCloseModal={ this.HandleCloseModal }/>
					}
					
				</FormContainer>
			</>
		)
	}
}

export default Classify
