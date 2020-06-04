import service from '@/Service'
import { fromJS } from 'immutable'

const INIT_HOME_BANNER = 'INIT_HOME_BANNER'
const INIT_HOME_PRODUCT = 'INIT_HOME_PRODUCT'
const INIT_HOME_CATE = 'INIT_HOME_CATE'
const INIT_HOME_MENU = 'INIT_HOME_MENU'

// let HomeStore = fromJS({
// 	banner: []
// })
let HomeStore = fromJS({
	banner: [],
	menu: [],
	cate: {
		name: '',
		desc: '',
		icon: '',
		list: []
	},
	brand: {
		name: '',
		desc: '',
		icon: '',
		list: []
	},
	product: [],
	isLoad: false
})

export const reducer = (state = HomeStore, action) => {
	switch (action.type) {
		case INIT_HOME_BANNER:
			return state.set('banner', fromJS(action.data))
		case INIT_HOME_CATE:
			return state.set('cate', fromJS(action.data.cate))
						.set('brand', fromJS(action.data.brand))
		case INIT_HOME_MENU:
			return state.set('menu', fromJS(action.data))
		case INIT_HOME_PRODUCT:
			return state.set('product', fromJS(action.data))
		default:
			return state
	}
}

export const InitHomeProductAction = () => {
	return async (dispatch) => {
		const response = await service['Product/GetProductList']({ page: 1, limit: 40 })
		dispatch({
			type: INIT_HOME_PRODUCT,
			data: response.status === 20000 ? response.data.data : []
		})
	}
}

export const InitHomeBannerAction = () => {
	return async (dispatch) => {
		const response = await service['Home/GetBannerList']()
		dispatch({
			type: INIT_HOME_BANNER,
			data: response.status === 20000 ? response.data : []
		})
	}
}

export const InitHomeMenuAction = () => {
	return async (dispatch) => {
		const response = await service['Home/GetMenuList']()
		console.log(' -- InitHomeMenuAction -- ', response)
		dispatch({
			type: INIT_HOME_MENU,
			data: response.status === 20000 ? response.data : []
		})
	}
}

export const InitHomeCateAction = () => {
	return async (dispatch) => {
		const response = await service['Home/GetMenuCate']()
		console.log(' -- InitHomeCateAction -- ', response)
		const Mock = {
			name: '',
			desc: '',
			icon: '',
			list: []
		}
		dispatch({
			type: INIT_HOME_CATE,
			data: response.status === 20000 ? response.data : {
				cate: Mock,
				brand: Mock
			}
		})
	}
}

