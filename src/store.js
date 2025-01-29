import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Correct import for newer versions
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
