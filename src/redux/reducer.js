import { combineReducers } from 'redux';
import { reducer as reducers } from '../network';

const { eventsReducer, userReducer, contestReducer } = reducers;

const rootReducer = combineReducers({
  eventsReducer,
  userReducer,
  contestReducer,
});

export default rootReducer;
