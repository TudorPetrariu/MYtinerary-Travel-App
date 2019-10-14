import React, { Component } from 'react'
import { HomeButton } from './HomeButton'
import { connect } from 'react-redux';
import { fetchCities } from "../redux/actions/cityAction"




class MyCities extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cities: '',
            word: '',
        }

        this.searchHandler = this.searchHandler.bind(this)
    }

    searchHandler = (e) => {
        e.preventDefault()
        this.setState({
            word: e.target.value
        })

    }

    componentDidMount() {
        this.props.getCities()
    }

    render() {

        console.log(this.props)
        const { cities } = this.props
        const { word } = this.state
        const citiesList = cities.length ? (cities.filter(search(word)).map(city => {

            return (

                <div key={city._id} className="card center" >
                    <span > {city.name}  </span>
                    <img src={city.images} alt="cityimages" ></img>
                </div>
            )
        })) : (
                <div className="center">Fetching Cities..</div>
            )

        return (
            <div>
                <form>
                    <label htmlFor="SearchBar" >Search your city</label>
                    <input type="text" id="SearchBar" onChange={this.searchHandler} values={word}></input>
                </form>

                <div className=" container ">
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

        cities: state.cities,
        word: ''


    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        getCities: () => dispatch(fetchCities())
    }
}
function search(word) {
    return (x) => {
        return x.name.toLowerCase().includes(word.toLowerCase()) || !word;
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MyCities);

