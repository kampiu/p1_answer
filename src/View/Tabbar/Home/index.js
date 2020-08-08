import React, { useEffect, useState } from 'react'

import { connect } from 'react-redux'
// import {
// 	GetHomeDataAction,
// } from '@/Store/Modules/HomeModule'


import TabBoxComponent from './components/TabBox'
import FormCard from './components/FormCard'
import Form from './components/Form'

const FormComponent = TabBoxComponent()(Form)
const CardComponent = TabBoxComponent()(FormCard)
const GetHomeDataAction = () => {}

function Home (props) {
	
	const [tab, selectTab] = useState(0)
	
	const {
		immutableProductList,
	} = props
	
	const ProductList = immutableProductList.toJS()
	
	const {
		GetHomeData,
	} = props
	
	useEffect(() => {
		GetHomeData()
	}, [])
	
	const THEAD = ['', '项目品类', '所属类别', '项目编号', '项目名称', '项目状态', '项目经理', '所属部门', '项目计划时间']
	
	return (
		<>
			{
				[
					<CardComponent selectTab={ selectTab } tab={ tab } list={ ProductList }/> ,
					<FormComponent selectTab={ selectTab } tab={ tab } thead={ THEAD } list={ ProductList }/>
					][tab]
			}
		</>
	)
	
}

const mapStateToProps = (state) => ({
	immutableProductList: state.getIn(['home', 'productList']),
})

const mapDispatchToProps = dispatch => ({
	GetHomeData () {
		dispatch(GetHomeDataAction())
	},
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(React.memo(Home))
