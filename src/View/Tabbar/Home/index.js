import React, { useEffect } from 'react'
import { HotListStyle } from './style'

import { connect } from 'react-redux'
import {
	InitHomeProductAction,
	InitHomeBannerAction,
	InitHomeMenuAction,
	InitHomeCateAction
} from '@/Store/Modules/HomeModule'

import ProductItem from '@/Components/Product/ProductItem'
import SearchBar from './components/SearchBar'
import BrandGrid from './components/BrandGrid'
import Banner from './components/Banner'
import Menu from './components/Menu'

function Home (props) {
	
	const {
		immutableBanner,
		immutableMenu,
		immutableCate,
		immutableBrand,
		immutableProduct
	} = props
	
	const banner = immutableBanner.toJS()
	const menu = immutableMenu.toJS()
	const cate = immutableCate.toJS()
	const brand = immutableBrand.toJS()
	const product = immutableProduct.toJS()
	
	const {
		InitHomeProduct,
		InitHomeBanner,
		InitHomeMenu,
		InitHomeCate
	} = props
	
	useEffect(() => {
		console.log('--执行一次--')
		// if (!isLoad) {
		InitHomeProduct()
		InitHomeBanner()
		InitHomeMenu()
		InitHomeCate()
		// }
	}, [])
	
	return (
	  <>
		  <SearchBar/>
		  <Banner banner={ banner }/>
		  <Menu menu={ menu }/>
		  <BrandGrid dataItem={ brand }/>
		  <BrandGrid dataItem={ cate }/>
		  
		  <HotListStyle>
		    <div className="main">
		  	  {
		  		  product.map(item => <ProductItem key={ item.id } dataItem={ item }/>)
		  	  }
		    </div>
		  </HotListStyle>
	  </>
	)
	
}

// 映射Redux全局的state到组件的props上
// const mapStateToProps = state => ({
// 	banner: state.getIn(["home", "banner"]),
// });
const mapStateToProps = (state) => ({
	immutableBanner: state.getIn(['home', 'banner']),
	immutableMenu: state.getIn(['home', 'menu']),
	immutableCate: state.getIn(['home', 'cate']),
	immutableBrand: state.getIn(['home', 'brand']),
	immutableProduct: state.getIn(['home', 'product']),
	// immutableBanner: state.home.banner,
	// immutableMenu: state.home.menu,
	// immutableCate: state.home.cate,
	// immutableBrand: state.home.brand,
	// immutableProduct: state.home.product
})

// 映射dispatch到props上
const mapDispatchToProps = dispatch => ({
	InitHomeProduct () {
		dispatch(InitHomeProductAction())
	},
	InitHomeBanner () {
		dispatch(InitHomeBannerAction())
	},
	InitHomeMenu () {
		dispatch(InitHomeMenuAction())
	},
	InitHomeCate () {
		dispatch(InitHomeCateAction())
	}
})

// 将ui组件包装成容器组件
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Home))
