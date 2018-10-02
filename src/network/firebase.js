import firebase from 'react-native-firebase';
import moment from 'moment';

export function getCurrentEvents(callback) {
  firebase
    .database()
    .ref('CurrentEvents')
    .orderByChild('StartDate')
    .limitToFirst(10)
    .on('value', snapshot => {
      const topEvents = [];
      snapshot.forEach(data => {
        const eventData = data.val();
        topEvents.push(eventData);
      });

      callback(topEvents);
    });
}

export function getAllEvents(callback) {
  console.log('RUNING FB');
  firebase
    .database()
    .ref(`CurrentEvents`)
    .orderByChild('StartDate')
    .on('value', snapshot => {
      const allEvents = [];
      snapshot.forEach(data => {
        const eventData = data.val();
        allEvents.push(eventData);
        console.log('done?');
      });
      callback(allEvents);
    });
}
