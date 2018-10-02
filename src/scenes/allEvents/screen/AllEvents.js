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
import { NavigationActions } from 'react-navigation';
import { Transition } from 'react-navigation-fluid-transitions';
import { EventCard, DateSeparator } from '../components';
import { styles } from './styles';

class AllEvents extends Component {
  static navigationOptions = {
    header: null
  };
  componentDidMount() {
    console.log('componentMounted');
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

  render() {
    const { welcome } = styles;
    if (this.props.loaded) {
      return (
        <View>
          <StatusBar backgroundColor="white" barStyle="dark-content" />
          <View style={{ padding: 10, backgroundColor: '#ffffff' }}>
            <FlatList
              data={this.props.AllEvents}
              renderItem={this._renderItem}
              ListHeaderComponent={this._renderHeader}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => item.EventId.toString()}
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
  const { loaded, AllEvents } = state.eventsReducer;
  return { loaded, AllEvents };
};

export default connect(mapStateToProps)(AllEvents);
