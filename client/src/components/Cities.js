import React, { Component } from 'react'
import { HomeButton } from './HomeButton'
import { connect } from 'react-redux';
import { fetchCities } from "../redux/actions/cityAction"




class MyCities extends Component {




    componentDidMount() {
        this.props.getCities()
    }

    render() {
        console.log(this.props)
        const { cities } = this.props
        const citiesList = cities.length ? (cities.map(city => {

            return (
                <div key={city._id}>
                    <li> {city.name} </li>
                    <img src={city.images} alt="cityimages"></img>
                </div>
            )
        })) : (
                <div>Fetching Cities..</div>
            )

        return (
            <div>

                <div >
                    {citiesList}
                </div>
                <div className="footer-container">
                    <HomeButton />
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {

        cities: state.cities
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCities: () => dispatch(fetchCities())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(MyCities);

