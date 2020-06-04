import styled from 'styled-components'

export const FormRowStyle = styled.tr`
	width: 100%;
	cursor: pointer;
	transition: background-color linear 0.2s;
	
	&:hover{
		background-color: #F0F8FF !important;
	}
	&:nth-child(odd){
		background-color: #FFFFFF;
	}
	&:nth-child(even){
		background-color: #FAFAFA;
	}
	
	th{
		color: #666666;
	}
	td{
		height: 100%;
		color: #67686A;
		font-size: 12px;
		line-height: 40px;
		min-width: 40px;
		&:first-child{
			display:flex;
			align-items: center;
			justify-content: center;
			height: 100%;
			line-height: 40px;
		}
		&>div{
			color: #67686A;
		}
		.start-icon{
			line-height: 40px;
			color: #F9CB15;
		}
	}
`

