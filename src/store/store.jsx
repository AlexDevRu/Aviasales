import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {ticketsReducer} from './ticketsReducer'

let store = createStore(ticketsReducer, applyMiddleware(thunk));

export default store;