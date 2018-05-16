import React, { Component } from 'react';

import Logo from 'assets/logo.png';

export default class Header extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<header>
				<div className="container">
					<img src={Logo} />
					{window.localStorage.getItem('token') && (
						<ul>
							<li>
								<a href="#">HOME</a>
							</li>
							<li>
								<a href="#">ABOUT</a>
							</li>
							<li>
								<a href="#">{window.localStorage.getItem('user')}</a>
							</li>
							<li>
								<a
									href="#"
									onClick={() => {
										window.localStorage.clear();
										window.location = '/login';
									}}
								>
									Logout
								</a>
							</li>
						</ul>
					)}
				</div>
			</header>
		);
	}
}
