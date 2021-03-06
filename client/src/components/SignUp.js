import { HomeButton } from './HomeButton';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { CreateAccount } from '../redux/actions/authActions';

class SignUp extends Component {
	state = {
		email: '',
		password: '',
		firstName: '',
		lastName: ''
	};

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.createUser(this.state);
	};
	render() {
		const { error } = this.props;
		console.log(this.state);
		return (
			<div className="app">
				<div className="container">
					<form onSubmit={this.handleSubmit} className="white ">
						<h5 className="grey-text text-darken-3 ">Sign Up</h5>
						<div className="input-field ">
							<label htmlFor="email">Email</label>
							<input type="email" id="email" onChange={this.handleChange} />
							<div className="red-text ">{error ? <p>{error}</p> : null}</div>
						</div>
						<div className="input-field">
							<label htmlFor="password">Password</label>
							<input type="password" id="password" onChange={this.handleChange} />
						</div>
						<div className="input-field">
							<label htmlFor="firstName">First Name</label>
							<input type="text" id="firstName" onChange={this.handleChange} />
						</div>
						<div className="input-field">
							<label htmlFor="lastName">Last Name</label>
							<input type="text" id="lastName" onChange={this.handleChange} />
						</div>
						<div className="input-field">
							<button className="btn orange darken-3 z-depth-2">Sign Up</button>
						</div>
					</form>

					<div className=" footer-container">
						<HomeButton />
					</div>
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		error: state.authReducer.error
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		createUser: (users) => dispatch(CreateAccount(users))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
