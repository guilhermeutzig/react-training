import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Styles from 'styles/app';
import Routes from 'javascripts/routes';
import Header from 'javascripts/components/header';

ReactDOM.render(
	<BrowserRouter>
		<div className="content-wrapper">
			<Header />
			<Routes />
		</div>
	</BrowserRouter>,
	document.getElementById('app')
);
