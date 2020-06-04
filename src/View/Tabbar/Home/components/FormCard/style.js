import styled from 'styled-components'

export const FormCardStyle = styled.div`
	height: 100px;
	flex: none;
	border: 1px solid #D6D6D6;
	box-shadow: 0 8px 32px rgba(0,0,0,0.1);
	padding: 15px 12px;
	display:flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 8px;
	margin: 16px 30px 16px 0;
	cursor: pointer;
	transition: border linear 0.2s;
	float: left;
	
	&:hover{
		border:1px solid #3399FF;
	}
	
	.icon{
		flex: none;
		width: 56px;
		height: 56px;
		margin-right: 16px;
	}
	.box{
		flex: auto;
		display:flex;
		flex-direction: column;
		justify-content: space-between;
		
		div{
			font-size: 12px;
			color: #585858;
			min-height: 16px;
			overflow: hidden;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 1;
			line-height: 1.2em;
			height: 16px;
		}
		
		.title{
			font-weight: 700;
		}
	}
	
	.slide{
		flex: none;
		height: 100%;
		display:flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-end;
		margin-left: 16px;
	}
	
	.collect{
		width: 16px;
		height: 16px;
		background-color: red;
		flex: none;
	}
	.tab{
		margin-right: 4px;
		i{
			margin: 0 3px;
			font-style: normal;
		}
	}
`

export const StatueStyle = styled.div`
	position:relative;
	font-size: 12px;
	padding-left: 10px;
	color: #111111;
	flex: none;
	
	span{
		content:"";
		width: 6px;
		height: 6px;
		display: inline-block;
		position:absolute;
		left:0;
		top: 50%;
		transform: translateY(-50%);
		border-radius: 50%;
	}
`
