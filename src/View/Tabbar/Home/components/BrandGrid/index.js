import React, { useEffect, useState } from 'react'
import { BrandGridStyle } from './style'

function Item (props) {
	const { imageUrl, title } = props
	const [ imageStyle, changeImageStyle ] = useState({width: '100%', height: '100%'})
	
	useEffect(() => {
		let img = new Image()
		img.setAttribute("src", imageUrl)
		img.onload = () => {
			// console.dir(img)
			let width = (img.width / img.height) > 1.5 ? '100%' : 'auto'
			let height = (img.width / img.height) < 1.5 ? '100%' : 'auto'
			changeImageStyle({
				width,
				height
			})
		}
	}, [imageUrl])
	
	return (
	  <div className="item-nav">
		  <div className="item">
			  <img src={ imageUrl } style={{ width: imageStyle.width, height: imageStyle.height }} alt=""/>
		  </div>
		  <span>{ title }</span>
	  </div>
	)
}

const BrandGrid = (WrappedComponent) => (props) => {
	const { dataItem } = props
	
	return (
	  <BrandGridStyle>
		  <div className="header">
			  <div className="main">
				  <div className="header-icon" style={ { backgroundImage: `url(${ dataItem.icon })` } }/>
				  { dataItem.name }
				  <div className="more">更多商家</div>
			  </div>
			  <div className="desc">{ dataItem.desc }</div>
		  </div>
		  <div className="body">
			  {
				  dataItem.list.map(item => (<WrappedComponent key={ item.id } title={ item.name } imageUrl={ item.logo }/>))
			  }
		  </div>
	  </BrandGridStyle>
	)
}

// export default React.memo(BrandGrid)
export default BrandGrid(Item)
