import React, { Component } from 'react';

import Social from 'javascripts/containers/social';
import Icon from 'javascripts/components/icon';

export default class Profile extends Component {
	constructor(props) {
		super(props);

		this.state = {
			hover: false
		};
	}

	mouseEnter() {
		this.setState({ hover: true });
	}

	mouseLeave() {
		this.setState({ hover: false });
	}

	render() {
		const { hover } = this.state;
		return (
			<div
				className={`profile ${hover ? 'hover' : ''}`}
				onMouseEnter={() => {
					this.mouseEnter();
				}}
				onMouseLeave={() => {
					this.mouseLeave();
				}}
			>
				<div className="image">
					<img src={this.props.img} alt={this.props.name} />
					<div className="layer">
						<Social>
							<Icon link="#" icon="facebook" color="black" />
							<Icon link="#" icon="twitter" color="black" />
							<Icon link="#" icon="google" color="black" />
						</Social>
					</div>
				</div>
				<div className="content">
					<p className="name">{this.props.name}</p>
					<p className="job">{this.props.job}</p>
				</div>
			</div>
		);
	}
}
