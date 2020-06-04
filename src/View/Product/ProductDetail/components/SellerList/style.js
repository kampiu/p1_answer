import styled from 'styled-components'

export const SellerListStyle = styled.div`
	width: 6.86rem;
    height: auto;
    display: flex;
    flex: auto;
    flex-direction: column;
    box-shadow: 0 0.08rem 0.32rem rgba(0,0,0,0.08);
    background-color: #fff;
    padding: 0 .32rem;
    border-radius: .2rem;
    margin: 0 auto;
    
    .seller-header{
        width: 100%;
	    height: 1.22rem;
	    display: flex;
	    align-items: center;
	    flex: none;
	    border-bottom: 1px solid #f5f5f5;
	    
        .icon{
            width: .8rem;
		    height: .52rem;
		    flex: none;
		    position: relative;
		    z-index: 10;
		    overflow: hidden;
		    img{
			    width: 100%;
			    height: 100%;
		    }
        }
        .name{
            flex: auto;
            font-size: .26rem;
		    font-weight: 500;
		    color: #333;
		    line-height: .42rem;
            margin: 0 .32rem;
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
		    width: 1.52rem;
		    height: .66rem;
        }
    }
    .header{
        width: 100%;
	    padding: .24rem 0;
	    display: flex;
	    align-items: center;
	    justify-content: space-between;
	    font-size: .24rem;
	    font-weight: 800;
	    color: #333;
        span{
	        font-size: .24rem;
		    font-weight: 800;
		    color: #f15a53;
		    position: relative;
		    padding-right: .48rem;
		    transition: all linear .1s;
		    cursor: pointer;
		    -webkit-user-select: none;
		    outline: 0;
		    &::before{
		        content: "";
			    width: .34rem;
			    height: .34rem;
			    background-position: center center;
			    background-size: .28rem .28rem;
			    background-repeat: no-repeat;
			    background-image: url("https://www.xiehome.com/m_three_v/images/more-red-icon.png");
			    position: absolute;
			    right: 0;
			    top: 50%;
			    transform: translateY(-50%);
		    }
        }
    }
    .container{
        padding: .16rem 0 0 0;
	    width: 100%;
	    flex: auto;
	    display: flex;
    }
`

export const ProductItemStyle = styled.div`
	width: 1.86rem;
    height: 3.5rem;
    padding-bottom: .32rem;
    flex: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: .32rem;
    .icon{
        width: 100%;
	    flex: none;
		height: 1.86rem;
		flex: none;
		border-radius: .12rem;
		position: relative;
		z-index: 10;
		overflow: hidden;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .name{
	    height: .72rem;
	    font-size: .24rem;
	    font-weight: 400;
	    color: #333;
	    overflow: hidden;
	    display: -webkit-box;
	    -webkit-box-orient: vertical;
	    -webkit-line-clamp: 2;
	    line-height: .36rem;
    }
    .price{
        height: .4rem;
	    font-size: .28rem;
	    font-weight: 600;
	    display: flex;
	    align-items: center;
	    color: #f15a53;
    }
`


