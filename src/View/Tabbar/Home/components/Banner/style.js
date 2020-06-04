import styled from 'styled-components'

export const BannerStyle = styled.div`
	width: 100vw;
	height: 4rem;
	position: relative;
	background-color: pink;
	
	&::before{
		content: "";
		width: 100%;
		height: 0.4rem;
		display:inline-block;
		position:absolute;
		left:0;
		bottom: -0.1rem;
		z-index: 200;
		background-image: url("https://www.xiehome.com/m_three_v/images/home-swiper-mask.png");
		background-position: center center;
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
	.slider-container{
		width: 100vw;
		height: 4rem;
		overflow: hidden;
		position: relative;
		.slider-nav{
			position: absolute;
			display: block;
			width: 100%;
			height: 100%;
		}
		.swiper-pagination{
			height: auto;
		}
		.swiper-pagination-bullet-active{
			width: 0.32rem;
		    border-radius: 0.06rem;
		    background-color: #FFDE45;
		}
	}
`
