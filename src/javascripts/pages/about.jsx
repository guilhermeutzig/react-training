import React, { Component } from 'react';

import Section from 'javascripts/containers/section';
import CallToAction from 'javascripts/components/call-to-action';

import { ctas } from 'javascripts/constants/general';

export default class About extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showPassword: false
		};
	}

	handlePassword() {
		this.setState({ showPassword: !this.state.showPassword });
	}

	render() {
		return (
			<div className="about-page">
				<Section title="About us" color="dark">
					<div className="row">
						{ctas.map((item, i) => {
							return (
								<div className="col-md-4" key={i}>
									<CallToAction img={item.img} title={item.title} />
								</div>
							);
						})}
					</div>
				</Section>
				<Section title="Contact us">
					<form>
						<input type="text" placeholder="E-mail" />
						<label>
							Deseja inserir uma senha?
							<input
								type="checkbox"
								onClick={() => {
									this.handlePassword();
								}}
							/>
						</label>
						<div className={this.state.showPassword ? '' : 'hide'}>
							<input type="text" placeholder="Senha" />
						</div>
						<button type="submit">Enviar</button>
					</form>
				</Section>
			</div>
		);
	}
}
