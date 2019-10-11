import React from 'react'
import { HomeButton } from './HomeButton'


const LogIn = () => {

    return (
        <div className="app">
            <div className="header-container">
                <p className="itinerarydescription">LogIn to your account</p>
            </div>

            <div className="mid-container" >
                <p className="itinerarydescription" >Enter mail and password</p>
            </div>





            <div className="footer-container">
                <p className="itinerarydescription">LogIn</p>

                <HomeButton />

            </div>
        </div>
    )
}
export default LogIn;