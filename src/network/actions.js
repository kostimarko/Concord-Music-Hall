import * as api from './api';

import { APP_LOADED, GOT_WEEK_EVENTS,GOT_USER_DATA ,NAME_CHANGE, EMAIL_CHANGE,PASSWORD_CHANGE,GOT_CONTESTS,SOLD_OUT,GOT_FEATURED } from './actionTypes';

export function GetEvents(StartDate,EndDate) {
  return async (dispatch) => {
    dispatch({ type: APP_LOADED, Loaded:false });
    const events = await api.GetEvents(StartDate,EndDate);
    dispatch({ type:GOT_WEEK_EVENTS, Events:events });
    dispatch({ type: APP_LOADED, Loaded:true });
  };
}

export function CreateUserFromAnon(Email,Password) {
  return async (dispatch) => {
    try {
      const User = await api.CreateUserFromAnon(Email,Password);
      console.log(User);
    } catch (error) {
      console.log(error);
    }
  };
}
export function bootApp(StartDate,EndDate, callback) {
  return async (dispatch) => {
    try {
      const events = await api.GetEvents(StartDate,EndDate);
      const user = await api.CheckUser();
      const contests = await api.GetContests();
      const soldOut = await api.GetSoldOut();
      const featured = await api.GetFeatured();
      dispatch({ type:APP_LOADED, Loaded:false });
      dispatch({ type:GOT_WEEK_EVENTS, Events:events });
      dispatch({ type:GOT_USER_DATA, User:user._user });
      dispatch({ type:GOT_CONTESTS, contests });
      dispatch({ type:SOLD_OUT, SoldOut:soldOut });
      dispatch({ type:GOT_FEATURED, Featured:featured });
      dispatch({ type:APP_LOADED, Loaded:true });
      callback();
    } catch (error) {
      console.log(error);
    }
  };
}

export const onNameChange = text => ({
  type:NAME_CHANGE,
  data:text
});

export const onEmailChange = text => ({
  type:EMAIL_CHANGE,
  data:text
});

export const onPasswordChange = text => ({
  type:PASSWORD_CHANGE,
  data:text
});
