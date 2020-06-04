import styled from 'styled-components'

export const ProductStyle = styled.div`
    width: 3.28rem;
    border-radius: .2rem;
    overflow: hidden;
    -webkit-box-shadow: 0 0.08rem 0.32rem rgba(0,0,0,0.08);
    box-shadow: 0 0.08rem 0.32rem rgba(0,0,0,0.08);
    background-color: #fff;
    float: left;
    margin-bottom: .32rem;
    display: flex;
    flex-direction: column;
    transition: all linear .1s;
    cursor: pointer;
    -webkit-user-select: none;
    outline: 0;
    .icon{
	    width: 3.28rem;
	    height: 4.36rem;
	    flex: none;
	    position: relative;
	    z-index: 10;
	    overflow: hidden;
	    img,.img-lazy{
		    width: 100%;
	        height: 100%;
	    }
    }
    .content{
	    flex: auto;
	    display: flex;
	    flex-direction: column;
	    padding: .16rem .16rem .14rem .16rem;
	    justify-content: space-between;
    }
    .name{
        height: .8rem;
	    font-size: .26rem;
	    font-weight: 400;
	    color: #333;
	    overflow: hidden;
	    display: -webkit-box;
	    -webkit-box-orient: vertical;
	    -webkit-line-clamp: 2;
	    line-height: .4rem;
    }
    .desc{
        height: .34rem;
	    font-size: .24rem;
	    font-weight: 400;
	    margin: 0.1rem 0;
	    color: #999;
    }
    .main{
        height: .44rem;
	    display: flex;
	    align-items: center;
	    justify-content: space-between;
	    .price{
	        font-size: .32rem;
		    font-weight: 800;
		    color: #f15a53;
	    }
	    span{
		    font-size: .24rem;
		    font-weight: 400;
		    color: #999;
	    }
    }
`
