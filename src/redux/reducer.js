import { combineReducers } from 'redux';
import { reducer as reducers } from '../network';

const { mainReducer } = reducers;

const rootReducer = combineReducers({
  mainReducer
});

export default rootReducer;
