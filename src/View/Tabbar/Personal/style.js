import styled from 'styled-components'

export const PersonalStyle = styled.div`
    overflow-x: hidden;
    overflow-y: scroll;
    flex: auto;
    width: 100%;
    height: calc(100vh - 0.98rem);
    -webkit-overflow-scrolling: touch;
    background-color: #fff;
    position: relative;
    
    &::before{
        content: "";
	    width: 7.5rem;
	    height: 5.52rem;
	    position: absolute;
	    left: 0;
	    top: 0;
	    background-position: center center;
	    background-size: 100% 100%;
	    background-repeat: no-repeat;
	    background-image: url("https://www.xiehome.com/m_three_v/images/register_bg.png");
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
		    background-size: 100% 100%;
		    background-repeat: no-repeat;
		    background-image: url("https://www.xiehome.com/m_three_v/images/header-setting-icon.png");
        }
    }
    .user-center{
        width: 100%;
	    height: 3rem;
	    position: relative;
	    z-index: 10;
	    display: flex;
	    flex-direction: column;
	    align-items: center;
	    justify-content: center;
	    .icon{
	        width: 1.48rem;
		    height: 1.48rem;
		    border-radius: 50%;
		    border: 2px solid #fff;
		    position: relative;
		    z-index: 10;
		    overflow: hidden;
		    img{
			    width: 100%;
			    height: 100%
		    }
	    }
	    span{
		    width: 100%;
		    margin-top: .16rem;
		    height: .4rem;
		    font-size: .28rem;
		    text-align: center;
		    font-weight: 800;
		    color: #333;
		    overflow: hidden;
		    text-overflow: ellipsis;
		    white-space: nowrap;
	    }
    }
    
    img{
	    width: 6.86rem;
	    height: 1.5rem;
	    border-radius: 0.2rem;
    }
`

export const TabStyle = styled.div`
    width: 6.86rem;
    height: 2.34rem;
    background-color: #fff;
    border-radius: .2rem;
    box-shadow: 0 0.08rem 0.32rem rgba(0,0,0,0.08);
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    z-index: 10;
    display: flex;
    flex-direction: column;
    .tab-header{
        width: 100%;
	    height: .74rem;
	    flex: none;
	    background: linear-gradient(to bottom,#efefef,#FFF);
	    div{
	        float: left;
		    width: 50%;
		    height: 100%;
		    display: flex;
		    align-items: center;
		    justify-content: center;
		    background-color: #efefef;
		    transition: all linear .1s;
		    cursor: pointer;
		    -webkit-user-select: none;
		    outline: 0;
		    &:last-child{
		        border-radius: .2rem .2rem 0 .2rem;
		    }
		    &:first-child {
			    border-radius: .2rem .2rem .2rem 0;
			}
		    span{
		        font-size: .28rem;
			    font-weight: 400;
			    color: #333;
		    }
	    }
	    .active{
	        background-color: #fff!important;
	        border-radius: .2rem .2rem .2rem 0;
	        
		    span{
		        position: relative;
			    font-size: .3rem;
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
    .tab-content{
	    flex: auto;
	    width: 100%;
	    height: 100%;
	    display: flex;
	    align-items: center;
	    justify-content: space-between;
	    img{
		    width: .48rem;
	        height: .48rem;
	    }
	    span{
	        margin-top: .16rem;
		    font-size: .24rem;
		    font-weight: 400;
		    line-height: .36rem;
		    color: #333;
	    }
    }
    .tab-item{
        width: 20%;
	    flex: none;
	    height: 100%;
	    display: flex;
	    align-items: center;
	    justify-content: center;
	    flex-direction: column;
	    position: relative;
	    transition: all linear .1s;
	    cursor: pointer;
	    -webkit-user-select: none;
	    outline: 0;
	    &:active{
	        background-color: rgba(0,0,0,0.02);
	    }
	    i{
		    display: flex;
		    align-items: center;
		    font-style: normal;
		    justify-content: center;
		    min-width: .34rem;
		    padding: 0 .1rem;
		    height: .34rem;
		    font-size: .24rem;
		    color: #fff;
		    border-radius: .17rem;
		    background-color: #f15a53;
		    position: absolute;
		    left: .76rem;
		    transform: scale(0.9);
		    top: .16rem;
		    z-index: 100;
	    }
    }
`

export const MenuStyle = styled.div`
	width: 6.86rem;
    margin: .64rem auto;
    background-color: #fff;
    box-shadow: 0 0.08rem 0.32rem rgba(0,0,0,0.08);
    border-radius: .2rem;
    overflow: hidden;
    .item{
	    width: 100%;
	    height: .98rem;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    -webkit-box-align: center;
	    -ms-flex-align: center;
	    align-items: center;
	    padding: 0 .32rem;
	    position: relative;
	    font-size: .26rem;
	    font-weight: 400;
	    color: #333;
	    -webkit-transition: all linear .1s;
	    transition: all linear .1s;
	    cursor: pointer;
	    -webkit-user-select: none;
	    outline: 0;
	    &::before{
		    content:"";
	        width: .32rem;
		    height: .32rem;
		    position: absolute;
		    right: .32rem;
		    top: 50%;
		    -webkit-transform: translateY(-50%);
		    transform: translateY(-50%);
		    display: inline-block;
		    background-position: center center;
		    background-size: cover;
		    background-repeat: no-repeat;
		    background-image: url("https://www.xiehome.com/m_three_v/images/jiantou.png");
	    }
	    &:active{
	        background-color: rgba(0,0,0,0.02);
            outline: 0;
	    }
    }
    .icon{
        width: .32rem;
	    height: .32rem;
	    display: inline-block;
	    margin-right: .42rem;
	    background-position: center center;
	    background-size: cover;
	    background-repeat: no-repeat;
    }
`
