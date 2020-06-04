import service from '@/Service'
import { fromJS } from 'immutable'

const INIT_HOME_PRODUCT = 'INIT_HOME_PRODUCT'

let HomeStore = fromJS({
	productList: [],
	isLoad: false
})

export const reducer = (state = HomeStore, action) => {
	switch (action.type) {
		case INIT_HOME_PRODUCT:
			return state.set('productList', fromJS(action.data))
		default:
			return state
	}
}

export const GetHomeDataAction = () => {
	return async (dispatch) => {
		const response = await service['Home/GetHomeData']()
		
		dispatch({
			type: INIT_HOME_PRODUCT,
			data: response.status === 20000 ? response.data : []
		})
	}
}
