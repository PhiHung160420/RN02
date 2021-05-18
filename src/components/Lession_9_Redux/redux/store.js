import {combineReducers, createStore} from 'redux';
import {rootReducers} from './reducers/RootReducer';

const store = createStore(rootReducers);

export default store;
