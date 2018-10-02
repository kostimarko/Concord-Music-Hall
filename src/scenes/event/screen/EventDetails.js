import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  FlatList
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Transition } from 'react-navigation-fluid-transitions';
import { styles } from './styles';

class EventDetails extends Component {
  componentDidMount() {
    console.log('componentMounted');
    console.log(this.props.navigation.state.params);
  }

  render() {
    const { Image } = styles;
    if (this.props.loaded) {
      return (
        <View>
          <StatusBar backgroundColor="white" barStyle="dark-content" />
          <View style={{ backgroundColor: '#ffffff', flex: 1 }}>
            <Transition shared={`${this.props.navigation.state.params.index}`}>
              <ImageBackground
                source={{
                  uri: this.props.navigation.state.params.item.Image.Large
                }}
                style={Image}
              />
            </Transition>
            <Transition anchor={`${this.props.navigation.state.params.index}`}>
              <View>
                <Text>{this.props.navigation.state.params.item.AgeLimit}</Text>
              </View>
            </Transition>
          </View>
        </View>
      );
    } else {
      return (
        <View>
          <Text>HI</Text>
        </View>
      );
    }
  }
}

const mapStateToProps = state => {
  const { loaded, Events } = state.eventsReducer;
  return { loaded, Events };
};

export default connect(mapStateToProps)(EventDetails);
