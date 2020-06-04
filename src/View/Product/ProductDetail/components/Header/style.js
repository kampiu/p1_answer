import styled from 'styled-components'

export const HeaderStyle = styled.div`
    width: 100%;
    height: 1rem;
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(255,255,255,0);
    z-index: 250;
    box-shadow: rgba(0, 0, 0, 0) 0 0.08rem 0.32rem;
    
    .back-button{
	    flex: none;
	    display: flex;
	    align-items: center;
	    justify-content: center;
    }
    
    .menu{
        width: 1.6rem;
	    height: 1rem;
	    flex: none;
	    display: flex;
	    div{
	        flex-grow: 1;
	    }
    }
    .back-button, .share-button, .menu-button{
        width: 0.8rem;
	    height: 1rem;
	    flex: none;
	    display: flex;
	    align-items: center;
	    justify-content: center;
	    position:relative;
        z-index: 50;
    }
    .back-button span,.share-button span,.menu-button span{
        width: .48rem;
        height: .48rem;
	    border-radius: 50%;
	    display: flex;
	    align-items: center;
	    justify-content: center;
        background-color: rgba(0, 0, 0, 0.16);
        font-size: 0.36rem;
        transition: all linear 0.2s;
        color: #FFF;
    }
    .bg-opacity{
        background-color: rgba(0, 0, 0, 0) !important;
        color: #333 !important;
    }
    
    .content{
	    position:absolute;
	    width: 100%;
	    height: 100%;
	    left:0;
	    top:0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #FFF;
        z-index: 10;
        span{
            margin: 0 .3rem;
            font-size: .28rem;
            font-weight: normal;
        }
        .active{
            font-size: .32rem;
		    font-weight: bold;
		    position: relative;
		    &::after {
			    content: '';
			    display: block;
			    width: 100%;
			    height: .04rem;
			    position: absolute;
			    bottom: .02rem;
			    left: 0;
			    background-color: #ffde45;
			    z-index: -1;
			}
        }
    }
`
