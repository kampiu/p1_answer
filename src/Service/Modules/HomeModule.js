const Service = {
	namespaced: 'Home',
	api: {
		// 获取首页广告
		GetBannerList: {
			url: 'banner',
			method: 'GET'
		},
		// 获取首页菜单
		GetMenuList: {
			url: 'home/menu',
			method: 'GET'
		},
		// 获取首页菜单
		GetMenuCate: {
			url: 'home/cate',
			method: 'GET'
		},
	}
}

export default Service
