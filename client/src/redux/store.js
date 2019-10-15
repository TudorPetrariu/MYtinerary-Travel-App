import cityReducer from './reducers/cityReducer';

import thunk from 'redux-thunk';

import { createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';



export default createStore(cityReducer, composeWithDevTools(applyMiddleware(thunk)))