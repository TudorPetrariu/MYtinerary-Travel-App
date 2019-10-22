import cityReducer from './cityReducer'
import schemaReducer from './schemaReducer'
import authReducer from './authReducer'
import { combineReducers } from 'redux'



const rootReducers = combineReducers({
    cityReducer,
    schemaReducer


})
export default rootReducers