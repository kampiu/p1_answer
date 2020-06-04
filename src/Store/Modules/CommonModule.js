import service from 'Service'
import { fromJS } from 'immutable';

const INIT_PRODUCT_CATE = 'INIT_PRODUCT_CATE'

let CommonStore = fromJS({
	cate: []
})

export const reducer = (state = CommonStore, action) => {
	switch (action.type) {
		case INIT_PRODUCT_CATE:
			console.log('InitProductCateAction', action)
			return state.set("cate", fromJS(action.data))
		default:
			return state
	}
}

export const InitProductCateAction = () => {
	return async (dispatch) => {
		const response = await service["Product/GetCateList"]()
		console.log('InitProductCateAction', response)
		dispatch({
			type: INIT_PRODUCT_CATE,
			data: response.status === 20000 ? response.data : []
		})
	}
}
