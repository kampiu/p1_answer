import React  from 'react'
import { SellerListStyle, ProductItemStyle } from './style'

function SellerList (props) {
	
	return (
		<SellerListStyle>
			<div className="seller-header">
				<div className="icon">
					<img src="https://bkqwmall.oss-cn-shenzhen.aliyuncs.com/images/seller_logo/3292906fa61021d85d56eae4ed4531ee.jpg" alt=""/>
				</div>
				<div className="name">东莞光大证券有限公司</div>
				<div className="button">进店</div>
			</div>
			<div className="header">
				门店推荐
				<span>全部宝贝</span>
			</div>
			<div className="container">
				<ProductItemStyle>
					<div className="icon">
						<img src="https://bkqwmall.oss-cn-shenzhen.aliyuncs.com/images/2018-12-27/3e180232d2c3ccb89cebff4224d14ac8.jpg" alt=""/>
					</div>
					<div className="name">名门静音门锁  正品欧式古典室内房门锁卧室门锁名门静音门锁MV4060</div>
					<div className="price">￥489.00</div>
				</ProductItemStyle>
			</div>
		</SellerListStyle>
	)
}

export default React.memo(SellerList)
