import { APP_LOADED, GOT_WEEK_EVENTS } from './actionTypes';

const initEventState = {
  Loaded: false,
  Events: {}
};

export const eventsReducer = (state = initEventState, action) => {
  switch (action.type) {
    case APP_LOADED:
      return { ...state, Loaded: action.Loaded };
    case GOT_WEEK_EVENTS:
      return { ...state, Events: action.Events };
    default:
      return { ...state };
  }
};
