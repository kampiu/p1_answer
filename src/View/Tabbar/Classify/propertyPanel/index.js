import React, { useState } from 'react'
import { TabMenuStyle } from './style'

import ComponentPanel from './ComponentPanel'
import FormPanel from './FormPanel'

function PropertyPanel (props) {
	
	const [tabIndex, ChangeTab] = useState(0)
	
	return (
		<>
			<TabMenuStyle>
				<div className="tab-menu">
					<span className={ tabIndex === 0 ? 'tab-active' : '' } onClick={ () => ChangeTab(0) }>组件属性</span>
					<span className={ tabIndex === 1 ? 'tab-active' : '' } onClick={ () => ChangeTab(1) }>表单属性</span>
				</div>
				<div className="tab-container">
					{
						[
							<ComponentPanel {...props} />,
							<FormPanel {...props} />
						][tabIndex]
					}
				</div>
			</TabMenuStyle>
		
		</>
	)
}

export default PropertyPanel
