import React, { lazy, Suspense } from 'react'
import { Redirect } from 'react-router-dom'
import TabBarLayout from '../Layouts/TabBarLayout'
import AppLayout from '../Layouts/AppLayout'

const GetView = Component => props => (
  <Suspense fallback={ null }>
	  <Component { ...props } />
  </Suspense>
)

const HomeComponent = lazy(() => import('../View/Tabbar/Home'))
const ClassifyComponent = lazy(() => import('../View/Tabbar/Classify'))
const SellerComponent = lazy(() => import('../View/Tabbar/Seller'))
const CartComponent = lazy(() => import('../View/Tabbar/Cart'))
const PersonalComponent = lazy(() => import('../View/Tabbar/Personal'))
const ProductDetailComponent = lazy(() => import('../View/Product/ProductDetail'))
const ProductListComponent = lazy(() => import('../View/Product/ProductList'))


export default [
	{
		component: AppLayout,
		path: '/',
		routes: [{
			path: '/product/detail/:id',
			exact: true,
			component: GetView(ProductDetailComponent),
		}, {
			path: '/products',
			exact: true,
			component: GetView(ProductListComponent)
		}, {
			path: '/',
			component: TabBarLayout,
			routes: [{
				path: '/',
				exact: true,
				render: () => <Redirect to="/home"/>,
			},{
				path: '/home',
				component: GetView(HomeComponent),
			}, {
				path: '/classify',
				component: GetView(ClassifyComponent),
			}, {
				path: '/seller',
				component: GetView(SellerComponent),
			}, {
				path: '/cart',
				component: GetView(CartComponent),
			}, {
				path: '/personal',
				component: GetView(PersonalComponent),
			}]
		// }, {
		// 	path: '/',
		// 	exact: true,
		// 	render: () => <Redirect to="/home"/>,
		}]
	}
]

//  嵌套路由
// {
// 	path: '/fen',
// 	  component: FLayout,
//   routes: [{
// 	path: '/fen/a',
// 	exact: true,
// 	component: GetView(A),
// }, {
// 	path: '/fen/b',
// 	exact: true,
// 	component: GetView(B),
// }]
// }
