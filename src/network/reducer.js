import update from 'immutability-helper';
import {
  APP_LOADED,
  GOT_WEEK_EVENTS,
  GOT_USER_DATA,
  NAME_CHANGE,
  EMAIL_CHANGE,
  PASSWORD_CHANGE,
  GOT_CONTESTS,
  SOLD_OUT,
  GOT_FEATURED,
  GOT_GENRES,
  GENRE_TOGGLE_CHECKBOX,
  UPDATE_USER
} from './actionTypes';

const initEventState = {
  Loaded: false,
  Events: {},
  Featured:{}
};

export const eventsReducer = (state = initEventState, action) => {
  switch (action.type) {
    case APP_LOADED:
      return { ...state, Loaded: action.Loaded };
    case GOT_WEEK_EVENTS:
      return { ...state, Events: action.Events };
    case GOT_FEATURED:
      return { ...state,Featured: action.Featured };
    default:
      return { ...state };
  }
};

const initUserState = {
  User:{},
  FullName: '',
  Email: '',
  Password: '',
  Genres:{}
};

export const userReducer = (state = initUserState,action) => {
  switch (action.type) {
    case GOT_USER_DATA:
      return {
        ...state,
        User: action.User,
        FullName:action.User.displayName,
        Email: action.User.email,
        Password: ''
      };
    case UPDATE_USER:
      return {
        ...state,
        FullName:action.name,
        Email:action.email
      };
    case NAME_CHANGE:
      return { ...state, FullName: action.data };
    case EMAIL_CHANGE:
      return { ...state, Email: action.data };
    case PASSWORD_CHANGE:
      return { ...state, Password: action.data };
    case GOT_GENRES:
      return { ...state, Genres:action.Genres };
    case GENRE_TOGGLE_CHECKBOX:
      return update(state,{
        Genres:{
          [action.name]:{ $set:action.checkbox }
        }
      });
    default:
      return { ...state };
  }
};


const initContestState = {
  Contests: {},
  SoldOut: {}
};

export const contestReducer = (state = initContestState,action) => {
  switch (action.type) {
    case GOT_CONTESTS:
      return { ...state, Contests: action.contests };
    case SOLD_OUT:
      return { ...state,SoldOut:action.SoldOut };
    default:
      return { ...state };
  }
};
