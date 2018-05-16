import React, { Component } from 'react';

export default class Modal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false
		};
	}

	closeModal() {
		this.setState({ open: false });
	}

	openModal() {
		this.setState({ open: true });
	}

	render() {
		return (
			<div className={`modal ${this.state.open ? 'open' : ''}`}>
				<div
					className="background"
					onClick={() => {
						this.closeModal();
					}}
				/>
				<div className="content">{this.props.children}</div>
			</div>
		);
	}
}
