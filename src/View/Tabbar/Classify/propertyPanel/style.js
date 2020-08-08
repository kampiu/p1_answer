import styled from 'styled-components'

export const TabMenuStyle = styled.div`
	width: 300px;
	height: 100%;
	flex: none;
	border-left: 1px solid #f0f0f0;
	overflow: hidden;
	display:flex;
	flex-direction: column;
	font-size: 12px;
	.tab-menu{
		width: 100%;
		height: 50px;
		display:flex;
		border-bottom: 1px solid #f0f0f0;
		span{
			width: 50%;
			flex: none;
			display:flex;
			align-items: center;
			justify-content: center;
			transition: all linear 0.2s;
			cursor: pointer;
			font-size: 14px;
			border-right: 1px solid #f0f0f0;
			background-color: #FAFAFA;
			&:last-child{
				border-right: 0;
			}
		}
		.tab-active{
			color: #2090FF;
			background-color: #FFF;
		}
	}
	.tab-container{
		flex: auto;
		overflow-y: scroll;
	}
`

export const FormPanelStyle = styled.div`
	padding: 10px 16px;
`

export const EmptyStyle = styled.div`
	width: 100%;
	height: 200px;
	font-size: 14px;
	color: #ccc;
	display:flex;
	align-items: center;
	justify-content: center;
`

