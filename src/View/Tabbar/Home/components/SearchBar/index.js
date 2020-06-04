import React, { useEffect, useState } from 'react'
import { SearchBarStyle } from './style'

function SearchBar () {
	
	let [isActive, changeActive] = useState(false)
	let [opacity, setOpacity] = useState(0)
	let [shadow, setShadow] = useState(0)
	let [isFull, changeFull] = useState(false)
	
	const SrcollFunction = e => {
		const TOP = 220
		let _target = document.documentElement || document.body
		let _top = _target.scrollTop
		setOpacity(_top / TOP >= 1 ? 1 : _top / TOP)
		setShadow(_top >= TOP ? 0.08 : (_top / TOP / 100 * 0.08))
		changeFull(_top >= TOP)
	}
	
	useEffect(() => {
		window.addEventListener('scroll', SrcollFunction)
		return  () => window.removeEventListener('scroll', SrcollFunction)
	}, [opacity, isActive, shadow, isFull])
	
	return (
	  <SearchBarStyle>
		  <div className={ isFull ? 'search-bar search-bar-active' : 'search-bar' } style={ {
			  backgroundColor: `rgba(255,255,255, ${ opacity })`,
			  boxShadow: `0 0.08rem 0.32rem rgba(0,0,0,${ shadow })`
		  } }>
			  <div className="address">东莞</div>
			  {/*<div className="content">请输入搜索内容</div>*/ }
			  <div className="main">
				  {/*<input onFocus={ () => changeActive(true) } onBlur={ () => changeActive(false) } type="text"/>*/ }
				  <span className={ isActive ? 'icon-active' : 'icon' }/>
				  {
					  isActive ? '' : (<span className="placeholder">请输入搜索内容</span>)
				  }
			  </div>
		  </div>
	  </SearchBarStyle>
	)
}

export default React.memo(SearchBar)
