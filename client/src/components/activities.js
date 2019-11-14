import React, { Component } from "react";
import { connect } from "react-redux";

class Activities extends Component {
  render() {
    let i = 0;
    const changeR = () => {
      if (i < images.length - 1) i++;
      else i = 0;
    };
    // const changeL = () => {
    //   if (i == 0) i = images.length - 1;
    //   else i--;

    // };

    const schem = this.props.itinerary;
    const images = schem.images;

    const allSchema =
      images.length > 0 ? (
        images.map(img => {
          return (
            <div key={Math.random() * 100}>
              {" "}
              <img src={img} className="activityimg" alt="img" />
            </div>
          );
        })
      ) : (
        <div className="center">Nothing yet</div>
      );

    return (
      <div>
        <div className="center">{schem.title}</div>
        <div className="center">{schem.hashtag}</div>
        <div className="card-slider">
          <div id="wrapper">{allSchema}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    itinerary: state.schemaReducer.selectedSchema
  };
};

export default connect(mapStateToProps)(Activities);
