import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { AnonUser } from '../components';

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
        <View style={styles.container}><Text style={styles.welcome}> I AM NOT ANON</Text></View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
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
