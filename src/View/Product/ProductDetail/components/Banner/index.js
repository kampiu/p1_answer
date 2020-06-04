import React, { useEffect, useState } from 'react'
import Swiper from 'swiper'
import { ProductBanner } from './style'
import LazyLoad from 'react-lazyload'

function Banner ({ banner }) {
	
	const [sliderSwiper, setSliderSwiper] = useState(null)
	
	useEffect(() => {
		if (banner.length && !sliderSwiper) {
			let sliderSwiper = new Swiper('.slider-container', {
				loop: true,
				autoplay: {
					delay: 8000,
					disableOnInteraction: false,
				},
				pagination: { el: '.swiper-pagination' },
			})
			setSliderSwiper(sliderSwiper)
		}
	}, [banner.length, sliderSwiper])
	
	return (
	  <ProductBanner>
		  <div className="slider-container">
			  <div className="swiper-wrapper">
				  {
					  banner.map(item => {
						  return (
							<div className="swiper-slide" key={ item }>
								<div className="slider-nav">
									<LazyLoad placeholder={ <div className="img-lazy"/> }>
										<img src={ item } width="100%" height="100%" alt="推荐"/>
									</LazyLoad>
								</div>
							</div>
						  )
					  })
				  }
			  </div>
			  <span className="swiper-pagination"/>
		  </div>
	  </ProductBanner>
	)
}

export default React.memo(Banner)
