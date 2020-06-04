const list =[{
	id: 1,
	name: "全部订单",
	icon: "https://www.xiehome.com/m_three_v/images/dingdan.png"
},{
	id: 2,
	count: 10,
	name: "待付款",
	icon: "https://www.xiehome.com/m_three_v/images/quanbao.png"
},{
	id: 3,
	name: "待发货",
	icon: "https://www.xiehome.com/m_three_v/images/fahuo.png"
},{
	id: 4,
	name: "待收货",
	icon: "https://www.xiehome.com/m_three_v/images/shouhuo.png"
},{
	id: 5,
	name: "退款/售后",
	icon: "https://www.xiehome.com/m_three_v/images/tunkuo.png"
}]

export default {
	tabMenu: [{
		title: "我的订单",
		list
	}, {
		title: "积分商城",
		list,
	}],
	menu: [{
		name: "我的收藏",
		icon: "https://www.xiehome.com/m_three_v/images/wode.png"
	},{
		name: "我的拼团",
		icon: "https://www.xiehome.com/m_three_v/images/pingtuang.png"
	},{
		name: "我的优惠券",
		icon: "https://www.xiehome.com/m_three_v/images/my_youhui.png"
	}]
}
