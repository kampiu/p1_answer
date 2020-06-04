import styled from 'styled-components'

export const TabBoxStyle = styled.div`
	width: auto;
	min-width: 500px;
	max-width: 1600px;
	margin: 20px auto;
	display:flex;
	flex-direction: column;
	
	.tab-header{
		width: 100%;
		height: 60px;
		flex: none;
		display:flex;
		align-items: center;
		justify-content: flex-end;
	}
	
	.tab-menu{
		width: 120px;
		height: 32px;
		flex: none;
		display:flex;
		border-radius: 4px;
		overflow: hidden;
		
		span{
			flex-grow: 1;
			width: 50%;
			display:flex;
			align-items: center;
			justify-content: center;
			font-size: 14px;
			border: 1px solid #D6D6D6;
			cursor: pointer;
			transition: all linear 0.2s;
			color: #666666;
			
			&:first-child{
				border-radius: 4px 0 0 4px;
				border-right: 1px solid #FFF;
			}
			&:last-child{
				border-radius: 0 4px 4px 0;
			}
			
		}
		
		.active{
			border: 1px solid #3399FF !important;
			color: #3399FF;
		}
	}
	.tab-body{
		//display: flex;
		//justify-content: space-between;
		//align-content: space-between;
		//flex-wrap: wrap;
	}
`
