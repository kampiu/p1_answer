import React, { useEffect, useState } from 'react'
import { ClassifyStyle } from './style'
import { InitProductCateAction } from './../../../Store/Modules/CommonModule'
import { connect } from 'react-redux'

function Classify (props) {
	
	const [cateChild, setCateChild] = useState([])
	const [cateIndex, setCateIndex] = useState(0)
	
	const {
		immutableCate
	} = props
	
	const cate = immutableCate.toJS()
	
	const {
		InitProductCate
	} = props
	
	useEffect(() => {
		if(!immutableCate.size){
			InitProductCate()
		}
	}, [])
	
	useEffect(() => {
		if (cate.length > 0) {
			setCateChild(cate[cateIndex].cate)
		}
	}, [cateIndex, immutableCate])
	
	return (
	  <ClassifyStyle>
		  <div className="header">
			  <span className="title">分类</span>
		  </div>
		  <div className="scroll-layout">
			  <div className="left">
				  {
					  cate.map((item, index) => (
						<div className="left-item" key={ item.id } onClick={ () => setCateIndex(index) }>
							<span className={ index === cateIndex ? "active" : "" }>{ item.name }</span>
						</div>
					  ))
				  }
			  
			  </div>
			  <div className="right">
				  <div className="main-content"/>
				  <div className="right-box">
					  {
						  cateChild.map(item => (
							<div className="classify-item" key={ item.id }>
								<div className="icon" style={{backgroundImage: `url(${ item.logo })`}}/>
								<span>{ item.name }</span>
							</div>
						  ))
					  }
				  </div>
			  </div>
		  </div>
	  </ClassifyStyle>
	)
}

const mapStateToProps = (state) => ({
	immutableCate: state.getIn(['common', 'cate']),
})

// 映射dispatch到props上
const mapDispatchToProps = dispatch => ({
	InitProductCate () {
		dispatch(InitProductCateAction())
	}
})

// 将ui组件包装成容器组件
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Classify))

