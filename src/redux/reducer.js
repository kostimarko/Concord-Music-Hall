import { combineReducers } from 'redux';
import { reducer as reducers } from '../network';

const { eventsReducer, userReducer } = reducers;

const rootReducer = combineReducers({
  eventsReducer,
  userReducer,
});

export default rootReducer;
