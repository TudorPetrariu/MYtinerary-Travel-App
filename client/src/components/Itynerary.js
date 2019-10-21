import React, { Component } from 'react'
import { fetchSchema } from "../redux/actions/schemaAction"
import { connect } from 'react-redux'
import { HomeButton } from './HomeButton';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";


class Itynerary extends Component {
    state = {
        id: null
    }


    // render() {
    //     console.log(this.props.schema)
    //     if (!this.props.loading)
    //         return (
    //             <div className="container">
    //                 <p>{this.props.schema[0].title}</p>
    //             </div>
    //         )
    //     else
    //         return (
    //             <div>Loading ...</div>
    //         )
    // }
    componentDidMount() {
        let { name } = this.props.match.params;
        console.log(name)
        this.props.getSchema(name)
    }


    render() {
        const { schema } = this.props
        const ItyneraryList = schema.length ? (schema.map(schem => {
            return (
                <div key={schem._id} className="container">
                    <h5 >{schem.title}</h5>
                    <img src={schem.profilePic} alt="schemaImg" className="cityimages"></img>
                    <p className="flow-text">{schem.hashtag}</p>
                    <p className="flow-text">{schem.duration}</p>
                    <p className="flow-text">People rate this activity with {schem.rating}</p>

                    <p className="flow-text">With just {schem.price} euros for the best journey </p>
                </div>
            )
        })) : (
                <div className="center">Loading...</div>
            )
        return (
            <div className="app">

                <div className="container">

                    <h2 className="header-container">{ItyneraryList}</h2>
                    <div className="mid-container"></div>
                    <div className="footer-container">
                        <HomeButton />
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {

        schema: state.schemaReducer.schema,
        loading: state.schemaReducer.loading
    }


}

const mapDispatchToProps = (dispatch) => {
    return {
        getSchema: (name) => dispatch(fetchSchema(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Itynerary);
