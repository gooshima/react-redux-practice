import { combineReducers } from 'redux';
import Typing_r from './Typing_r';

const rootReducer = combineReducers({
  state: (state = {}) => state,
  Typing_r
});

export default rootReducer;
