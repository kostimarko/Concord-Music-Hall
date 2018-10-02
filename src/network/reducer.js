import { APP_LOADED, GOT_WEEK_EVENTS, GOT_ALL_EVENTS } from './actionTypes';

const initEventState = {
  loaded: false,
  Events: {}
};

export const eventsReducer = (state = initEventState, action) => {
  switch (action.type) {
    case APP_LOADED:
      console.log(action.data);
      return { ...state, loaded: action.data };
    case GOT_WEEK_EVENTS:
      return { ...state, Events: action.data };
    case GOT_ALL_EVENTS:
      console.log('reducer running');
      return { ...state, AllEvents: action.data };
    default:
      return { ...state };
  }
};
