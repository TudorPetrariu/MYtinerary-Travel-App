import cityReducer from './cityReducer'
import schemaReducer from './schemaReducer'
import { combineReducers } from 'redux'



const rootReducers = combineReducers({
    cityReducer,
    schemaReducer


})
export default rootReducers