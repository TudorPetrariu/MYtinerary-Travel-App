import React, { Component } from "react";
import { HomeButton } from "./HomeButton";
import { connect } from "react-redux";
import { fetchCities } from "../redux/actions/cityAction";

import { Link } from "react-router-dom";

class MyCities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: ""
    };

    this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler = e => {
    this.setState({
      word: e.target.value
    });
  };

  componentDidMount() {
    this.props.getCities();
  }

  render() {
    const { cities } = this.props;
    const { word } = this.state;
    const citiesList = cities.length ? (
      cities.filter(search(word)).map(city => {
        return (
          <div key={city._id} className="card center ">
            <h3 className="orange"> {city.name} </h3>
            <Link to={"/" + city.name}>
              <img src={city.images} className="cityimages" alt="cityimages" />
            </Link>
          </div>
        );
      })
    ) : (
      <div className="center">Fetching Cities..</div>
    );

    return (
      <div>
        <form className="center container">
          <label htmlFor="SearchBar">Search your city</label>
          <input type="text" id="SearchBar" onChange={this.searchHandler} />
        </form>
        <div
          className=" card-content
				 "
        >
          {citiesList}
        </div>

        <div className="footer-container">
          <HomeButton />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cities: state.cityReducer.cities
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCities: () => dispatch(fetchCities())
  };
};

function search(word) {
  return x => {
    return x.name.toLowerCase().includes(word.toLowerCase()) || !word;
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(MyCities);
