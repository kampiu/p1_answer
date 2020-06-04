import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ProductStyle, FooterStyle, MessageBoxStyle } from './style'
import SellerList from './components/SellerList'
import AttrBox from './components/AttrBox'
import Header from './components/Header'
import Banner from './components/Banner'
import service from './../../../Service'
import { InitProductDetailAction } from './../../../Store/Modules/ProductModule'
import { connect } from 'react-redux'

function ProductDetail (props) {
	
	const ID = props.match.params.id
	let [isShow, changeShow] = useState(false)
	
	const {
		immutableProduct
	} = props
	
	const { product, sku } = immutableProduct.toJS()
	
	const {
		InitProductDetail
	} = props
	
	useEffect(() => {
		InitProductDetail(ID)
		// initProduct(ID).then(res => {
		//
		// }).catch(err => {})
	}, [])
	
	return (
	  <ProductStyle>
		  
		  <Header/>
		  
		  <Banner banner={ product.banner }/>
		  
		  <MessageBoxStyle>
			  <div className="warp-collect">收藏</div>
			  <div className="price">￥288</div>
			  <div className="desc">{ product.name }</div>
			  <div className="util">
				  <span>月销{ product.sale_num }笔</span>
			  </div>
			  <div className="attr" onClick={ () => changeShow(true) }>请选择规格</div>
		  </MessageBoxStyle>
		  
		  <div className="container-header">
			  <span>店铺介绍</span>
		  </div>
		  
		  <SellerList/>
		  
		  <div className="container-header">
			  <span>商品详情</span>
		  </div>
		  
		  <div className="detail-container">
			  {
				  product.desc_main.map(item => <img key={ item } src={ item } alt=""/>)
			  }
		  </div>
		  
		  <AttrBox isShow={ isShow } changeShow={ changeShow } product={ product } sku={ sku }/>
		  
		  <FooterStyle>
			  <div className="button">
				  <div className="icon shop-icon"/>
				  <span className="desc">店铺</span>
			  </div>
			  <Link to="/cart" className="button">
				  <div className="icon car-icon"/>
				  <span className="desc">购物车</span>
			  </Link>
			  <div className="menu">
				  <div className="button collect-button" onClick={ () => changeShow(true) }>
					  <span>加入购物车</span>
				  </div>
				  <div className="button buy-button" onClick={ () => changeShow(true) }>
					  <span>立即购买</span>
				  </div>
			  </div>
		  </FooterStyle>
	  </ProductStyle>
	)
}

const mapStateToProps = (state) => ({
	immutableProduct: state.getIn(['product', 'detail']),
})

// 映射dispatch到props上
const mapDispatchToProps = dispatch => ({
	InitProductDetail (id) {
		dispatch(InitProductDetailAction(id))
	}
})

// 将ui组件包装成容器组件
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(ProductDetail))
