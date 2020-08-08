import styled from 'styled-components'

export const ComponentStyle = styled.div`
	width: 100%;
	display:flex;
	align-items: center;
	padding: 24px 20px 20px 20px;
	font-size: 12px;
	position: relative;
	border: 2px solid #FFF;
	-webkit-user-select: none;
	&:hover{
		border: 2px dashed #2194FF !important;
		.component-tool-box{
			display: flex;
			z-index: 10;
		}
	}
	.component-container{
		width: 100%;
	}
`

export const ComponentReadStyle = styled.div`
	width: 100%;
	display:flex;
	align-items: center;
	padding: 12px 20px;
	font-size: 12px;
	position: relative;
	border: 2px solid #FFF !important;
	-webkit-user-select: none;
	.component-container{
		width: 100%;
	}
`
