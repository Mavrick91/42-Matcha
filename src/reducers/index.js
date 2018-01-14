import { combineReducers } from 'redux';
import reducerSignUp from './signup/reducer_signup';

export default combineReducers({
  signup: reducerSignUp,
});
