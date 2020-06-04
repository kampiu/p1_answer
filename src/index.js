import React from 'react';
import ReactDOM from 'react-dom';
import 'Assets/style/common.less'
import App from 'View/App.js';
import * as serviceWorker from 'serviceWorker';
import Service from 'Service'

// import Mocks from '@/Mock'
require("./Mock")

React.$api = Service
ReactDOM.render(
  <App />,
  document.getElementById('app')
);
// ReactDOM.render(
//   <React.StrictMode>
//       <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
