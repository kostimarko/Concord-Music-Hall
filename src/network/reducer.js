import { APP_LOADED, GOT_WEEK_EVENTS,GOT_USER_DATA,GOT_CONTESTS } from './actionTypes';

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

const initContestState = {
  Contests: {}
}
export const contestReducer = (state = initContestState,action)=>{
  switch(action.type){
    case GOT_CONTESTS:
      return { ...state, Contests: action.Contests }
    default:
      return { ...state }
  }
}

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