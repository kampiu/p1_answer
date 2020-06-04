import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react'
import { AttrScrollStyle, BoxStyle, FooterStyle } from './style'
import './index.less'

function AttrBox ({ isShow, product, sku, changeShow }) {
	
	const [skuList, setSkuList] = useState({})
	const [bugCount, setBuyCount] = useState(1)
	const [skuData, setSkuData] = useState({})
	const [attrName, setAttrName] = useState("")
	
	// 获取SKU ID
	useEffect(() => {
		if (Object.keys(skuList).length === sku.length && Object.values(skuList)[0]) {
			const _skuList = Object.values(skuList)
			const _sku = _skuList[0].sku.reduce((arr, current) => {
				console.log(current, '-=-=-=-=-==')
				if(current.id === _skuList[1].id){
					arr.push(current)
				}
				return arr
			}, [])
			setAttrName(`${_skuList[0].name},${_skuList[1].name}`)
			setSkuData({
				stock: _sku[0].stock,
				price: _sku[0].price,
				skuId: _sku[0].sku_id,
			})
			console.log('可以获取SKU id了ssssssss', skuList, sku, _sku)
		}
	}, [skuList])
	
	function CancelMove (e) {
		e.preventDefault()
		return false
	}
	
	const Attr = (item) => useMemo(() => {
		item.attr.map(_sku => {
			return (
			  <span onClick={ () => SkuSet(item, _sku) }
			        className={ (skuList[item.id] && skuList[item.id].id && skuList[item.id].id === _sku.id) ? 'selector-nav-active' : 'selector-nav' }
			        key={ _sku.id }>{ _sku.name }</span>
			)
		})
	}, [skuList])
	
	function HandleProductNumber (type) {
		if (type === 'increase') {
			setBuyCount(bugCount + 1)
		} else {
			const _number = bugCount - 1
			setBuyCount(_number < 1 ? 1 : _number)
		}
	}
	
	function SkuSet (type, _sku) {
		setAttrName(`${_sku.name}`)
		setSkuList(() => { return {...skuList, [type.id]: _sku }})
	}
	
	return isShow ? (
	  <div className="attr-box">
		  <div className="mask" onClick={ () => changeShow(false) }/>
		  
		  <div className="container">
			  
			  <BoxStyle>
				  <div className="icon">
					  <img src={ product.thumb } alt=""/>
				  </div>
				  <div className="info">
					  <div className="price">￥{ skuData.price }</div>
					  <div className="stock">库存 { skuData.stock } 件</div>
					  <div className="attr">已选： { attrName }</div>
				  </div>
			  </BoxStyle>
			  
			  <AttrScrollStyle>
				  {
					  sku.map(item => {
						  return (
							<div className="attr-item" key={ item.id }>
								<div className="header">
									<span>{ item.name }</span>
								</div>
								<div className="selector">
									{
										item.attr.map(_sku => {
											return (
											  <span onClick={ () => SkuSet(item, _sku) }
											        className={ (skuList[item.id] && skuList[item.id].id && skuList[item.id].id === _sku.id) ? 'selector-nav-active' : 'selector-nav' }
											        key={ _sku.id }>{ _sku.name }</span>
											)
										})
									}
								
								</div>
							</div>
						  )
					  })
				  }
				  
				  <div className="calculator">
					  <span>购买数量</span>
					  <div className="count">
						  <div className="count-button decrease-button"
						       onClick={ () => HandleProductNumber('decrease') }/>
						  <div className="count-content">{ bugCount }</div>
						  <div className="count-button increase-button"
						       onClick={ () => HandleProductNumber('increase') }/>
					  </div>
				  </div>
			  </AttrScrollStyle>
			  
			  <FooterStyle>
				  <div className="collect-button">加入购物车</div>
				  <div className="buy-button">立即购买</div>
			  </FooterStyle>
		  </div>
	  </div>
	) : ''
}

export default React.memo(AttrBox)
