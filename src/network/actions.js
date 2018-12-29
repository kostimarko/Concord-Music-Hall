import * as api from "./api";

import { APP_LOADED, GOT_WEEK_EVENTS,GOT_USER_DATA } from "./actionTypes";

export function GetEvents(StartDate,EndDate){
  return async (dispatch)=>{
    dispatch({type: APP_LOADED, Loaded:false});
    const events = await api.GetEvents(StartDate,EndDate);
    dispatch({type:GOT_WEEK_EVENTS, Events:events});
    dispatch({type: APP_LOADED, Loaded:true});
  }
}

export function bootApp(StartDate,EndDate, callback){
return async (dispatch)=>{
  try {
    const events = await api.GetEvents(StartDate,EndDate);
    const user = await api.CheckUser();
    dispatch({type:APP_LOADED, Loaded:false});
    dispatch({type:GOT_WEEK_EVENTS, Events:events});
    dispatch({type:GOT_USER_DATA, User:user._user});
    dispatch({type:APP_LOADED, Loaded:true});
    callback()
  } catch (error) {
    console.log(error)
  }
}
}