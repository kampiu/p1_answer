import React, { useEffect, useState } from 'react'
import { HeaderStyle } from './style'

function Header (props) {
	
	let [isActive, changeActive] = useState(false)
	let [opacity, setOpacity] = useState(0)
	let [shadow, setShadow] = useState(0)
	
	const SrcollFunction = e => {
		const TOP = 220
		let _target = document.documentElement || document.body
		let _top = _target.scrollTop
		setOpacity(_top / TOP >= 1 ? 1 : _top / TOP)
		setShadow(_top >= TOP ? 0.08 : (_top / TOP / 100 * 0.08))
		changeActive(_top >= TOP)
	}
	
	useEffect(() => {
		window.addEventListener('scroll', SrcollFunction)
		return () => window.removeEventListener('scroll', SrcollFunction)
	}, [opacity, isActive, shadow])
	
	return (
	  <HeaderStyle style={ { boxShadow: `0 0.08rem 0.32rem rgba(0,0,0,${ shadow })` } }>
		  <div className="back-button iconfont">
			  <span className={ isActive ? 'bg-opacity' : '' }>&#xe60e;</span>
		  </div>
		  <div className="content" style={ { opacity: opacity } }>
			  <span>商品</span>
			  <span>详情</span>
		  </div>
		  <div className="menu iconfont">
			  <div className='share-button'>
				  <span className={ isActive ? 'bg-opacity' : '' }>&#xe62a;</span>
			  </div>
			  <div className='menu-button'>
				  <span className={ isActive ? 'bg-opacity' : '' }>&#xe652;</span>
			  </div>
		  </div>
	  </HeaderStyle>
	)
}

export default React.memo(Header)
