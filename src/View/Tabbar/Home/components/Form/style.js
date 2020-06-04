import styled from 'styled-components'

export const FormStyle = styled.table`
	width: 100%;
	border: 1px solid #D7D7D7;
    border-collapse: separate;
    border-spacing: 0;
	border-radius: 4px;
	thead{
		width: 100%;
		height: 40px;
		tr{
			width: 100%;
			text-align: left;
			border-radius: 4px 0 0 4px;
		}
	}
	th{
		font-size: 12px;
		color: #333333;
		text-align: left;
		line-height: 40px;
		border-bottom: 1px solid #EEEFEE;
	}
	tbody{
		border-top: 1px solid #D6D6D6;
		border-radius: 0 4px 4px 0;
	}
`
