import React, { Component } from 'react';

export default class Banner extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { title, description } = this.props;
		return (
			<div className="banner">
				<div className="container">
					<h1>{title}</h1>
					{description && <p>{description}</p>}
					<button
						onClick={() => {
							this.setState({ title: 'RCA Digital' });
						}}
					>
						View more
					</button>
					<button>Video tour</button>
				</div>
			</div>
		);
	}
}
