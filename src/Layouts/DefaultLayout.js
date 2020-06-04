import React from "react";
import { renderRoutes } from "react-router-config";

const Layout = ({ route }) => {
	console.log(route ,'------!!!-------')
	return (
	  <div>{renderRoutes(route.routes)}</div>
	)
};

export default Layout;
