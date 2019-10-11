import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import cityReducer from './reducers/cityReducer'

///aici vin celelalte reducere


export default createStore(cityReducer, applyMiddleware(thunk))