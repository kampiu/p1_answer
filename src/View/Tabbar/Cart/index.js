import React, { useState } from 'react'
import { CarStyle, CarMain, CarFooter, CarItem } from './style'

function Cart (props) {
	// console.log(props, '--props-->>')
	
	return (
	  <CarStyle>
		  <div className="header">
			  <span>购物车</span>
			  <div className="setting-button"/>
		  </div>
		  
		  <CarMain>
			  <CarItem>
				  <div className="product-header">
					  <input type="checkbox"/>
					  <div className="seller-icon"/>
					  <div className="seller-name">阿波罗</div>
					  <div className="seller-more"/>
				  </div>
				  <div className="product-content">
					  <label>
						  <input type="checkbox" className="cart-item-product-checkbox" data-id="287"/>
					  </label>
					  <div className="icon">
						  <img
						    src="https://bkqwmall.oss-cn-shenzhen.aliyuncs.com/images/2019-01-21/3dd2e9135a873449ad3b5ac0d7653b23.jpg"
						    alt=""/>
					  </div>
					  <div className="box">
						  <div className="name">阿波罗 组合浴室柜卫浴马桶卫生间花洒镜龙头家用套餐</div>
						  <div className="desc">
							  <span>规格,浴室柜马桶花洒龙头套餐</span>
						  </div>
						  <div className="price">
							  <span>￥208</span>
							  <div className="count">
								  <div className="count-button decrease-button" />
								  <div className="count-content">1</div>
								  <div className="count-button increase-button" />
							  </div>
						  </div>
					  </div>
				  </div>
			  </CarItem>
		  </CarMain>
		  
		  <CarFooter>
			  <div className="all-checkbox">
				  <input type="checkbox"/>
				  全选
			  </div>
			  <div className="price">合计: <span>￥0</span></div>
			  <div className="button">结算 <span>(0)</span></div>
		  </CarFooter>
	  </CarStyle>
	)
	
}

export default Cart

