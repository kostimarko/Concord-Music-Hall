import { combineReducers } from 'redux';
import { reducer as reducers } from '../network';

const { eventsReducer } = reducers;

const rootReducer = combineReducers({
  eventsReducer
});

export default rootReducer;
