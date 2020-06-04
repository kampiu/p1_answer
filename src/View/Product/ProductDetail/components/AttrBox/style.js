import styled from 'styled-components'


export const BoxStyle = styled.div`
    width: 100%;
    height: 2.4rem;
    display: flex;
    flex: none;
    margin-bottom: .32rem;
    .icon{
        width: 2.4rem;
	    height: 2.4rem;
	    border-radius: .12rem;
	    margin-right: .32rem;
	    -webkit-box-flex: 0;
	    -ms-flex: none;
	    flex: none;
	    position: relative;
	    z-index: 10;
	    overflow: hidden;
	    img{
		    width: 100%;
		    margin-top: 50%;
		    transform: translateY(-50%);
	    }
    }
    .info{
	    flex: auto;
	    display: flex;
	    justify-content: space-between;
	    flex-direction: column;
	    padding-top: .84rem;
	    margin-bottom: .32rem;
    }
    .price{
        height: .56rem;
	    font-size: .4rem;
	    font-weight: bold;
	    color: #f15a53;
    }
    .stock{
        height: .42rem;
	    font-size: .24rem;
	    font-weight: 400;
	    color: #999;
	    margin-bottom: 5px;
    }
    .attr{
        font-size: .24rem;
	    font-weight: 400;
	    line-height: 1.6em;
	    max-height: .84rem;
	    color: #333;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-line-clamp: 2;
	    -webkit-box-orient: vertical;
    }
`

export const AttrScrollStyle = styled.div`
    overflow-x: hidden;
    overflow-y: scroll;
    
    .calculator{
	    width: 100%;
	    height: 1.2rem;
	    display: flex;
	    align-items: center;
	    justify-content: space-between;
	    span{
	        position: relative;
		    font-size: .32rem;
		    font-weight: 800;
		    color: #333;
		    z-index: 1;
		    transition: all linear .2s;
		    &::before{
			    content: "";
			    width: 100%;
			    height: .08rem;
			    display: inline-block;
			    background-color: #ffde45;
			    position: absolute;
			    left: 0;
			    bottom: .04rem;
			    z-index: -2;
		    }
	    }
    }
    
    .count{
		width: 1.4rem;
		height: 25px;
		font-size: .28rem;
		font-weight: 400;
		line-height: .36rem;
		flex: none;
		display: flex;
		align-items: center;
		justify-content: space-between;
    }
	.count-button{
	    background-color: #ffde45;
        border: 0;
	    line-height: 21px;
	    display: inline-block;
	    position: relative;
	    border-radius: 50%;
	    vertical-align: -6px;
        width: .4rem!important;
	    height: .4rem!important;
	    -webkit-box-flex: 0;
	    -ms-flex: none;
	    flex: none;
	    font-size: .28rem;
	    -webkit-transition: all linear .1s;
	    transition: all linear .1s;
	    cursor: pointer;
	    -webkit-user-select: none;
	    outline: 0;
	    &::before,&::after{
	        content: "";
		    position: absolute;
		    height: 2px;
		    width: 10px;
		    left: 50%;
		    top: 50%;
	        margin: 0!important;
		    transform: translate(-50%,-50%);
		    color: #333!important;
		    background-color: #333;
	    }
	}
	.increase-button{
		&::after{
		    height: 10px;
		    width: 2px;
	    }
	}
	.count-content{
		width: .6rem;
	    font-size: .28rem;
	    background-color: transparent;
	    flex: auto;
	    font-weight: 400;
	    color: #333;
	    outline: 0;
	    display:flex;
	    align-items: center;
	    justify-content: center;
	}
	.attr-item{
		flex: none;
		display:flex;
		flex-direction: column;
		margin-bottom: 0.32rem;
		.header{
	        width: 100%;
		    float: left;
		    flex: none;
		    display: flex;
		    align-items: center;
		    margin-bottom: 0.08rem;
		    
		    span{
		        position: relative;
			    font-size: .32rem;
			    font-weight: 800;
			    color: #333;
			    z-index: 1;
			    transition: all linear .2s;
			    &::before{
				    content: "";
				    width: 100%;
				    height: .08rem;
				    display: inline-block;
				    background-color: #ffde45;
				    position: absolute;
				    left: 0;
				    bottom: .04rem;
				    z-index: -2;
			    }
		    }
        }
	}
	
	.selector{
		flex: none;
		min-height: 1rem;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		flex-wrap: wrap;
		
		.selector-nav, .selector-nav-active{
		    flex: none;
		    max-width: 3.2rem;
		    margin: 0.16rem 0.16rem 0 0;
		    height: .58rem;
		    display:flex;
		    align-items: center;
		    justify-content: center;
		    background-color: #efefef;
		    border-radius: .12rem;
		    font-size: .28rem;
		    font-weight: 400;
		    color: #333;
		    padding: 0 .18rem;
		    transition: all linear .2s;
		    overflow: hidden;
		    text-overflow: ellipsis;
		    white-space: nowrap;
		    span{
		        width: 0.4rem;
		        height: 0.4rem;
		        margin-right: 0.1rem;
		        background-color: pink;
		    }
		}
		.selector-nav-active{
			background-color: #FFEA5C;
			color: #333;
		}
	}
`

export const FooterStyle = styled.div`
    width: 100%;
    height: 1.08rem;
    border: 1px solid #efefef;
    position: absolute;
    left: 0;
    bottom: 0;
    padding: .12rem .32rem;
    display: flex;
    background-color: #fff;
    div{
	    border-radius: .12rem;
	    font-size: .28rem;
	    background-color: #ffde45;
	    font-weight: 800;
	    transition: all linear .1s;
	    cursor: pointer;
	    -webkit-user-select: none;
	    outline: 0;
	    width: 50%;
	    flex: none;
	    height: 100%;
	    display: flex;
	    align-items: center;
	    justify-content: center;
    }
    .collect-button{
	    color: #333;
        background-color: #ffea5c;
        border-radius: .12rem 0 0 .12rem;
    }
    .buy-button{
        color: #fff;
        background-color: #ff9400;
        border-radius: 0 .12rem .12rem 0;
    }
`






























