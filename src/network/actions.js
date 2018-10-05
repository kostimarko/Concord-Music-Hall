import * as api from './firebase';

import { APP_LOADED, GOT_WEEK_EVENTS } from './actionTypes';

export function getCurrentEvents(start, end) {
  return dispatch => {
    dispatch({ type: APP_LOADED, data: false });
    api.getCurrentEvents(start, end, data => {
      dispatch({ type: GOT_WEEK_EVENTS, data: data });
      dispatch({ type: APP_LOADED, data: true });
    });
  };
}
