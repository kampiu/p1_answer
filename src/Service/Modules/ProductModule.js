const Service = {
	namespaced: 'Product',
	api: {
		// 获取商品列表
		GetProductList: {
			url: 'products',
			method: 'GET'
		},
		// 商品详情
		GetProductDetail: {
			url: 'product/detail',
			method: 'GET'
		},
		// 获取分类列表
		GetCateList: {
			url: 'cate',
			method: 'GET'
		},
		// 获取品牌列表
		GetBrandList: {
			url: 'brand',
			method: 'GET'
		},
		// 用户收藏列表
		GetCollectList: {
			url: 'brand',
			method: 'GET'
		},
		// 用户新增收藏
		HandleProductCollect: {
			url: 'brand',
			method: 'POST'
		}
		
	}
}

export default Service
