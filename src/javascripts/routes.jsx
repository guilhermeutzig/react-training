import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Index from 'javascripts/pages/index';
import Login from 'javascripts/components/Login';

export default props => (
	<Switch>
		<Route exact path="/" component={Index} />
		<Route exact path="/login" component={Login} />
	</Switch>
);
