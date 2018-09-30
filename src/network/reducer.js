import { APP_LOADED } from './actionTypes';

const initState = {
  loaded: false
};

export const mainReducer = (state = initState, action) => {
  switch (action.type) {
    case APP_LOADED:
      return { ...state };

    default:
      return { ...state };
  }
};
