import { HomeButton } from './HomeButton';

import React, { Component } from 'react';

class SignIn extends Component {
	state = {
		email: '',
		password: ''
	};

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
	};
	render() {
		return (
			<div className="app">
				<div className="container">
					<form onSubmit={this.handleSubmit} className="white">
						<h5 className="grey-text text-darken-3">Sign In</h5>
						<div className="input-field">
							<label htmlFor="email">Email</label>
							<input type="email" id="email" onChange={this.handleChange} />
						</div>
						<div className="input-field">
							<label htmlFor="password">Password</label>
							<input type="password" id="password" onChange={this.handleChange} />
						</div>
						<div className="input-field">
							<button className="btn  orange darken-3 z-depth-2">LogIn</button>
						</div>
					</form>

					<div className="footer-container">
						<HomeButton />
					</div>
				</div>
			</div>
		);
	}
}

export default SignIn;
