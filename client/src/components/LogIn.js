import { HomeButton } from './HomeButton';
import { connect } from 'react-redux';
import { LogIn, userLogout } from '../redux/actions/authActions';
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
		this.props.Log(this.state);
	};

	handleClick = (e) => {
		e.preventDefault();
		localStorage.removeItem('auth-token');
		this.props.logOutUser();
	};
	render() {
		const { error } = this.props;
		console.log(this.state);
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
							<div className="red-text center">{error ? <p>{error}</p> : null}</div>
						</div>
					</form>
					{<button onClick={this.handleClick}>Log Out</button>}
					<div className="footer-container">
						<HomeButton />
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		error: state.authReducer.error,
		users: state.authReducer.users
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		Log: (users) => dispatch(LogIn(users)),
		logOutUser: (users) => dispatch(userLogout(users))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
