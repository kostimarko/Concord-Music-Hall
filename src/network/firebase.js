import firebase from 'react-native-firebase';
import moment from 'moment';

export function getCurrentEvents(callback) {
  const now = moment().format('YYYY-MM-DD');
  const later = moment()
    .add(7, 'days')
    .format('YYYY-MM-DD');
  console.log(later);
  firebase
    .database()
    .ref('CurrentEvents')
    .orderByChild('StartDate')
    .startAt(`${now}`)
    .endAt(`${later}`)
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
