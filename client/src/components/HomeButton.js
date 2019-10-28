import React from 'react';
import { NavLink } from 'react-router-dom';
import homeIcon from '../homeIcon.png';

export const HomeButton = () => {
	return (
		<div>
			<NavLink to="/">
				<img src={homeIcon} className="MYtineraryLogo" alt="homeIcon" />
			</NavLink>
		</div>
	);
};

export default HomeButton;
