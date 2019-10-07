import React from 'react'
import HomeButton from './HomeButton'

const SignUp = () => {
    return (
        <div className="app">
            <div className="header-container">
                <p className="itinerarydescription">SIgn up here.</p>
            </div>

            <div className="mid-container" >
                <p className="itinerarydescription" >Sign up form</p>
            </div>





            <div className="footer-container">
                <p className="itinerarydescription">Submit ?</p>

                <HomeButton />

            </div>
        </div>
    )
}

export default SignUp;