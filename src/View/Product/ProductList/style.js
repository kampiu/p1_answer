import styled from 'styled-components'

export const ProductLayoutStyle = styled.div`
	display:flex;
	flex-direction: column;
	height: 100vh;
`

export const ProductHeaderStyle = styled.div`
	width: 100%;
	height: 1rem;
	padding: 0 0.2rem;
	display:flex;
	align-items: center;
	justify-content: space-between;
	flex: none;
	.back-button{
		width: 0.5rem;
		height: 0.6rem;
		flex: none;
		margin-right: 0.32rem;
		font-size: 0.36rem;
		line-height: 0.6rem;
	}
	.search-button{
		width: 1.4rem;
		height: 0.68rem;
		flex: none;
		display:flex;
		align-items: center;
		justify-content: center;
		span{
			position:relative;
			font-size: 0.26rem;
			color: #444;
			padding-right: 0.16rem;
			border-right: 1px solid #ccc;
			
			i{
				margin-left: 4px;
				width: 0.32rem;
				font-size: 0.2rem;
			}
		}
	}
	.search-box{
		//width: 5.68rem;
		height: 0.68rem;
		background-color: #F7F7F7;
		flex: auto;
		display: flex;
		align-items: center;
		input{
			-webkit-appearance: none;
			flex: auto;
			height: 100%;
			background-color: transparent;
		}
	}
`

export const ProductMenuStyle = styled.div`
	width: 100%;
	height: 0.88rem;
	display:flex;
	flex: none;
	.menu-nav{
		width: 25%;
		height: 100%;
		display:flex;
		align-items: center;
		justify-content: center;
		padding: 0.1rem 0;
	    position: relative;
	    border-top: 1px solid #f2f2f2;
	    border-bottom: 1px solid #f2f2f2;
		
		span{
		    white-space: nowrap;
		    padding: 0 5px;
			font-size: 0.26rem;
			flex: auto;
			overflow: hidden;
		    text-overflow: ellipsis;
			display:flex;
			align-items: center;
			justify-content: center;
			border-right: 1px solid #f0f0f0;
		}
		
		&:last-child{
			span{
				border-right: 0;
			}
		}
	}
`

export const ProductScrollStyle = styled.div`
	width: 100%;
	padding: .28rem .32rem;
	overflow-y: scroll;
	.main{
		width: 100%;
	    display: flex;
	    justify-content: space-between;
	    align-content: space-between;
	    flex-wrap: wrap;
	}
`
