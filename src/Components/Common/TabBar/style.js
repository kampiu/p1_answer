import styled from 'styled-components'

export const TabBarStyle = styled.div`
	width: 100%;
	height: 0.98rem;
	border-top: 0.02rem solid rgba(239,239,239,1);
	background-color:#FFF;
	position:fixed;
	left:0;
	bottom: 0;
	flex: none;
	z-index: 3000;
	display:flex;
	align-items: center;
	
	.tab-nav{
		width: 20%;
		height: 100%;
		flex: none;
		display:flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	img{
		width: 0.48rem;
		height: 0.48rem;
		flex: none;
	}
	span{
		font-size: 0.24rem;
		font-weight:800;
		line-height: 1em;
		transform: scale(0.96);
		color:rgba(51,51,51,1);
	}
`
