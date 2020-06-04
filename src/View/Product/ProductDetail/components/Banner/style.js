import styled from 'styled-components'

export const ProductBanner = styled.div`
    width: 100%;
    height: 10rem;
    overflow: hidden;
    position: relative;
    
	.slider-container{
		width: 100vw;
        height: 10rem;
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
