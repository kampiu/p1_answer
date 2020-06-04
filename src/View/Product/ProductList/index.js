import React, { Component, useEffect } from 'react'
import { ProductHeaderStyle, ProductMenuStyle, ProductScrollStyle, ProductLayoutStyle } from './style'
import { HandleProductListAction } from '../../..//Store/Modules/ProductModule'
import { connect } from 'react-redux'
import ProductItem from './../../../Components/Product/ProductItem'

function ProductList (props) {
	
	const {
		immutableList
	} = props
	
	const List = immutableList.toJS()
	
	const {
		HandleProductList
	} = props
	
	useEffect(() => {
		HandleProductList()
	}, [])
	
	return (
	  <ProductLayoutStyle>
		  <ProductHeaderStyle>
			  <div className="back-button iconfont">&#xe60e;</div>
			  <div className="search-box">
				  <div className="search-button">
					  <span>商品<i className="iconfont">&#xe614;</i></span>
				  </div>
				  <input type="text"/>
			  </div>
		  </ProductHeaderStyle>
		  <ProductMenuStyle>
			  <div className="menu-nav">
				  <span>价格排序</span>
			  </div>
			  <div className="menu-nav">
				  <span>热销、包邮</span>
			  </div>
			  <div className="menu-nav">
				  <span>销量</span>
			  </div>
			  <div className="menu-nav">
				  <span>筛选</span>
			  </div>
		  </ProductMenuStyle>
		  <ProductScrollStyle>
			  <div className="main">
				  {
					  List.map(item => {
					    return <ProductItem dataItem={ item } key={ item.id }/>
					  })
				  }
			  </div>
		  </ProductScrollStyle>
	  </ProductLayoutStyle>
	)
}

const mapStateToProps = (state) => ({
	immutableList: state.getIn(['product', 'list']),
})

// 映射dispatch到props上
const mapDispatchToProps = dispatch => ({
	HandleProductList () {
		dispatch(HandleProductListAction())
	}
})

// 将ui组件包装成容器组件
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(ProductList))

