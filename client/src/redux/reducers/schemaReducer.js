import { FETCH_SCHEMA_FAILURE, FETCH_SCHEMA_REQUEST, FETCH_SCHEMA_SUCCES } from '../actions/Types'

export const initialState = {
    loading: true,
    schema: [],
    error: ' '
}

const schemaReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SCHEMA_REQUEST:
            return {
                ...state,
                loading: true

            }
        case FETCH_SCHEMA_SUCCES:
            return {
                ...state,
                loading: false,
                schema: action.payload,
                error: ''
            }
        case FETCH_SCHEMA_FAILURE:
            return {
                ...state,
                loading: false,
                schema: [],
                error: action.payload
            }
        default:
            return state
    }
}

export default schemaReducer