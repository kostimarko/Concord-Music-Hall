import { APP_LOADED, GOT_WEEK_EVENTS,GOT_USER_DATA } from './actionTypes';

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

const initUserState ={
  User:{}
}

export const userReducer = (state = initUserState,action)=>{
  switch(action.type){
    case GOT_USER_DATA:
    return {...state, User:action.User};
    default:
    return {...state}
  }
}