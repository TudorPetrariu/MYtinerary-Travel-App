import React from 'react'
import { HomeButton } from './HomeButton'

const Cities = () => {

    return (
        <div className="app">
            <div className="header-container">
                <p className="itinerarydescription">Find your perfect city</p>
            </div>

            <div className="mid-container" >
                <p className="itinerarydescription" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quas commodi tenetur esse nemo nesciunt, corporis praesentium deserunt. Modi facilis corrupti assumenda ipsum libero neque veritatis exercitationem voluptatem quas possimus?</p>
            </div>





            <div className="footer-container">
                <p className="itinerarydescription">Search</p>

                <HomeButton />

            </div>
        </div>
    )
}
export default Cities;