import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, ScrollView, View } from 'react-native';
import ProfileaAnimation from '../../../assets/lottie/Profile.json';
import GenreAnimation from '../../../assets/lottie/Genre.json';
import NotificationAnimation from '../../../assets/lottie/Notification.json';
import { AnonUser, ProfileCard } from '../components';

class Profile extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Profile',
    headerTitleStyle: {
      color: '#191919',
      fontSize: 24,
      fontWeight: '300',
      marginLeft: 10
    },
    headerStyle: {
      elevation: 0
    },

    headerRight: null
  });
  render() {
    const { isAnonymous } = this.props.User;

    if (isAnonymous) {
      return (
        <AnonUser navigation={this.props.navigation} />
      );
    }
    if (!isAnonymous) {
      return (
        <ScrollView contentContainerStyle={styles.container}>
          <ProfileCard
            Animation={ProfileaAnimation}
            TextDetails="Edit Your Profile Info"
            OnPress={() => console.log('yo')}
          />
          <ProfileCard
            Animation={GenreAnimation}
            TextDetails="Edit your music Selections"
            OnPress={() => this.props.navigation.navigate('GenreSelection')}
          />
          <ProfileCard
            Animation={NotificationAnimation}
            TextDetails="Edit your Notification Selections"
            OnPress={() => console.log('yo')}
          />
        </ScrollView>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

const mapStateToProps = (state) => {
  const {  User } = state.userReducer;
  return {  User };
};

export default connect(mapStateToProps,null)(Profile);
