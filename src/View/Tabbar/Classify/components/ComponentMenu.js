import React, { memo } from 'react'
import { ComponentStyle, ComponentReadStyle } from './style'
import { connect } from 'react-redux'
import { RemoveComponent, CopyComponent } from './../../../../Store/Modules/EditorModule'

/*
 * formState = [edit = 编辑, read = 可读]
 */
const ComponentMenu = (WrappedComponent) => connect(state => ({
	selected: state.Editor.selected
}), {
	RemoveComponent,
	CopyComponent
})(({ formState = 'edit', selected, onSelectedComponent, id, componentType, RemoveComponent, CopyComponent, ...props }) => {
	
	function HandleDeleteAction () {
		console.log('HandleDelete')
		RemoveComponent(id)
	}
	
	function HandleCopyAction () {
		console.log('HandleCopyAction')
		CopyComponent(id)
	}
	
	const SelectedClass = {
		className: (selected && selected.id === id && formState === 'edit') ? 'component-active' : ''
	}
	
	const ComponentContainer = {
		'edit': ComponentStyle,
		'read': ComponentReadStyle
	}
	const Style = ComponentContainer[formState]
	
	return (
		<Style onClick={ () => onSelectedComponent(componentType, id) } {...SelectedClass}>
			<div className="component-tool-box">
				<div className="move-button iconfont" title="拖动">&#xe6c3;</div>
				<div className="copy-button iconfont" title="复制" onClick={ () => HandleCopyAction() }>&#xe64e;</div>
				<div className="delete-button iconfont" title="删除" onClick={ () => HandleDeleteAction() }>&#xe600;</div>
			</div>
			<div className="component-container">
				<WrappedComponent { ...props } />
			</div>
		</Style>
	)
})

export default ComponentMenu

// export default connect(state => ({
//
// }),{
// 	RemoveComponent
// })(ComponentMenu)
