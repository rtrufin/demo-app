import { combineReducers } from 'redux';
import authentication from './authenticationReducer';
import weather from './weatherReducer';

const rootReducer = combineReducers({
  authentication,
  weather,
});

export default rootReducer;
