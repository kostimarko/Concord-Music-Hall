import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, ScrollView, View, Image } from 'react-native';
import ProfileaAnimation from '../../../assets/lottie/Profile.json';
import GenreAnimation from '../../../assets/lottie/Genre_Icon.json';
import NotificationAnimation from '../../../assets/lottie/Notification.json';
import { ProfileCard } from '../components';
import AnonUser from '../../../components/AnonUser';
import { styles } from './styles';
import Concord from './ConcordMusicHall.png';


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
        <ScrollView contentContainerStyle={styles.ScrollContainer}>
          <Image source={Concord} style={styles.logo} />
          <ProfileCard
            Animation={ProfileaAnimation}
            TextDetails="Edit Your Profile Info"
            OnPress={() => this.props.navigation.navigate('EditProfile')}
          />
          <ProfileCard
            Animation={GenreAnimation}
            TextDetails="Edit your music Selections"
            OnPress={() => this.props.navigation.navigate('GenreSelection')}
          />
        </ScrollView>
      );
    }
  }
}

const mapStateToProps = (state) => {
  const {  User } = state.userReducer;
  return {  User };
};

export default connect(mapStateToProps,null)(Profile);
