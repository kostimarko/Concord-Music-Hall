import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  FlatList,
  ScrollView,
  TouchableOpacity
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
    const {
      ImageStyle,
      AgeContainer,
      badgeText,
      ButtonContainer,
      ButtonText,
      ImageDetailsContainer,
      IconContainer,
      HeaderRow
    } = styles;
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
                <View style={ImageDetailsContainer}>
                  <View style={HeaderRow}>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.goBack()}
                    >
                      <View style={IconContainer}>
                        <MaterialCommunityIcons
                          name="arrow-left"
                          size={25}
                          color="#646872"
                        />
                      </View>
                    </TouchableOpacity>
                    <View style={AgeContainer}>
                      <Text style={badgeText}>{AgeLimit}</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'flex-end',
                      justifyContent: 'flex-end'
                    }}
                  >
                    <TouchableOpacity onPress={() => console.log('logng')}>
                      <View style={ButtonContainer}>
                        <Text style={ButtonText}>Buy Tickets</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
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
