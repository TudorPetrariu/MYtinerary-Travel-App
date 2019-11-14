import React, { Component } from "react";

export class test extends Component {
  render() {
    let array = [
      { id: 1, src: "http://placehold.it/100x100/76BD23" },
      { id: 2, src: "http://placehold.it/100x100/76BD23" },
      { id: 3, src: "http://placehold.it/100x100/76BD23" },
      { id: 4, src: "http://placehold.it/100x100/76BD23" },
      { id: 5, src: "http://placehold.it/100x100/76BD23" },
      { id: 6, src: "http://placehold.it/100x100/76BD23" }
    ];

    let images = array.map(image => {
      return <img key={image.id} src={image.src} />;
    });

    return (
      <div className="container">
        <footer className="row">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <h4>Some text</h4>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">{images}</div>
        </footer>
      </div>
    );
  }
}
export default test;
