import Mock from 'mockjs'

const Random = Mock.Random

const designSeller = [
	'https://bkqwmall.oss-cn-shenzhen.aliyuncs.com/images/seller_logo/c5d1096cbe099475ef738d30ecfd2790.jpg',
	'https://bkqwmall.oss-cn-shenzhen.aliyuncs.com/images/seller_logo/2c261bff0fe75a1be80ac6c844ac6c6d.JPG',
	'https://bkqwmall.oss-cn-shenzhen.aliyuncs.com/images/seller_logo/f54c526731592a6fc9a2e1b602dca2ea.jpg',
	'https://bkqwmall.oss-cn-shenzhen.aliyuncs.com/images/seller_logo/4ca111de17bf3f7c68e2cba5ea5a6551.JPG',
	'https://bkqwmall.oss-cn-shenzhen.aliyuncs.com/images/seller_logo/8b9547e81a4f27ca1957ba646fae724e.jpg',
	'https://bkqwmall.oss-cn-shenzhen.aliyuncs.com/images/seller_logo/4ecbbaf47a50ced2824b91e71960b6bb.jpg',
	'https://bkqwmall.oss-cn-shenzhen.aliyuncs.com/images/seller_logo/b21ab61fa7160819eb0fb6f1aea63579.JPG',
	'https://bkqwmall.oss-cn-shenzhen.aliyuncs.com/images/seller_logo/72a32a7b3ecbc1d5eda16a54dea3cbfb.JPG',
	'https://bkqwmall.oss-cn-shenzhen.aliyuncs.com/images/seller_logo/a0cde6bc225a0f2b47ed4f143c8e63ab.JPG',
]

const residenceList = [
	'https://bkqwmall.oss-cn-shenzhen.aliyuncs.com/images/seller_logo/6ca4799d9f5571e8c630a31f132e5b6b.JPG',
	'https://bkqwmall.oss-cn-shenzhen.aliyuncs.com/images/seller_logo/6d8a8a3f2a5d7ef68f0e960f28df3abd.jpg',
	'https://bkqwmall.oss-cn-shenzhen.aliyuncs.com/images/seller_logo/e7f814759b41c6d8349fc653c1503ec0.jpg',
	'https://bkqwmall.oss-cn-shenzhen.aliyuncs.com/images/seller_logo/3b68a7076bc07ed40f4d0a208c707c90.JPG',
	'https://bkqwmall.oss-cn-shenzhen.aliyuncs.com/images/seller_logo/8243784b6372b146c2910564e384c2f7.jpg',
	'https://bkqwmall.oss-cn-shenzhen.aliyuncs.com/images/seller_logo/e8119e531b074c3624779153ba1a7a02.jpg',
	'https://bkqwmall.oss-cn-shenzhen.aliyuncs.com/images/seller_logo/3e9cc0b5563a9f5d5bdb11dfca8721c5.jpg',
	'https://bkqwmall.oss-cn-shenzhen.aliyuncs.com/images/seller_logo/d73c0874e5e18c23ce2ef4dc6b9f2f11.jpg',
	'https://bkqwmall.oss-cn-shenzhen.aliyuncs.com/images/seller_logo/39a1fdc1e4136570d743ba631111b410.jpg',
]

const design = {
	id: 291,
	name: '装修设计',
	desc: '专业商家为您提供创意房屋装修设计方案',
	icon: 'https://www.xiehome.com/m_three_v/images/home-module-design.png',
	list: designSeller
}

const residence = {
	id: 231,
	name: '家居建材',
	desc: '海量本土商家为您提供优质家居建材',
	icon: 'https://www.xiehome.com/m_three_v/images/home-module-material.png',
	list: residenceList
}
//hjb@8kqw.com
//kuki520Y
const banner = [{
	id: 123,
	imageUrl: 'https://bkqwmall.oss-cn-shenzhen.aliyuncs.com/images/2020-04-21/a1744c27fd217dd5e8349928bfd65b2f.jpg',
}, {
	id: 253,
	imageUrl: 'https://bkqwmall.oss-cn-shenzhen.aliyuncs.com/images/2020-03-30/a94f1e32c1c00bc8a4a5df442dee3910.jpg',
}, {
	id: 23,
	imageUrl: 'https://bkqwmall.oss-cn-shenzhen.aliyuncs.com/images/2020-03-30/acf8e3effc4ae3f891f950f79ca4b3d6.jpg',
}, {
	id: 69,
	imageUrl: 'https://bkqwmall.oss-cn-shenzhen.aliyuncs.com/images/2020-03-30/014ea3f437fa458e0995ba693661ad88.jpg',
}, {
	id: 276,
	imageUrl: 'https://bkqwmall.oss-cn-shenzhen.aliyuncs.com/images/2020-01-16/85f342f479ae224ba6411f95f9fbad2c.jpg',
}]
const menu = [{
	title: '毛坯房',
	list: [{
		id: 1,
		icon: 'https://image.billson.club/bkqw/mall/menu/menu-A.png',
		title: '装企'
	}, {
		id: 2,
		icon: 'https://image.billson.club/bkqw/mall/menu/menu-B.png',
		title: '定制'
	}, {
		id: 3,
		icon: 'https://image.billson.club/bkqw/mall/menu/menu-C.png',
		title: '瓷砖'
	}, {
		id: 4,
		icon: 'https://image.billson.club/bkqw/mall/menu/menu-D.png',
		title: '卫浴'
	}, {
		id: 5,
		icon: 'https://image.billson.club/bkqw/mall/menu/menu-E.png',
		title: '门窗'
	}]
}, {
	title: '精装房',
	list: [{
		id: 6,
		icon: 'https://image.billson.club/bkqw/mall/menu/menu-F.png',
		title: '家具'
	}, {
		id: 7,
		icon: 'https://image.billson.club/bkqw/mall/menu/menu-G.png',
		title: '家电'
	}, {
		id: 8,
		icon: 'https://image.billson.club/bkqw/mall/menu/menu-H.png',
		title: '窗帘'
	}, {
		id: 9,
		icon: 'https://image.billson.club/bkqw/mall/menu/menu-I.png',
		title: '床垫'
	}, {
		id: 10,
		icon: 'https://image.billson.club/bkqw/mall/menu/menu-J.png',
		title: '灯饰'
	}]
}]

const API = Mock.mock('/mall/v1/home',
  'get',
  () => {
	const response = {
		banner,
		menu,
		design,
		residence,
	}
	  return {
		  data: response,
		  status: 20000,
		  message: '请求成功',
		  timestamp: new Date().getTime()
	  }
  }
)

export default API
