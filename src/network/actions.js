import * as api from './firebase';

import { APP_LOADED, GOT_EVENTS } from './actionTypes';

export function getCurrentEvents() {
  return dispatch => {
    api.getCurrentEvents(data => {
      const loaded = true;
      dispatch({ type: GOT_EVENTS, data: data });
      dispatch({ type: APP_LOADED, data: loaded });
    });
  };
}
