import * as api from './firebase';

import { APP_LOADED, GOT_WEEK_EVENTS, GOT_ALL_EVENTS } from './actionTypes';

export function getCurrentEvents() {
  return dispatch => {
    api.getCurrentEvents(data => {
      const loaded = true;
      dispatch({ type: GOT_WEEK_EVENTS, data: data });
      dispatch({ type: APP_LOADED, data: loaded });
    });
  };
}

export function getAllEvents(callback) {
  console.log('running action');
  return dispatch => {
    api.getAllEvents(data => {
      dispatch({ type: GOT_ALL_EVENTS, data: data });
    });
    callback(true);
  };
}
