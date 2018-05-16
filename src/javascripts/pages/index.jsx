import React, { Component } from 'react';
import axios from 'axios';
import { history } from 'react-router-dom';

import Banner from 'javascripts/components/banner';
import Section from 'javascripts/containers/section';
import Social from 'javascripts/containers/social';
import Icon from 'javascripts/components/icon';
import Profile from 'javascripts/components/profile';

import { profiles, icons } from 'javascripts/constants/general';

export default class IndexPage extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		if (!window.localStorage.getItem('token')) {
			window.localStorage.clear();
			this.props.history.push('/login');
		}
	}

	render() {
		return (
			<div className="index-page">
				<Banner title="Main banner" description="Lorem ipsum dolor amet" />
				<Section title="Social">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum
					</p>
					<Social>
						{icons.map((item, i) => {
							return <Icon link={item.link} icon={item.icon} key={i} />;
						})}
					</Social>
				</Section>
				<Section title="Team">
					<div className="row">
						{profiles.map((item, i) => {
							return (
								<div className="col-md-3">
									<Profile
										img={item.img}
										name={item.name}
										job={item.job}
										key={i}
									/>
								</div>
							);
						})}
					</div>
				</Section>
			</div>
		);
	}
}
