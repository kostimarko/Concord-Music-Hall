import { APP_LOADED, GOT_WEEK_EVENTS,GOT_USER_DATA ,NAME_CHANGE, EMAIL_CHANGE,PASSWORD_CHANGE } from './actionTypes';

const initEventState = {
  Loaded: false,
  Events: {},
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

const initUserState = {
  User:{},
  FullName: '',
  Email: '',
  Password: ''
};

export const userReducer = (state = initUserState,action) => {
  switch (action.type) {
    case GOT_USER_DATA:
      return { ...state, User: action.User };
    case NAME_CHANGE:
      return { ...state, FullName: action.data };
    case EMAIL_CHANGE:
      return { ...state, Email: action.data };
    case PASSWORD_CHANGE:
      return { ...state, Password: action.data };
    default:
      return { ...state };
  }
};
