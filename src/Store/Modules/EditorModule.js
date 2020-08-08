import service from '@/Service'
import { fromJS } from 'immutable'
import _ from 'lodash'

const HANDLECHANGEVALUE = 'HANDLECHANGEVALUE'
const UPDATEPROPERTY = 'UPDATEPROPERTY'
const UPDATEFORMCONFIG = 'UPDATEFORMCONFIG'
const CHANGESELECTED = 'CHANGESELECTED'
const RESETFORMCOMPONENTS = 'RESETFORMCOMPONENTS'

const DELETECOMPONENT = 'DELETECOMPONENT'
const COPYCOMPONENT = 'COPYCOMPONENT'

const SELECTDOM = 'SELECTDOM'

let EditorStore = {
	// Data: JSON.parse(`[{"defaultValue":"asdfg","disabled":false,"id":"INPUT_15962095308642","size":"large","type":"text","label":"单行AAA","placeholder":"","allowClear":false,"componentType":"INPUT"},{"defaultValue":"","disabled":false,"id":"INPUT_15962095320345","size":"large","type":"text","label":"单行BBB","placeholder":"","allowClear":false,"componentType":"INPUT"}]`),
	// Data: JSON.parse(`[{"defaultValue":"","disabled":false,"id":"CHECKBOX_15963513912452","key":"CHECKBOX_15963513912452","label":"多选框","componentType":"CHECKBOX","dataList":[],"dataKey":"","dataValue":"","required":false},{"defaultValue":"","disabled":false,"id":"INPUT_159635140003911","key":"INPUT_159635140003911","size":"large","type":"text","label":"单行输入框","placeholder":"","allowClear":false,"componentType":"INPUT","required":false},{"defaultValue":"","disabled":false,"id":"RADIO_159635140260214","key":"RADIO_159635140260214","label":"单选框","componentType":"RADIO","dataList":[],"dataKey":"","dataValue":"","required":false},{"defaultValue":"","disabled":false,"id":"SELECT_159635140376417","key":"SELECT_159635140376417","label":"下拉框","componentType":"SELECT","dataList":[],"dataKey":"","dataValue":"","required":false},{"defaultValue":"","disabled":false,"id":"DATETIME_159635140526620","key":"DATETIME_159635140526620","label":"时间选择器","componentType":"DATETIME","dataList":[],"dataKey":"","dataValue":"","placeholder":"","required":false},{"defaultValue":"","disabled":false,"id":"CASCADER_159635140632723","key":"CASCADER_159635140632723","label":"联级选择器","componentType":"CASCADER","dataList":[],"dataKey":"","dataValue":"","required":false}]`),
	Data: [],
	selected: null,
	formConfig: {
		id: '',                 // 表单ID
		form_name: '',          // 表单名称
		layout: 'horizontal',   // 表单的三种布局
		action_url: '',         // 表单提交URL
		source_url: '',         // 表单数据源URL
		labelAlign: 'right',    // 表单Label对齐方式 left right
		// labelCol: '',           // 表单Label布局
		size: 'middle',         // 表单组件大小
	},
	DataDom: []
}

export const reducer = (state = EditorStore, action) => {
	switch (action.type) {
		case HANDLECHANGEVALUE:
			state.Data = [...action.data]
			return _.cloneDeep(state)
		case UPDATEPROPERTY:
			for (let i = 0, len = state.Data.length; i < len; i++) {
				if (state.Data[i].id === state.selected.id) {
					Object.assign(state.Data[i], action.data)
				}
			}
			return _.cloneDeep(state)
		case CHANGESELECTED:
			for (let i = 0, len = state.Data.length; i < len; i++) {
				if (state.Data[i].id === action.id) {
					state.selected = state.Data[i]
					break
				}
			}
			return _.cloneDeep(state)
		case UPDATEFORMCONFIG:
			state.formConfig = Object.assign(state.formConfig, action.data)
			return _.cloneDeep(state)
		case RESETFORMCOMPONENTS:
			state.Data = []
			return _.cloneDeep(state)
		case DELETECOMPONENT:
			for(let i = 0,len = state.Data.length;i < len;i++){
				if(state.Data[i].id === action.data){
					state.Data.splice(i, 1)
					break
				}
			}
			if(state.selected && state.selected.id === action.data){
				state.selected = null
			}
			return _.cloneDeep(state)
		case COPYCOMPONENT:
			
			return _.cloneDeep(state)
		default:
			return state
	}
}

export const ResetForm = () => ({type: RESETFORMCOMPONENTS})

export const SelectDom = (data) => ({
	type: SELECTDOM,
	data
})

export const RemoveComponent = (data) => ({
	type: DELETECOMPONENT,
	data
})

export const CopyComponent = (data) => ({
	type: COPYCOMPONENT,
	data
})

export const UpdateData = (data) => ({
	type: UPDATEPROPERTY,
	data,
})

export const UpdateForm = (data) => ({
	type: UPDATEFORMCONFIG,
	data
})

export const ChangeData = (data) => ({
	type: HANDLECHANGEVALUE,
	data,
})

export const ChangeSelected = (id) => ({
	type: CHANGESELECTED,
	id,
})
