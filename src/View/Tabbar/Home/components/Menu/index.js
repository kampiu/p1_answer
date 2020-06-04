import React, { useState } from 'react'
import { MenuStyle } from './style'

function Menu (props) {
	
	let [tabIndex, changeTab] = useState(0)
	
	const { menu } = props
	
	return (
	  <MenuStyle>
		  <div className="box">
			  <div className="header">
				  {
					  menu.map((item, index) => <div className={ tabIndex === index ? 'active' : '' } key={ item.title } onClick={ () => changeTab(index) }>{ item.title }</div>)
				  }
			  </div>
			  <div className="content">
				  {
					  menu[tabIndex] && menu[tabIndex]['list'].map(item => (
						<div className="item" key={ item.id }>
							<div className="icon" style={{backgroundImage: `url(${item.logo})`}}/>
							<span>{ item.title }</span>
						</div>
					  ))
				  }
			  </div>
		  </div>
	  </MenuStyle>
	)
}

export default React.memo(Menu)
