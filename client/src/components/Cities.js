import React, { Component } from 'react'
import { HomeButton } from './HomeButton'

class MyCities extends Component {


    state = {
        cities: []
    }

    async componentDidMount() {

        let fetchedCities = await fetch('/cities', {
            method: "GET",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })

            .then(res => res.json())
            .then(json => json.data)

        this.setState({
            cities: fetchedCities
        })
        console.log(this.state.cities)

    }


    render() {
        const { cities } = this.state;
        const citiesList = cities.length ? (cities.map(city => {
            return (
                <div key={city._id}>
                    <div>{city.name}</div>
                    <div>{city.country}</div>
                    <img src={city.images} alt="cityimages"></img>

                </div>
            )
        })) : (
                <div>Loading cities</div>
            )
        return (
            <div className="app">
                <div className="header-container">
                    <p className="itinerarydescription">Find your perfect city</p>
                </div>
                <div className="mid-container" >
                    <p className="itinerarydescription" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quas commodi tenetur esse nemo nesciunt, corporis praesentium deserunt. Modi facilis corrupti assumenda ipsum libero neque veritatis exercitationem voluptatem quas possimus?</p>
                </div>
                {citiesList}
                <div className="footer-container">
                    <p className="itinerarydescription">Search</p>

                    <HomeButton />

                </div>
            </div>

        )
    }
}

export default MyCities;
