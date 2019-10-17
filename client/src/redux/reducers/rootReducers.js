import cityReducer from './cityReducer'
import schemaReducer from './schemaReducer'
import { combineReducers } from 'redux'

const rootReducers = combineReducers({
    city: cityReducer,
    schema: schemaReducer


})
export default rootReducers