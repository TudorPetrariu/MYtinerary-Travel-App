import React, { Component } from 'react'
import { fetchSchema } from "../redux/actions/schemaAction"
import { connect } from 'react-redux'

class Itynerary extends Component {
    componentDidMount() {
        this.props.getSchema()
    }


    render() {
        console.log(this.props)
        const { schema } = this.props
        const ItyneraryList = schema.length ? (schema.map(schem => {
            return (
                <div key={schem._id}>
                    <h5>{schem.title}</h5>
                    <p>{schem.hashtag}</p>
                    <p>{schem.rating}</p>
                    <img src={schem.profilePic} alt="schemaImg" ></img>
                    <p>{schem.duration}</p>
                    <p>With just {schem.price} euros</p>


                </div>
            )
        })) : (
                <div className="center">Getting Schema</div>
            )
        return (
            <div>
                {ItyneraryList}
                <p className="center">Schema</p>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {

        schema: state.schemaReducer.schema

    }


}

const mapDispatchToProps = (dispatch) => {
    return {
        getSchema: () => dispatch(fetchSchema())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Itynerary);
