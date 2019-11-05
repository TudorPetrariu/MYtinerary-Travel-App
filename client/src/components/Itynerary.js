import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
   fetchSchema,
   getSelectedItinerary
} from '../redux/actions/schemaAction';
import { connect } from 'react-redux';
import { HomeButton } from './HomeButton';

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
                  <div className="col s12 16">
                     <div className="card">
                        <div className="card-image">
                           <img src={schem.profilePic} alt="schemaImg" />

                           <a
                              href="#"
                              className="halfway-fab btn-floating orange pulse">
                              <i className="material-icons">favorite</i>
                           </a>
                        </div>

                        <div className="card-content">
                           <span className="card-title">{schem.title}</span>

                           <p className="flow-text">{schem.duration}.</p>
                           <p className="flow-text">{schem.hashtag}</p>
                           <p className="flow-text">
                              People rate this activity with {schem.rating}.
                           </p>
                           <p className="flow-text">
                              With just {schem.price} euros for the best journey
                              !{' '}
                           </p>
                        </div>
                        <div className="card-action">
                           <Link
                              to="/activities"
                              onClick={() => this.showDetails(schem)}>
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
            <h5 className="center  z-depth-1">
               {' '}
               Find here your best activities
            </h5>
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

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Itynerary);
