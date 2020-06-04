import styled from 'styled-components'

export const BrandGridStyle = styled.div`
	width: 100%;
    padding: .28rem .32rem;
    .header{
        width: 100%;
	    flex: none;
	    font-size: .36rem;
	    font-weight: 800;
	    color: #333;
	    overflow: hidden;
	    display: -webkit-box;
        flex-direction: column;
	    -webkit-box-orient: vertical;
	    -webkit-line-clamp: 1;
	    line-height: .74rem;
	    display: -ms-flexbox;
	    display: flex;
	    margin: .24rem 0;
    }
    .main{
        width: 100%;
		height: .74rem;
        display:flex;
	    align-items: center;
	    justify-content: space-between;
        flex: none;
	    padding-left: .44rem;
	    position: relative;
    }
    .desc{
        width: 100%;
	    flex: none;
	    height: .34rem;
	    font-size: .24rem;
	    font-weight: 400;
	    color: #999;
	    overflow: hidden;
	    display: -webkit-box;
	    -webkit-box-orient: vertical;
	    -webkit-line-clamp: 1;
	    line-height: .34rem;
	    padding-left: .44rem;
    }
    .more{
        padding-right: .3rem;
	    position: relative;
	    font-size: .24rem;
	    font-weight: 400;
	    display: flex;
	    align-items: center;
	    color: #999;
	    &::before{
		    content: "";
		    width: .24rem;
		    height: .24rem;
		    display: inline-block;
		    background-position: center center;
		    background-size: cover;
		    background-repeat: no-repeat;
		    background-image: url("https://www.xiehome.com/m_three_v/images/more-icon.png");
		    position: absolute;
		    right: 0;
		    top: 50%;
		    transform: translateY(-50%);
	    }
    }
    .header-icon{
        width: .36rem;
	    height: .36rem;
	    position: absolute;
	    left: 0;
	    top: 50%;
	    transform: translateY(-50%);
	    display: inline-block;
	    margin-right: .08rem;
	    background-position: center center;
	    background-size: cover;
	    background-repeat: no-repeat;
	    background-image: url("https://www.xiehome.com/m_three_v/images/home-module-design.png");
    }
    .body{
        width: 100%;
	    background-color: #fff;
	    box-shadow: 0 0.08rem 0.32rem rgba(0,0,0,0.08);
	    border-radius: .2rem;
	    padding: .32rem 0 0 .32rem;
	    overflow: hidden;
	    display: flex;
	    flex-direction: row;
	    flex-wrap: wrap;
    }
    .item-nav{
        width: 1.86rem;
        height: auto;
        overflow: hidden;
        display:flex;
        flex-direction: column;
        align-items: center;
        margin: 0 .32rem .1rem 0;
        span{
            font-size: 0.24rem;
            color: #333;
            line-height: 2em;
            overflow: hidden;
        }
    }
    .item{
	    width: 1.86rem;
	    height: 1.24rem;
	    border: .02rem solid #efefef;
	    border-radius: .04rem;
	    position: relative;
	    overflow: hidden;
	    background-position: center center;
	    background-repeat: no-repeat;
	    background-size: contain;
	    
	    img{
	        position: absolute;
	        height: 100%;
            width: auto;
            left: 50%;
            top: 50%;
			transform: translate(-50%, -50%);
	    }
    }
`
