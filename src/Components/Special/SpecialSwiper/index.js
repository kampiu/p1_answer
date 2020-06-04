import React, { Component } from 'react'
import './index.less'

export default class SpecialSwiper extends Component {
	
	constructor (props) {
		super(props)
		
	}
	
	componentWillMount () {
	
	}
	
	componentDidMount () {
		this.initSwiper()
	}
	
	initSwiper () {
		new window.Swiper('.category-box', {
			direction: 'horizontal',
			loop: true,
			breakpointsInverse: true,
			observer: true,
			observeParents: true,
			breakpoints: {
				200: {  //当屏幕宽度小于等于320
					slidesPerView: 1,
					spaceBetween: 10,
				},
				420: {  //当屏幕宽度小于等于768
					slidesPerView: 2,
					spaceBetween: 20,
				},
				768: {  //当屏幕宽度小于等于768
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1200: {  //当屏幕宽度小于等于1280
					slidesPerView: 4,
					spaceBetween: 20
				},
			}
		})
	}
	
	componentWillUnmount () {
	
	}
	
	render () {
		return (
		  <div className="swiper-container category-box">
			  <div className="swiper-wrapper">
				  {
					  this.props.dataItem.map(item => {
						  return (
							<div className="swiper-slide category-item" key={ item.id }>
								<a href="###">
									<div className="category-content" title={ item.title }>
										<img src={ item.poster } alt=""/>
									</div>
									<span>{ item.title }</span>
								</a>
							</div>
						  )
					  })
				  }
			  </div>
		  </div>
		)
	}
}

