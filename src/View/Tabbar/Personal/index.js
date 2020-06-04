import React, { Component, useState } from 'react'
import { PersonalStyle, TabStyle, MenuStyle } from './style'
import data from './data'

function Personal () {
	
	const [tabIndex, setTabIndex] = useState(0)
	
	return (
	  <PersonalStyle>
		  <div className="header">
			  <span>我的</span>
			  <div className="setting-button"/>
		  </div>
		  <div className="user-center">
			  <div className="icon">
				  <img
					src="https://bkqwmall.oss-cn-shenzhen.aliyuncs.com/images/wechatheadimg/f40df87a678a7f3abad2d2a3a9fd0292.jpg"
					alt=""/>
			  </div>
			  <span>KAM</span>
		  </div>
		  <TabStyle>
			  <div className="tab-header">
				  {
					  data.tabMenu.map((item, index) => <div onClick={ () => setTabIndex(index) }
					                                         className={ tabIndex === index ? 'active' : '' }
					                                         key={ index }><span>{ item.title }</span></div>)
				  }
			  </div>
			  <div className="tab-content">
				  {
					  data.tabMenu[tabIndex]['list'].map(item => (
						<div className="tab-item" key={ item.id }>
							{
								item.count ? <i>{item.count}</i> : ""
							}
							<img src={ item.icon } alt=""/>
							<span>{ item.name }</span>
						</div>
					  ))
				  }
			  
			  </div>
		  </TabStyle>
		  <MenuStyle>
			  {
			  	data.menu.map(item => (
				  <div className="item" key={item.name}>
					  <div className="icon" style={{backgroundImage: `url(${item.icon})`}} />{item.name}
				  </div>
			    ))
			  }
		  </MenuStyle>
	  </PersonalStyle>
	)
}

export default React.memo(Personal)
