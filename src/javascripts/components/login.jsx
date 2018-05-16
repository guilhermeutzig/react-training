import React, { Component } from 'react';
import axios from 'axios';

import { history } from 'react-router-dom';

const API_URL = 'http://localhost:3000';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user: '',
			password: ''
		};
	}

	componentWillMount() {
		if (window.localStorage.getItem('token')) {
			this.props.history.push('/');
		}
	}

	login() {
		axios.get(API_URL + '/users').then(response => {
			const users = response.data;
			for (let index = 0; index < users.length; index++) {
				if (
					this.state.user === users[index].user &&
					this.state.password === users[index].password
				) {
					window.localStorage.setItem('user', this.state.user);
					window.localStorage.setItem('token', '312hjg312ytfey2t1fe12312hg3hj');
					this.props.history.push('/');
				} else {
					alert('Invalid user or password');
				}
			}
		});
	}

	handleStatePass(e) {
		const value = e.target.value;
		this.setState({ password: value });
	}

	handleStateUser(e) {
		const value = e.target.value;
		this.setState({ user: value });
	}

	render() {
		const { user, password } = this.state;
		return (
			<div className="login">
				<div className="container">
					<form className="login-form">
						<input
							type="text"
							placeholder="User"
							value={user}
							onChange={e => {
								this.handleStateUser(e);
							}}
						/>
						<input
							type="password"
							placeholder="Password"
							value={password}
							onChange={e => {
								this.handleStatePass(e);
							}}
						/>
						<button
							onClick={e => {
								e.preventDefault();
								this.login();
							}}
						>
							Login
						</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Login;
