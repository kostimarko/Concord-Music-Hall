import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  FlatList,
  ScrollView
} from 'react-native';
import moment from 'moment';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Transition } from 'react-navigation-fluid-transitions';
import { styles } from './styles';
import { Headliner } from '../components';

class EventDetails extends Component {
  componentDidMount() {
    console.log('componentMounted');
    console.log(this.props.navigation.state.params);
  }
  _renderDetails() {
    const {
      AgeLimit,
      TicketPrice,
      StartDate,
      HeadlinerInfo,
      VenueName,
      VenueAddress,
      VenueState,
      VenueCity,
      HeadlinerDesc
    } = this.props.navigation.state.params.item;
    return (
      <View style={{ padding: 15 }}>
        <Headliner
          HeadlinerName={HeadlinerInfo.name}
          Day={StartDate}
          Time={StartDate}
          HeadlinerDesc={HeadlinerInfo.eventDescription}
          VenueName={VenueName}
          VenueAddress={VenueAddress}
          VenueState={VenueState}
          VenueCity={VenueCity}
          HeadlinerDesc={HeadlinerDesc}
          Price={TicketPrice}
        />
      </View>
    );
  }
  render() {
    const { ImageStyle } = styles;
    const { Image, AgeLimit } = this.props.navigation.state.params.item;
    const { index } = this.props.navigation.state.params;
    if (this.props.loaded) {
      return (
        <ScrollView showsVerticalScrollIndicator={false}>
          <StatusBar backgroundColor="white" barStyle="dark-content" />
          <View style={{ backgroundColor: '#ffffff', flex: 1 }}>
            <Transition shared={`${index}`}>
              <ImageBackground
                source={{
                  uri: Image.Large
                }}
                style={ImageStyle}
              >
                <View
                  style={{
                    backgroundColor: '#000000',
                    borderRadius: 15,
                    marginRight: 15,
                    marginTop: 15
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      color: '#ffffff',
                      paddingLeft: 10,
                      paddingRight: 10,
                      paddingTop: 5,
                      paddingBottom: 5
                    }}
                  >
                    {AgeLimit}
                  </Text>
                </View>
              </ImageBackground>
            </Transition>
            {this._renderDetails()}
          </View>
        </ScrollView>
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
