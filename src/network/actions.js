import * as api from './api';

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
  GENRE_SELECTION,
  UPDATE_USER,
  USER_ENTERS_CONTEST
} from './actionTypes';

export function GetEvents(StartDate,EndDate) {
  return async (dispatch) => {
    dispatch({ type: APP_LOADED, Loaded:false });
    const events = await api.GetEvents(StartDate,EndDate);
    dispatch({ type:GOT_WEEK_EVENTS, Events:events });
    dispatch({ type: APP_LOADED, Loaded:true });
  };
}

export function CreateUserFromAnon(Email,Password, FullName, callback) {
  return async (dispatch) => {
    try {
      const User = await api.CreateUserFromAnon(Email,Password, FullName);
      dispatch({ type:GOT_USER_DATA, User:User.user._user });
      callback();
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
      console.log(user);
      const contests = await api.GetContests();
      const soldOut = await api.GetSoldOut();
      const featured = await api.GetFeatured();
      const genres = await api.GetGenres();
      dispatch({ type:APP_LOADED, Loaded:false });
      dispatch({ type:GOT_WEEK_EVENTS, Events:events });
      dispatch({ type:GOT_USER_DATA, User:user });
      dispatch({ type:GOT_CONTESTS, contests });
      dispatch({ type:SOLD_OUT, SoldOut:soldOut });
      dispatch({ type:GOT_FEATURED, Featured:featured });
      dispatch({ type:GOT_GENRES, Genres:genres });

      const UserGenres = await api.GetUsersGenres();
      if (UserGenres) {
        dispatch({ type: GOT_GENRES, Genres: UserGenres });
      } else if (!UserGenres) {
      }

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

export const GenreToggleCheckbox = (name, checked) => (dispatch) => {
  const checkbox = !checked;
  dispatch({ type: GENRE_TOGGLE_CHECKBOX, name, checkbox });
};

export const SelectedGenres = (name, checked) => (dispatch) => {
  api.SelectedGenres(name, checked);
  dispatch({ type: GENRE_SELECTION, name, checked });
};


export const UpdateUser = (name,email) => (dispatch) => {
  api.UpdateUser(name,email);
  dispatch({ type:UPDATE_USER, name,email });
};

export const UserEntersContest = (id,callback) => (dispatch) => {
  console.log(id);
  api.UserEntersContest(id);
  dispatch({ type:USER_ENTERS_CONTEST });
  callback();
};

