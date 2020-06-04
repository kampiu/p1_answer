import styled from 'styled-components'

export const MenuStyle = styled.div`
	width: 100%;
	height: 2.9rem;
    padding: .6rem .32rem 0 .32rem;
    
    .box{
        position: relative;
	    display: flex;
	    width: 6.86rem;
	    height: 2.22rem;
	    border-radius: .2rem;
	    flex: none;
	    background: #fff;
	    box-shadow: 0 0.08rem 0.32rem rgba(0,0,0,0.06);
	    opacity: 1;
	    padding-top: 0.64rem;
	    align-items: flex-start;
    }
    .header{
	    width: 100%;
	    height: .64rem;
	    display: flex;
	    align-items: center;
	    flex: none;
	    position: absolute;
	    left: 0;
	    top: -0.32rem;
	    div{
	        width: 1.48rem;
		    height: .64rem;
		    background-color: #f5f5f5;
		    border-radius: .32rem;
		    display: flex;
		    align-items: center;
		    justify-content: center;
		    font-size: .28rem;
		    font-weight: 400;
		    color: #333;
		    margin-right: .48rem;
		    transition: all linear .2s;
	    }
	    .active{
		    background-color: #ffde45;
	        font-weight: 800;
	    }
    }
    .content{
        flex: auto;
        display: flex;
        align-items: center;
        justify-content: space-around;
        .item{
            width: 20%;
		    height: 80%;
		    display: flex;
		    align-items: center;
		    justify-content: center;
		    flex-direction: column;
		    transition: all linear .1s;
		    cursor: pointer;
		    -webkit-user-select: none;
		    outline: 0;
		    color: #333;
            text-decoration: none;
            span{
			    font-size: .24rem;
			    font-weight: 400;
			    line-height: .34rem;
			    color: #333;
			    flex: none;
			    margin-top: 0.12rem;
            }
        }
        .icon{
            width: 0.88rem;
            height: 0.88rem;
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
        }
    }
`
