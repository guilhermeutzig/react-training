import React, { Component } from 'react';

import Modal from 'javascripts/containers/modal';

export default class CallToAction extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { title, img } = this.props;

		return (
			<div className="call-to-action">
				<div
					className="cta-block"
					onClick={() => {
						this.child.openModal();
					}}
				>
					<img src={img} />
					<div className="content">{title}</div>
					<div className="layer">
						<span>+</span>
					</div>
				</div>
				<Modal
					ref={instance => {
						this.child = instance;
					}}
				>
					<img src={img} />
				</Modal>
			</div>
		);
	}
}
