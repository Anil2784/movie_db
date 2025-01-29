// src/reducers/index.js
import { combineReducers } from 'redux';
import userReducer from './userReducer';
import movieReducer from './movies.reducers';

const rootReducer = combineReducers({
  user: userReducer,
  movie: movieReducer
});

export default rootReducer;
