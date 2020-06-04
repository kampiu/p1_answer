import styled from 'styled-components'

// export const SwiperWrapper = styled.div`
//   width: 100vw;
//   height: 4rem;
//   display:flex;
//   .title{
//     font-weight: 700;
//     padding-left: 6px;
//     font-size: 14px;
//     line-height: 60px;
//   }
// `

export const SearchBarStyle = styled.div`
	position: relative;
	.search-bar{
		width: 100%;
	    height: 1rem;
	    position: fixed;
	    left: 0;
	    top: 0;
	    transition: all linear .2s;
	    padding: .16rem .32rem;
	    display: flex;
	    z-index: 300;
	    align-items: center;
	    background-color: transparent;
	    .address {
		    width: 1.2rem;
		    margin-right: .16rem;
		    height: .58rem;
		    display: flex;
		    line-height: .58rem;
		    justify-content: center;
		    font-size: .24rem;
		    font-weight: bold;
		    color: rgba(51,51,51,0.7);
		    padding-left: .42rem;
		    padding-right: .16rem;
		    position: relative;
		    overflow: hidden;
		    transition: all linear .1s;
		    border-radius: .3rem;
		    background-color: rgba(255,255,255,0.27);
		    flex: none;
		    
		    &::before {
		        content: "";
			    width: .36rem;
			    height: .36rem;
			    display: inline-block;
			    position: absolute;
			    left: 0.14rem;
			    top: 50%;
			    transform: translateY(-50%);
			    background-position: center center;
			    background-size: cover;
			    background-repeat: no-repeat;
			    background-image: url('https://www.xiehome.com/m_three_v/images/location-black-icon.png');
		    }
	    }
	    .main {
		    flex: auto;
		    width: 6rem;
		    height: .68rem;
		    border-radius: .34rem;
		    background-color: rgba(245,245,245,0.4);
		    position: relative;
		    display: flex;
		    align-items: center;
		    justify-content: center;
		    overflow: hidden;
		    
		    input{
			    font-size: .28rem;
			    font-weight: bold;
			    color: rgba(51,51,51,0.7);
			    width: 6rem;
			    height: 100%;
			    flex: auto;
			    padding:0 0.32rem 0 1rem;
		        background: transparent;
		        position:absolute;
		        left:0;
		        top:0;
		        z-index: 500;
		    }
		    .placeholder{
			    font-size: .24rem;
			    font-weight: bold;
			    color: rgba(51,51,51,0.7);
		        position:absolute;
		        left: 50%;
		        top: 50%;
		        padding-left: 0.52rem;
		        transform: translate(-50%, -50%);
		        z-index: 200;
		    }
	        .icon, .icon-active{
	            content: "";
				display: inline-block;
				width: .36rem;
				height: .36rem;
				background-position: center center;
				background-size: cover;
				background-repeat: no-repeat;
				position: absolute;
				top: 50%;
				left: 0;
				transition: all linear 0.1s;
				background-image: url("https://www.xiehome.com/m_three_v/images/search-black-icon.png");
	        }
	        .icon{
				transform: translate( 1.72rem, -50%);
	        }
	        .icon-active{
				transform: translate( 0.32rem, -50%);
	        }
	    }
	}
    .search-bar-active{
	    .address{
		    width: 0;
		    padding-left: 0;
		    padding-right: 0;
	    }
	    .main{
	        background-color: rgb(245, 245, 245);
	    }
    }
`
