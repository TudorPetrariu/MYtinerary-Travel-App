import React from 'react'
import { connect } from 'react-redux';
import { fetchCities } from "../redux/actions/cityAction"

class MYtinerary extends React.Component {

    componentDidMount() {
        this.props.getCities()
    }
    render() {
        console.log(this.props)
        return (
            <div >
                <p>cities</p>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        cities: state.cities

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCities: () => dispatch(fetchCities())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MYtinerary);