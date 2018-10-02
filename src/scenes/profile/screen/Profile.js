import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { actions as Network } from '../../../network';

const { getCurrentEvents } = Network;

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'SHAKE SHAKE SHAKE'
});

class Profile extends Component {
  componentDidMount() {
    console.log('componentMounted');
    this.props.getCurrentEvents();
  }
  _renderEvents() {
    console.log(this.props.Events);
    const { Events } = this.props;
    return Object.keys(Events).map(e => {
      console.log(e);
      const event = Events[e];
      return <Text key={e}>{event.AgeLimit}</Text>;
    });
  }

  render() {
    console.log(this.props.Events);
    if (this.props.loaded) {
      return (
        <View>
          <Text>HI FROM PROFILE</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
          <Text style={styles.instructions}>{instructions}</Text>
        </View>
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

const mapStateToProps = state => {
  const { loaded, Events } = state.eventsReducer;
  return { loaded, Events };
};

export default connect(
  mapStateToProps,
  { getCurrentEvents }
)(Profile);
