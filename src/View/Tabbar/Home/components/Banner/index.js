import React, { useEffect, useState } from 'react'
import { BannerStyle } from './style'
import Swiper from 'swiper'

function Banner (props) {
	const [sliderSwiper, setSliderSwiper] = useState(null)
	const { banner } = props
	
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
	  <BannerStyle>
		  <div className="slider-container">
			  <div className="swiper-wrapper">
				  {
					  banner.map(item => {
						  return (
							<div className="swiper-slide" key={ item.id }>
								<div className="slider-nav">
									<img src={ item.image } width="100%" height="100%" title={ item.name }
									     alt={ item.name }/>
								</div>
							</div>
						  )
					  })
				  }
			  </div>
			  <span className="swiper-pagination"/>
		  </div>
	  </BannerStyle>
	)
}

// const mapStateToProps = (state)=>{
// 	return {
// 		banner : state.home.banner
// 	}
// }

// 映射dispatch到props上
// const mapDispatchToProps = dispatch => {
// 	return {
// 		InitHomeBanner() {
// 			dispatch(InitHomeBannerAction());
// 		}
// 	};
// };

// 将ui组件包装成容器组件
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(React.memo(Home));

export default React.memo(Banner)
