import React  from 'react'
import { TabBoxStyle } from './style'

const TabBoxComponent = () => (WrappedComponent) => function TabBox (props) {
	
	const { tab, selectTab } = props
	
	function HandleTapAction () {
		console.log('代理组件抽离点击事件')
	}
	
	return (
		<TabBoxStyle>
			<div className="tab-header">
				<div className="tab-menu">
					<span className={ tab === 0 ? 'active' : '' } onClick={ () => selectTab(0) }>卡片</span>
					<span className={ tab === 1 ? 'active' : '' } onClick={ () => selectTab(1) }>列表</span>
				</div>
			</div>
			<div className="tab-body">
				<WrappedComponent { ...props } HandleTapAction={ HandleTapAction }/>
			</div>
		</TabBoxStyle>
	)
}

export default TabBoxComponent
