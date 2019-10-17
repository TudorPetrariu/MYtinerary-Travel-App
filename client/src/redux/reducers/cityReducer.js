import { FETCH_CITIES_FAILURE, FETCH_CITIES_REQUEST, FETCH_CITIES_SUCCES } from '../actions/Types'

export const initialState = {
    loading: false,
    cities: [],
    schema: [],
    error: ' '
}


const cityReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CITIES_REQUEST:
            return {
                ...state,
                loading: true

            }
        case FETCH_CITIES_SUCCES:
            return {
                ...state,
                loading: false,
                cities: action.payload,
                error: ''
            }
        case FETCH_CITIES_FAILURE:
            return {
                ...state,
                loading: false,
                cities: [],
                error: action.payload
            }
        default:
            return state
    }
}

export default cityReducer