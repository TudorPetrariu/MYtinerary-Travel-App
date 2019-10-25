import React, { Component } from 'react';
import { fetchSchema } from '../redux/actions/schemaAction';
import { connect } from 'react-redux';
import { HomeButton } from './HomeButton';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Itynerary extends Component {
	componentDidMount() {
		let { name } = this.props.match.params;
		console.log(name);
		this.props.getSchema(name);
	}

	render() {
		const { schema } = this.props;
		const ItyneraryList = schema.length ? (
			schema.map((schem) => {
				return (
					<div key={schem._id} className="container">
						<h5 className="collection">{schem.title}</h5>
						<img src={schem.profilePic} alt="schemaImg" className="cityimages" />
						<p className="flow-text">{schem.duration}.</p>
						<p className="flow-text">{schem.hashtag}</p>
						<p className="flow-text">People rate this activity with {schem.rating}.</p>
						<p className="flow-text">With just {schem.price} euros for the best journey ! </p>
					</div>
				);
			})
		) : (
			<div className="center">Loading...</div>
		);
		return (
			<div className="app">
				<h5 className="center  z-depth-1"> Find here your best activities</h5>

				<div className=" center">{ItyneraryList}</div>

				<div className="mid-container" />
				<div className="footer-container">
					<HomeButton />
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		schema: state.schemaReducer.schema,
		loading: state.schemaReducer.loading
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getSchema: (name) => dispatch(fetchSchema(name))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Itynerary);
