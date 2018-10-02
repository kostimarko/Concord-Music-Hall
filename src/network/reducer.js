import { APP_LOADED, GOT_EVENTS } from './actionTypes';

const initEventState = {
  loaded: false,
  Events: {}
};

export const eventsReducer = (state = initEventState, action) => {
  switch (action.type) {
    case APP_LOADED:
      console.log(action.data);
      return { ...state, loaded: action.data };
    case GOT_EVENTS:
      return { ...state, Events: action.data };
    default:
      return { ...state };
  }
};
