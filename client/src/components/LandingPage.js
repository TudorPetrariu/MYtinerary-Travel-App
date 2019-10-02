import React from 'react';
import MYtineraryLogo from '../MYtineraryLogo.png'
import homeIcon from '../homeIcon.png'
import circledRightarrow from '../circledRightarrow.png'
import { NavLink } from 'react-router-dom';


export class LandingPage extends React.Component {

    render() {
        return (
            <div className="app">
                <div className="header-container">
                    <img className="MYtineraryLogo" src={MYtineraryLogo} alt="ItineraryLogo" />
                    <p className="itinerarydescription">Find your perfect trip, designed by insiders who know and love their cities.</p>
                </div>

                <div className="mid-container" >
                    <NavLink to="/Cities">
                        <p className="itinerarydescription" >Start Browsing</p>
                        <img src={circledRightarrow} alt="RightArrow" />
                    </NavLink>
                </div>



                <div className="Login">
                    <NavLink to="./SignUp">SignUp</NavLink>
                    <NavLink to="./LogIn">LogIn</NavLink>

                </div>

                <div className="footer-container">
                    <p className="itinerarydescription">Want to build your own MYtinerary ?</p>

                    <footer>
                        <img src={homeIcon} alt="homeIcon" />
                    </footer>
                </div>
            </div>

        );
    }
}
export default LandingPage;
