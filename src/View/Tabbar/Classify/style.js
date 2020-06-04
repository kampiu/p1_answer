import styled from 'styled-components'

export const ClassifyStyle = styled.div`
    flex: auto;
    width: 100%;
    height: calc(100vh - 0.98rem);
    -webkit-overflow-scrolling: touch;
    background-color: #fff;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .header{
        width: 100%;
	    height: 1rem;
	    display: flex;
	    align-items: center;
	    justify-content: center;
	    position: relative;
	    background-color: #fff;
	    box-shadow: 0 0.08rem 0.32rem rgba(0,0,0,0.08);
	    flex: none;
	    z-index: 250;
        .title{
            font-size: .32rem;
		    font-weight: 800;
		    color: #333;
		    overflow: hidden;
		    display: -webkit-box;
		    -webkit-box-orient: vertical;
		    -webkit-line-clamp: 1;
		    width: 80%;
		    text-align: center;
        }
    }
    .scroll-layout{
        flex: auto;
        display:flex;
        
        .left{
            width: 2rem;
		    flex: none;
		    border-right: 1px solid #efefef;
		    overflow-x: hidden;
		    overflow-y: scroll;
		    -webkit-overflow-scrolling: touch;
        }
        .right{
            overflow-x: hidden;
		    overflow-y: scroll;
		    -webkit-overflow-scrolling: touch;
		    flex: auto;
        }
    }
    .left-item{
	    width: 100%;
	    height: 1.16rem;
	    display: flex;
	    align-items: center;
	    justify-content: center;
	    font-size: .26rem;
	    font-weight: 800;
	    color: #333;
	    .active{
	        z-index: 10;
	        position:relative;
	        &::before{
	            content: "";
	            width: 100%;
	            height: 4px;
	            display: inline-block;
	            background-color: #FFDE45;
	            position:absolute;
	            left:0;
	            bottom: 0;
	            z-index: -1;
	        }
	    }
    }
    .main-content{
	    width: 100%;
	    height: 2.1rem;
	    background-color: #f0f0f0;
	    background-image: url("https://www.xiehome.com/m_three_v/images/classify_adv.jpg");
	    background-size: 100% 100%;
	    background-repeat: no-repeat;
	    position: relative;
	    z-index: 10;
	    overflow: hidden;
    }
    .right-box{
        width: 100%;
	    display: flex;
	    align-content: space-between;
	    justify-content: space-between;
	    flex-wrap: wrap;
	    overflow: hidden;
	    padding: .64rem;
    }
    .classify-item{
        width: 1.84rem;
	    overflow: hidden;
	    margin-bottom: .46rem;
	    .icon{
	        width: 100%;
		    height: 1.84rem;
		    position: relative;
		    z-index: 10;
		    overflow: hidden;
		    background-position: center center;
		    background-repeat: no-repeat;
		    background-size: contain;
		    //background-color: pink;
	    }
	    span{
		    width: 100%;
		    height: .68rem;
		    overflow: hidden;
		    display:flex;
		    align-items: center;
		    justify-content: center;
		    font-size: .26rem;
		    font-weight: 800;
		    color: #333;
	    }
    }
`


