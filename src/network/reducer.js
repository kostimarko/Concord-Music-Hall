import { APP_LOADED, GOT_WEEK_EVENTS } from './actionTypes';

const initEventState = {
  loaded: false,
  Events: {}
};

export const eventsReducer = (state = initEventState, action) => {
  switch (action.type) {
    case APP_LOADED:
      return { ...state, loaded: action.data };
    case GOT_WEEK_EVENTS:
      return { ...state, Events: action.data };
    default:
      return { ...state };
  }
};
