import { FETCH_CITIES_REQUEST, FETCH_CITIES_SUCCES, FETCH_CITIES_FAILURE } from './Types'



export const fetchCitiesRequest = () => {
    return {
        type: FETCH_CITIES_REQUEST
    }
}

export const fetchCitiesSucces = (cities) => {
    return {
        type: FETCH_CITIES_SUCCES,
        payload: cities
    }
}
export const fetchCitiesFailure = error => {
    return {
        type: FETCH_CITIES_FAILURE,
        payload: error
    }
}

export const fetchCities = () => {
    return (dispatch) => {
        dispatch(fetchCitiesRequest())
        fetch('/cities', {
            method: "GET",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then(res => res.json())
            .then(json => {
                dispatch(fetchCitiesSucces(json.data))
                console.log(json.data)
            })

            .catch(error => {
                dispatch(fetchCitiesFailure(error.message))
            })
    }

}



export default fetchCities