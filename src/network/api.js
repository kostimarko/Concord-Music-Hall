import firebase from 'react-native-firebase';
import axios from 'axios';

export const GetEvents = async(StartDate,EndDate)=>{
  try {
    const data = await axios.get(`http://www.ticketfly.com/api/events/list.json?venueId=9501&fromDate=${StartDate}&thruDate=${EndDate}`)
    const {events} = data.data;
    return events
  } catch (error) {
    console.log(error)
  }
}