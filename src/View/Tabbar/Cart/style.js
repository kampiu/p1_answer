import styled from 'styled-components'

export const CarStyle = styled.div`
    flex: auto;
    width: 100%;
    height: calc(100vh - 0.98rem);
    -webkit-overflow-scrolling: touch;
    background-color: #fff;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    
    input[type=checkbox]{
	    display: inline-block;
	    margin-right: .16rem;
	    -webkit-appearance: none;
	    outline: 0;
	    width: .32rem;
	    height: .32rem;
	    background-color: #efefef;
	    border: .16rem solid #ddd;
	    border-radius: 50%;
	    transition: all linear .2s;
        &:checked{
            border: .1rem solid #ffde45;
            background-color: #fff;
        }
    }
    
    .header{
        width: 100%;
	    height: 1.52rem;
	    display: flex;
	    align-items: center;
	    justify-content: space-between;
	    transition: all linear .2s;
	    padding: 0 .32rem;
	    flex: none;
        z-index: 10;
        position: relative;
        span{
            font-size: .4rem;
		    font-weight: 800;
		    color: #333;
        }
        .setting-button{
            width: .56rem;
		    height: .56rem;
		    display: -webkit-box;
		    display: -ms-flexbox;
		    display: flex;
		    font-size: .28rem;
		    font-weight: 600;
		    background-position: center center;
		    background-size: 0.44rem 0.44rem;
		    background-repeat: no-repeat;
		    background-image: url("https://www.xiehome.com/m_three_v/images/icon-shopcart-edit.png");
        }
    }
`

export const CarMain = styled.div`
    flex: auto;
    width: 100%;
    padding: 0 .32rem;
    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
`

export const CarFooter = styled.div`
	padding: .12rem .16rem;
    flex: none;
    width: 100%;
    height: .98rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    box-shadow: -0.1rem 0.08rem 0.32rem rgba(0,0,0,0.16);
    position: relative;
    z-index: 100;
    bottom: 0;
    left: 0;
    .all-checkbox{
	    font-size: .26rem;
	    font-weight: 400;
	    color: #333;
	    display: flex;
	    align-items: center;
    }
    .price{
        margin-left: auto;
	    font-size: .26rem;
	    font-weight: 400;
	    color: #333;
	    margin-right: .48rem;
        span{
	        font-size: .32rem;
		    font-weight: 800;
		    color: #f15a53;
        }
    }
    .button{
	    border-radius: .12rem;
	    display: flex;
	    align-items: center;
	    justify-content: center;
	    font-size: .28rem;
	    color: #333;
	    background-color: #ffde45;
	    font-weight: 800;
	    transition: all linear .1s;
	    cursor: pointer;
	    -webkit-user-select: none;
	    outline: 0;
	    width: 2.1rem;
	    height: .74rem;
	    flex: none;
	    span{
		    padding: 0;
		    margin: 0;
		    box-sizing: border-box;
		    user-select: auto;
		    -webkit-tap-highlight-color: transparent;
		    -webkit-text-size-adjust: 100%;
		    -webkit-font-smoothing: antialiased;
	    }
    }
`

export const CarItem = styled.div`
	margin-bottom: .32rem;
    background-color: #fff;
    box-shadow: 0 0.08rem 0.32rem rgba(0,0,0,0.08);
    border-radius: .2rem;
    overflow: hidden;
    
    &:first-child{
        margin-top: .32rem;
    }
    input{
        margin: 0 .28rem;
        flex: none;
    }
    .product-header{
        width: 100%;
	    height: .84rem;
	    display: flex;
	    align-items: center;
	    .seller-icon{
	        width: .36rem;
		    height: .36rem;
		    background-position: center center;
		    background-size: .28rem .28rem;
		    background-repeat: no-repeat;
		    background-image: url("https://www.xiehome.com/m_three_v/images/cart-seller-icon.png");
	    }
	    .seller-name{
	        font-size: .24rem;
		    font-weight: 800;
		    color: #333;
		    margin: 0 .16rem;
	    }
	    .seller-more{
		    width: .36rem;
		    height: .36rem;
		    background-position: center center;
		    background-size: .28rem .28rem;
		    background-repeat: no-repeat;
		    background-image: url("https://www.xiehome.com/m_three_v/images/more-icon.png");
	    }
    }
    .product-content{
        width: 100%;
	    height: 2rem;
	    padding-right: .32rem;
	    margin: .32rem 0;
	    display: flex;
	    align-items: center;
	    overflow: hidden;
	    label{
		    flex: none;
		    height: 100%;
		    display: flex;
		    margin-right: .32rem;
		    align-items: center;
		    width: .6rem;
	    }
	    .icon{
	        position: relative;
		    z-index: 10;
		    overflow: hidden;
		    width: 2rem;
		    height: 2rem;
		    flex: none;
		    border-radius: .12rem;
            margin-right: .24rem;
            img{
	            width: 100%;
	            height: 100%;
            }
	    }
	    .box{
		    flex: auto;
		    height: 100%;
		    display: flex;
		    flex-direction: column;
		    justify-content: space-between;
	    }
	    .name{
	        height: .72rem;
		    font-size: .26rem;
		    font-weight: 400;
		    color: #333;
		    overflow: hidden;
		    display: -webkit-box;
		    -webkit-box-orient: vertical;
		    -webkit-line-clamp: 2;
		    line-height: .36rem;
	    }
	    .desc{
		    width: 3.3rem;
		    height: .32rem;
		    display: flex;
		    align-items: center;
		    span{
		        font-size: .24rem;
			    font-weight: 400;
			    color: #999;
			    position: relative;
			    overflow: hidden;
			    text-overflow: ellipsis;
			    white-space: nowrap;
			    width: 100%;
		    }
	    }
	    .price{
	        width: 100%;
		    height: .44rem;
		    display: flex;
		    align-items: center;
		    justify-content: space-between;
		    span{
		        font-size: .32rem;
			    font-weight: 800;
			    color: #f15a53;
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
    }
`


