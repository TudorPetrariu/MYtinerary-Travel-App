import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  fetchSchema,
  getSelectedItinerary
} from "../redux/actions/schemaAction";
import { connect } from "react-redux";
import { HomeButton } from "./HomeButton";

class Itynerary extends Component {
  componentDidMount() {
    let { name } = this.props.match.params;
    this.props.getSchema(name);
  }

  showDetails(schema) {
    this.props.selectSchema(schema);
  }

  render() {
    const { schema } = this.props;

    const ItyneraryList = schema.length ? (
      schema.map(schem => {
        return (
          <div key={schem._id} className="row">
            <div className="card center">
              <span id="ityneraryTitle" className="card-title">
                {schem.title}
              </span>

              <div className="card-image" id="ityneraryimg">
                <img src={schem.profilePic} alt="schemaImg" />

                <a href="#" className="halfway-fab btn-floating orange pulse">
                  <i className="material-icons">favorite</i>
                </a>
              </div>
              <div className="card-content">
                <p className="flow-text">{schem.hashtag}</p>
                <p className="flow-text">{schem.duration}.</p>
                <p className="flow-text">Rating: {schem.rating}.</p>
                <p className="flow-text">Price: {schem.price} euros. </p>
              </div>
              <div className="card-action">
                <div className="center" id="moreDetails">
                  <Link
                    to="/activities"
                    onClick={() => this.showDetails(schem)}
                  >
                    More Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">Loading...</div>
    );
    return (
      <div>
        <h5 className="center  z-depth-1"> Find here your best activities</h5>
        <div>{ItyneraryList}</div>
        <div className="mid-container" />
        <div className="footer-container">
          <HomeButton />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    schema: state.schemaReducer.schema,
    loading: state.schemaReducer.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSchema: name => dispatch(fetchSchema(name)),
    selectSchema: itineary => dispatch(getSelectedItinerary(itineary))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Itynerary);
