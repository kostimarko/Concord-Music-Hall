import firebase from 'react-native-firebase';
import moment from 'moment';

export function getCurrentEvents(callback) {
  firebase
    .database()
    .ref('CurrentEvents')
    .orderByChild('StartDate')
    .limitToFirst(10)
    .once('value')
    .then(snapshot => {
      const topEvents = [];
      snapshot.forEach(data => {
        const eventData = data.val();
        topEvents.push(eventData);
      });

      callback(topEvents);
    })
    .catch(e => console.log(e));
}

export function getAllEvents(StartDate, callback) {
  firebase
    .database()
    .ref(`CurrentEvents`)
    .orderByChild('StartDate')
    .startAt(`${StartDate}`)
    .once('value')
    .then(snapshot => {
      const allEvents = [];
      snapshot.forEach(data => {
        const eventData = data.val();
        allEvents.push(eventData);
      });
      callback(allEvents);
    })
    .catch(e => console.log(e));
}
