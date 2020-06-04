import React from 'react'
import { renderRoutes } from 'react-router-config'
import TabBar from '@/Components/Common/TabBar'


function TabBarLayout ({ route, location }) {
	return (
	  <div className="tabBar-layout">
		  <div className="tabBar-view">
			  { renderRoutes(route.routes) }
		  </div>
		  {/*<TabBar routeName={ location.pathname }/>*/}
	  </div>
	)
}

export default TabBarLayout
