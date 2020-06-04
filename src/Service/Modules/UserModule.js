const Service = {
	namespaced: 'User',
	api: {
		// 用户注册
		HandleUserRegister: {
			url: 'user/register',
			method: 'POST'
		},
		// 用户登录
		HandleUserLogin: {
			url: 'user/login',
			method: 'POST'
		},
		// 用户登录
		HandleUserLogout: {
			url: 'user/logout',
			method: 'POST'
		},
		// 用户信息
		GetUserInfo: {
			url: 'user/info',
			method: 'GET'
		},
		
		// 用户收货地址列表
		GetUserAddressList: {
			url: 'user/address',
			method: 'GET'
		},
		// 用户添加收货地址
		HandleUserAddressCreate: {
			url: 'user/address/add',
			method: 'POST'
		},
		// 用户移除收货地址
		HandleUserAddressDelete: {
			url: 'user/address/remove',
			method: 'POST'
		},
		// 用户修改收货地址
		HandleUserAddressUpdate: {
			url: 'user/address/update',
			method: 'POST'
		},
		// 用户收货地址 详情
		GetUserAddressDetail: {
			url: 'user/address/detail',
			method: 'GET'
		}
		
	}
}

export default Service
