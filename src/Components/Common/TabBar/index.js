import React from 'react'
import {
	Link,
	NavLink
} from 'react-router-dom'
import { TabBarStyle } from './style'

function TabBar ({ routeName }) {
	
	const iconList = [{
		name: 'Home',
		title: '首页',
		path: '/home',
		icon: 'https://lib.billson.club/images/tabbar_home_icon.png',
		activeIcon: 'https://lib.billson.club/images/tabbar_home_icon_active.png',
	}, {
		name: 'Classify',
		title: '分类',
		path: '/classify',
		icon: 'https://lib.billson.club/images/tabbar_cate_icon.png',
		activeIcon: 'https://lib.billson.club/images/tabbar_cate_icon_active.png',
	}, {
		name: 'Seller',
		title: '商家',
		path: '/seller',
		icon: 'https://lib.billson.club/images/tabbar_seller_icon.png',
		activeIcon: 'https://lib.billson.club/images/tabbar_seller_icon_active.png',
	}, {
		title: '购物车',
		name: 'cart',
		path: '/cart',
		icon: 'https://lib.billson.club/images/tabbar_cart_icon.png',
		activeIcon: 'https://lib.billson.club/images/tabbar_cart_icon_active.png',
	}, {
		name: 'Personal',
		title: '个人',
		path: '/personal',
		icon: 'https://lib.billson.club/images/tabbar_personal_icon.png',
		activeIcon: 'https://lib.billson.club/images/tabbar_personal_icon_active.png',
	}]
	
	return (
	  <TabBarStyle>
		  {
			  iconList.map(item => {
				  return (
					<Link to={ item.path } className="tab-nav" key={ item.name }>
						<img
						  src={ item.path === routeName ? item.activeIcon : item.icon } alt=""/>
						<span>{ item.title }</span>
					</Link>
				  )
			  })
		  }
	  </TabBarStyle>
	)
}

export default TabBar
