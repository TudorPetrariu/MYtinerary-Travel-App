import React from 'react';
import MYtineraryLogo from '../MYtineraryLogo.png';
import circledRightarrow from '../circledRightarrow.png';
import { NavLink } from 'react-router-dom';
import { HomeButton } from './HomeButton';

export class LandingPage extends React.Component {
	render() {
		return (
			<div className="app">
				<div className="header-container">
					<ul>
						<NavLink to="/" className="btn btn-floating orange lighten-1">
							NN
						</NavLink>
					</ul>
					<img className="MYtineraryLogotitle" src={MYtineraryLogo} alt="ItineraryLogo" />
					<p className="itinerarydescription">
						Find your perfect trip, designed by insiders who know and love their cities.
					</p>
				</div>

				<div className="mid-container">
					<NavLink to="/Cities">
						<p className="itinerarydescription">Start Browsing</p>
						<img src={circledRightarrow} className="MYtineraryLogo" alt="RightArrow" />
					</NavLink>
				</div>

				<div className="Login">
					<NavLink to="./SignUp">SignUp</NavLink>
					<NavLink to="./LogIn">LogIn</NavLink>
				</div>

				<div className="footer-container">
					<p className="itinerarydescription">Want to build your own MYtinerary ?</p>

					<HomeButton />
				</div>
			</div>
		);
	}
}
export default LandingPage;
