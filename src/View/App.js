import React, { Component, Fragment } from 'react'
import routers from '@/Router'
import { renderRoutes } from "react-router-config";
import { Provider } from 'react-redux'
import { HashRouter } from "react-router-dom";
import store from '@/Store'

function App () {
	return (
	  
	  <Provider store={store}>
		  <HashRouter>
			  {renderRoutes(routers)}
		  </HashRouter>
	  </Provider>
	  // <Fragment>
		//   <div className="main-layout">
		// 	  <Switch>
		// 		  {
		// 			  routers.map(route => {
		// 				  return (
		// 					<Route
		// 					  key={ route.url }
		// 					  path={ route.url }
		// 					  component={ route.component }/>
		// 				  )
		// 			  })
		// 		  }
		// 		  <Redirect exact from="/" to={ routers[0].url }/>
		// 		  {/* <Redirect to = '/all'/> */ }
		// 		  {/* 如果找不到页面 则去 4040页面 */ }
		// 	  </Switch>
		//
		//   </div>
	  // </Fragment>
	)
}

// class App extends Component {
// 	constructor (props) {
// 		super(props)
//
// 	}
//
// 	componentWillMount () {
//
// 	}
//
// 	componentDidMount () {
//
// 	}
//
// 	componentWillReceiveProps (newProps) {
//
// 	}
//
// 	shouldComponentUpdate (newProps, newState) {
// 		return true
// 	}
//
// 	componentWillUpdate (nextProps, nextState) {
//
// 	}
//
// 	componentDidUpdate (prevProps, prevState) {
//
// 	}
//
// 	componentWillUnmount () {
//
// 	}
//
// 	render () {
// 		return (
// 		  <Fragment>
// 			  <div className="main-layout">
// 				  <Switch>
// 					  {
// 						  routers.map(route => {
// 							  return (
// 								<Route
// 								  key={ route.url }
// 								  path={ route.url }
// 								  component={ route.component }/>
// 							  )
// 						  })
// 					  }
// 					  <Redirect exact from="/" to={ routers[0].url }/>
// 					  {/* <Redirect to = '/all'/> */ }
// 					  {/* 如果找不到页面 则去 4040页面 */ }
// 				  </Switch>
//
// 				  <Link to="/home">Home</Link>
// 				  <Link to="/article">Article</Link>
//
// 				  <div className="header-box">
// 					  <span>专题</span>
// 				  </div>
//
// 				  <div className="header-box">
// 					  <span>笔记</span>
// 				  </div>
// 				  <div className="hot-list">
//
// 				  </div>
//
// 			  </div>
// 		  </Fragment>
// 		)
// 	}
// }
//
export default App

// function App() {
//
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


