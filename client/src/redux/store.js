import cityReducer from './reducers/cityReducer';
import schemaReducer from './reducers/schemaReducer'
import thunk from 'redux-thunk';

import { createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from './reducers/rootReducers'


export default createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))
