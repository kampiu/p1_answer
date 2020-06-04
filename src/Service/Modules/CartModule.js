const Service = {
	namespaced: 'Cart',
	api: {
		// 用户购物车列表
		GetCartList: {
			url: 'cart',
			method: 'GET'
		},
		// 用户添加购物车
		HandleCartCreate: {
			url: 'cart/add',
			method: 'POST'
		},
		// 用户更新购物车
		HandleCartUpdate: {
			url: 'cart/update',
			method: 'POST'
		},
		// 用户删除购物车
		HandleCartDelete: {
			url: 'cart/remove',
			method: 'POST'
		},
	}
}

export default Service
