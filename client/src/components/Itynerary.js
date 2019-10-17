import React, { Component } from 'react'
import axios from 'axios'
import { fetchSchema } from "../redux/actions/schemaAction"

import { connect } from 'react-redux'

class Itynerary extends Component {
    componentDidMount() {
        this.props.getSchema()
    }

    // componentDidMount() {
    //     axios.get('/Mytinerary')
    //         .then(res => {
    //             console.log(res)
    //         })
    // }


    render() {
        console.log(this.props)
        return (
            <div>
                <p>saffa</p>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {

        schema: state.schema


    }


}

const mapDispatchToProps = (dispatch) => {
    return {
        getSchema: () => dispatch(fetchSchema())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Itynerary);
