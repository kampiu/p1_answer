import service from '@/Service'
import { fromJS } from 'immutable'

const INIT_PRODUCT_DETAIL = 'INIT_PRODUCT_DETAIL'
const INIT_PRODUCT_LIST = 'INIT_PRODUCT_LIST'

let ProductStore = fromJS({
	list: [],
	detail: {
		product: {
			id: '',
			name: '',
			goods_sn: '',
			banner: [],
			brand: { id: '', name: '' },
			cate: { id: '', name: '' },
			created_at: '',
			desc: '',
			desc_main: [],
			is_free_shipping: 0,
			is_hot: 0,
			is_new: 0,
			is_sale: 0,
			sale_num: 0,
			thumb: '',
			updated_at: '',
		},
		sku: []
	}
})

export const reducer = (state = ProductStore, action) => {
	switch (action.type) {
		case INIT_PRODUCT_DETAIL:
			return state.set('detail', fromJS(action.data))
		case INIT_PRODUCT_LIST:
			return state.set('list', fromJS(action.data))
		default:
			return state
	}
}

const detail = {
	product: {
		id: '',
		name: '',
		goods_sn: '',
		banner: [],
		brand: { id: '', name: '' },
		cate: { id: '', name: '' },
		created_at: '',
		desc: '',
		desc_main: [],
		is_free_shipping: 0,
		is_hot: 0,
		is_new: 0,
		is_sale: 0,
		sale_num: 0,
		thumb: '',
		updated_at: '',
	},
	sku: []
}

export const InitProductDetailAction = (id) => {
	return async (dispatch) => {
		const response = await service['Product/GetProductDetail']({ id })
		dispatch({
			type: INIT_PRODUCT_DETAIL,
			data: response.status === 20000 ? response.data : { ...detail }
		})
	}
}

export const HandleProductListAction = () => {
	return async (dispatch) => {
		const response = await service['Product/GetProductList']()
		dispatch({
			type: INIT_PRODUCT_LIST,
			data: response.status === 20000 ? response.data.data : []
		})
	}
}
