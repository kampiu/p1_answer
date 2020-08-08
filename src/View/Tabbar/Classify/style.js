import styled from 'styled-components'

export const FormContainer = styled.div`
	width: 100vw;
	height: 100vh;
	padding-top: 50px;
	position: relative;
	display: flex;
	align-items: stretch;
	overflow: hidden;
	.tool-layout{
		width: 100%;
		height: 50px;
		position: absolute;
		left:0;
		top: 0;
		border-bottom: 1px solid #F0F0F0;
		padding: 0 20px;
		background-color: #FFFFFF;
		display:flex;
		align-items: center;
		justify-content: flex-end;
		button{
			margin-left: 20px;
		}
		&>span{
			font-size: 18px;
			font-weight: bold;
			margin-right: auto;
			-webkit-user-select: none;
		}
	}
	
	.components-layout{
		width: 238px;
		height: 100%;
		flex: none;
		overflow-y: scroll;
		border-right: 1px solid #F0F0F0;
	}
	.form-layout{
		flex: auto;
		height: 100%;
		background-color: #FFFFFF;
		position: relative;
	}
`

export const ComponentItemStyle = styled.div`
	width: 100%;
	background-color: #FFFFFF;
	transition: border linear 0.1s;
`

export const ComponentsStyle = styled.div`
	width: 100px;
	height: 30px;
	border-radius: 4px;
	margin: 12px 0 12px 12px;
	border:1px solid #ccc;
	display:flex;
	align-items: center;
	font-size: 12px;
	color: #666;
	padding-left: 10px;
	cursor: move;
	overflow: hidden;
	float:left;
	.icon{
		width: 16px;
		height: 16px;
		color: #444;
		background-repeat: no-repeat;
		background-position: center center;
		background-size: 90% 90%;
		font-size: 12px;
		margin-right: 4px;
		overflow: hidden;
	}
`

export const NoDataComponent = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	left:0;
	top:0;
	z-index: 10;
	display:flex;
	align-items: center;
	justify-content: center;
	padding-bottom: 300px;
`







