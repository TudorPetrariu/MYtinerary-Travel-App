import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Activities extends Component {
   render() {
      const schem = this.props.itinerary;
      console.log(this.props.itinerary);

      return (
         <div className="card-content">
            <span className="card-title">{schem.title}</span>
            <p className="flow-text">{schem.hashtag}</p>
            <div>
               <img src={schem.images} />
            </div>
            <p className="flow-text">
               People rate this activity with {schem.rating}.
            </p>
            <p className="flow-text">
               With just {schem.price} euros for the best journey !{' '}
            </p>
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
