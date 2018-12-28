import * as api from "./api";

import { APP_LOADED, GOT_WEEK_EVENTS } from "./actionTypes";

export function GetEvents(StartDate,EndDate){
  return dispatch=>{
    dispatch({type: APP_LOADED, Loaded:false});
    api.GetEvents(StartDate,EndDate).then((res)=>{
      dispatch({type: GOT_WEEK_EVENTS, Events:res});
      dispatch({type: APP_LOADED, Loaded:true});
    })
  }
}