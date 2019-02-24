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
    const { currentUser } = auth;
    if (!currentUser) {
      const user = await auth.signInAnonymously();

      const { uid } = user.user._user;
      const { _user } = user.user;
      database.ref(`Users/${uid}`).set({ uid });
      return _user;
    } else if (currentUser) {
      const { _user } = currentUser;
      return _user;
    }
  } catch (error) {
    console.log(error);
  }
};

export const CreateUserFromAnon = async (Email,Password, FullName) => {
  try {
    const credential = await firebase.auth.EmailAuthProvider.credential(Email,Password);
    const { currentUser } = auth;
    const { uid } = currentUser;
    const User = await currentUser.linkWithCredential(credential);
    User.user.updateProfile({ displayName:FullName });
    database.ref(`Users/${uid}`).set({ Email,FullName });
    return User;
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

export const GetGenres = async () => {
  try {
    const data = await database.ref('Genres').once('value');
    const Genres = data.val();
    return Genres;
  } catch (error) {
    console.log(error);
  }
};

export const GetUsersGenres = async () => {
  const { currentUser } = firebase.auth();

  try {
    const data = await database
      .ref(`Users/${currentUser.uid}/selected-genres`)
      .once('value');
    const UserGenres = data.val();
    return UserGenres;
  } catch (e) {
    console.log(e);
  }
};

export const SelectedGenres = async (name, checked) => {
  const { currentUser } = firebase.auth();
  try {
    const data = await database
      .ref(`Users/${currentUser.uid}/selected-genres/${name}`)
      .set(checked);
  } catch (e) {
    console.log(e);
  }
};

export const UserContests = async () => {
  const { currentUser } = firebase.auth();

  try {
    const data = await database.ref(`Users/${currentUser.uid}/ContestsEntered`).on('value',snapshot => snapshot.val());
    console.log(data);
    const enteredContests = 'hi';
    return enteredContests;
  } catch (error) {
    console.log(error);
  }
};

export const UpdateUser = async (name,email) => {
  const { currentUser } = firebase.auth();
  const { uid } = currentUser;
  try {
    currentUser.user.updateProfile({ displayName:name });
    database.ref(`User/${uid}`).set({ name,email });
  } catch (error) {
    console.log(error);
  }
};

export const UserEntersContest = async (id) => {
  const { currentUser } = firebase.auth();

  try {
    console.log(id);
    const data = await database.ref(`Users/${currentUser.uid}/ContestsEntered`).push().set(id);
  } catch (error) {
    console.log(error);
  }
};

