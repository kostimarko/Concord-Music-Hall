import firebase from 'react-native-firebase';
import axios from 'axios';

const auth = firebase.auth();
const database = firebase.database();
export const GetEvents = async(StartDate,EndDate)=>{
  try {
    const data = await axios.get(`http://www.ticketfly.com/api/events/list.json?venueId=9501&fromDate=${StartDate}&thruDate=${EndDate}`)
    const {events} = data.data;
    console.log(data)
    return events
  } catch (error) {
    console.log(error)
  }
}


export const CheckUser = async()=>{
  try {
    const {_user}= auth;
    if(!_user){
      const user = await auth.signInAnonymously();
      const {uid} = user.user._user;
      const userData = user.user._user;
      console.log(uid);
      database.ref(`Users/${uid}`).set({uid})
      return userData;
    } if(_user){
      return _user;
    }
  } catch (error) {
    console.log(error)
  }
}