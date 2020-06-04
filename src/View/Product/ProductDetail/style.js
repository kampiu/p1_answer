import styled from 'styled-components'

export const ProductStyle = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #fff;
    padding-bottom: 1.5rem;
    
    .container-header{
        width: 100%;
	    padding: 0 .32rem;
	    float: left;
	    display: flex;
	    align-items: center;
	    margin: .32rem 0 0.32rem 0;
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
`

export const MessageBoxStyle = styled.div`
	width: 6.86rem;
    background-color: #fff;
    box-shadow: 0 0.08rem 0.32rem rgba(0,0,0,0.08);
    border-radius: .2rem;
    margin: .16rem auto;
    transform: translateY(-0.48rem);
    position: relative;
    z-index: 20;
    padding: .32rem 0 0 .32rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .warp-collect{
	    position: absolute;
	    top: .32rem;
	    right: 0;
	    display: flex;
	    width: auto;
	    height: .5rem;
	    padding: .08rem .12rem 0.08rem 0.58rem;
	    background: #efefef;
	    border-radius: .28rem 0 0 .28rem;
	    font-size: .24rem;
	    font-weight: 400;
	    line-height: .34rem;
	    &::before{
	        content: "";
	        width: .34rem;
		    height: .34rem;
		    background-image: url("https://www.xiehome.com/m_three_v/images/seller_home_footer_collect_icon.png");
		    background-size: cover;
		    background-position: center center;
		    background-repeat: no-repeat;
		    position:absolute;
		    left: 0.12rem;
		    top: 50%;
		    transform: translateY(-50%);
	    }
    }
    .price{
        width: 100%;
	    padding-right: .32rem;
	    display: block;
	    height: .9rem;
	    margin-bottom: 0;
	    font-size: .4rem;
	    font-weight: bold;
	    color: #f15a53;
        vertical-align: top;
        line-height: .5rem;
    }
    .desc{
	    width: 100%;
	    height: .84rem;
	    font-size: .28rem;
	    font-weight: 400;
	    color: #333;
	    overflow: hidden;
	    display: -webkit-box;
	    -webkit-box-orient: vertical;
	    -webkit-line-clamp: 2;
	    line-height: .42rem;
	    padding-right: .32rem;
    }
    .util{
        width: 100%;
	    height: .42rem;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    -webkit-box-align: center;
	    -ms-flex-align: center;
	    align-items: center;
	    margin-bottom: .16rem;
	    span{
		    font-size: .24rem;
		    font-weight: 400;
		    color: #999;
	    }
    }
    .attr{
        width: 100%;
	    height: .84rem;
	    flex: none;
	    display: flex;
	    align-items: center;
	    border-top: 1px solid #f5f5f5;
	    font-size: .26rem;
	    font-weight: 800;
	    color: #333;
	    position: relative;
	    overflow: hidden;
	    &::before{
		    content: "";
		    width: .32rem;
		    height: .32rem;
		    display: inline-block;
		    position: absolute;
		    right: .16rem;
		    top: 50%;
		    transform: translateY(-50%);
		    background-position: center center;
		    background-size: .24rem .24rem;
		    background-repeat: no-repeat;
		    background-image: url("https://www.xiehome.com/m_three_v/images/more-icon.png");
	    }
	    &:active{
	        opacity: .8;
	    }
    }
`

export const FooterStyle = styled.div`
    width: 100%;
    height: 1.08rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 .16rem;
    background-color: #fff;
    flex: none;
    border-top: 1px solid #efefef;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 998;
    .button {
        width: 1.08rem;
	    height: 1.08rem;
	    display: flex;
	    flex-direction: column;
	    justify-content: center;
	    align-items: center;
	    position: relative;
	    .icon{
	        width: .48rem;
		    height: .48rem;
		    background-position: center center;
		    background-size: cover;
		    background-repeat: no-repeat;
	    }
	    .desc{
		    font-size: .24rem;
		    font-weight: 800;
		    line-height: .28rem;
		    color: #333;
		    transform: scale(0.8,0.8);
	    }
    }
    .shop-icon{
        background-image:  url("https://www.xiehome.com/m_three_v/images/dianpu.png");
    }
    .car-icon{
        background-image:  url("https://www.xiehome.com/m_three_v/images/tabbar_cart_icon.png");
    }
    .menu{
        width: 4.64rem;
	    height: .84rem;
	    border-radius: .12rem;
	    overflow: hidden;
	    span{
	        font-size: .26rem;
		    font-weight: 800;
	    }
	    .button{
	        width: 50%;
		    height: 100%;
		    display: flex;
		    align-items: center;
		    float: left;
		    transition: all linear .1s;
		    cursor: pointer;
		    -webkit-user-select: none;
		    outline: 0;
	    }
	    .collect-button{
	        background-color: #ffea5c;
		    span{
			    color: #333;
		    }
	    }
	    .buy-button{
            background-color: #ff9400;
		    span{
			    color: #FFF;
		    }
	    }
    }
`

