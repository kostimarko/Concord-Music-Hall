import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { Transition } from 'react-navigation-fluid-transitions';
import { actions as Network } from '../../../network';
import { EventCard, DateSeparator } from '../components';
import { styles } from './styles';

const { getCurrentEvents } = Network;

class Home extends Component {
  static navigationOptions = {
    header: null
  };
  componentDidMount() {
    console.log('componentMounted');
    this.props.getCurrentEvents();
  }
  _renderItem = ({ item, index }) => {
    return (
      <View>
        <DateSeparator StartDate={item.StartDate} EventId={item.EventId} />
        <Transition shared={`${index}`}>
          <EventCard
            ImageSource={item.Image.Medium}
            AgeLimit={item.AgeLimit}
            HeadLiner={item.HeadlinerInfo.name}
            NextSceeen={() =>
              this.props.navigation.navigate('Details', { item, index })
            }
          />
        </Transition>
      </View>
    );
  };
  _renderHeader = ({ item }) => {
    return (
      <View style={{ marginTop: 5, marginBottom: 25 }}>
        <Text style={{ fontSize: 30, fontWeight: '300' }}>
          Concord Music Hall
        </Text>
      </View>
    );
  };
  _renderEnd = () => {
    const { ButtonContainer, ButtonText } = styles;
    return (
      <TouchableOpacity onPress={() => console.log('ended')}>
        <View style={ButtonContainer}>
          <Text style={ButtonText}>See All Events</Text>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    const { welcome } = styles;
    if (this.props.loaded) {
      return (
        <View>
          <StatusBar backgroundColor="white" barStyle="dark-content" />
          <View style={{ padding: 10, backgroundColor: '#ffffff' }}>
            <FlatList
              data={this.props.Events}
              renderItem={this._renderItem}
              ListHeaderComponent={this._renderHeader}
              showsVerticalScrollIndicator={false}
              ListFooterComponent={this._renderEnd}
            />
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
        </View>
      );
    }
  }
}

const mapStateToProps = state => {
  const { loaded, Events } = state.eventsReducer;
  return { loaded, Events };
};

export default connect(
  mapStateToProps,
  { getCurrentEvents }
)(Home);
