import firebase from 'react-native-firebase';
import axios from 'axios';

const auth = firebase.auth();
const database = firebase.database();
export const GetEvents = async (StartDate,EndDate) => {
  try {
    const data = await axios.get(`http://www.ticketfly.com/api/events/list.json?venueId=9501&fromDate=${StartDate}&thruDate=${EndDate}`);
    const { events } = data.data;
    return events;
  } catch (error) {
    console.log(error);
  }
};

export const GetFeatured = async () => {
  try {
    const data = await axios.get('http://www.ticketfly.com/api/events/featured.json?venueId=9501&maxResults=5');
    const { events } = data.data;
    return events;
  } catch (error) {
    console.log(error);
  }
};

export const CheckUser = async () => {
  try {
    const { _user } = auth;
    if (!_user) {
      const user = await auth.signInAnonymously();
      const { uid } = user.user._user;
      const userData = user.user._user;
      database.ref(`Users/${uid}`).set({ uid });
      return userData;
    } if (_user) {
      return _user;
    }
  } catch (error) {
    console.log(error);
  }
};

export const CreateUserFromAnon = async (Email,Password) => {
  try {
    const credential = await auth.createUserWithEmailAndPassword(Email,Password);
    // const User = await auth.linkWithCredential(credential);
    console.log(credential);
  } catch (error) {
    console.log(error);
  }
};

export const GetContests = async () => {
  try {
    const data = await database.ref('Contests').once('value');
    const contests = data.val();
    return contests;
  } catch (error) {
    console.log(error);
  }
};

export const GetSoldOut = async () => {
  try {
    const data = await database.ref('SoldOut').once('value');
    const SoldOut = data.val();
    return SoldOut;
  } catch (error) {
    console.log(error);
  }
};

