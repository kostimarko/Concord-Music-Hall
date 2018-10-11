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
import { styles } from './styles';
import { Headliner } from '../components';

class EventDetails extends Component {
  static navigationOptions = ({ navigation }) => {
    const { HeadlinerInfo } = navigation.state.params.item;
    return {
      headerTitle: `${HeadlinerInfo.name}`,
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
    };
  };
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
    const { AgeContainer, badgeText } = styles;
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
          AgeLimit={AgeLimit}
        />
      </View>
    );
  }
  render() {
    const {
      ImageStyle,
      ButtonContainer,
      ButtonText,
      ImageDetailsContainer,
      IconContainer,
      HeaderRow
    } = styles;

    const {
      Image,
      AgeLimit,
      TicketLink
    } = this.props.navigation.state.params.item;
    const { index } = this.props.navigation.state.params;
    if (this.props.loaded) {
      return (
        <ScrollView showsVerticalScrollIndicator={false}>
          <StatusBar backgroundColor="white" barStyle="dark-content" />
          <View style={{ backgroundColor: '#ffffff', flex: 1 }}>
            <ImageBackground
              source={{
                uri: Image.Large
              }}
              style={ImageStyle}
            >
              <View style={ImageDetailsContainer}>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end'
                  }}
                >
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('Buy', { TicketLink })
                    }
                  >
                    <View style={ButtonContainer}>
                      <Text style={ButtonText}>Buy Tickets</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>

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
