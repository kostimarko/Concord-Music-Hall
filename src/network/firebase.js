import firebase from 'react-native-firebase';
import moment from 'moment';

export function getCurrentEvents(callback) {
  const now = moment().format('MMM DD YYYY');
  const later = moment()
    .add(7, 'd')
    .format('MMM DD YYYY');
  console.log(later, 'LATER');
  console.log(now, 'NOW');

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
