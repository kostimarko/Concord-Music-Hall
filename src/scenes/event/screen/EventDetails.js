import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  ImageBackground,
  StatusBar,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import LottieView from 'lottie-react-native';
import { styles } from './styles';
import { Headliner, ContestButton } from '../components';
import ProgressiveImage from '../../../components/ProgressiveImage';
import Tickets from '../../../assets/lottie/Tickets.json';
import SoldOutAnimation from '../../../assets/lottie/sold_out.json';

class EventDetails extends Component {
  static navigationOptions = ({ navigation }) => {
    const { headlinersName } = navigation.state.params.item;
    return {
      headerTitle: `${headlinersName}`,
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
  _renderDetails() {
    const {
      headlinersName,startDate, headliners, venue,ticketPrice,ageLimit,id
    } = this.props.navigation.state.params.item;
    const { borderColor, Contests } = this.props.navigation.state.params;
    return (
      <View style={{ padding: 15 }}>
        <Headliner
          HeadlinerName={headlinersName}
          Day={startDate}
          Time={startDate}
          HeadlinerDesc={headliners['0'].eventDescription}
          VenueName={venue.name}
          VenueAddress={venue.address1}
          VenueState={venue.stateProvince}
          VenueCity={venue.city}
          Price={ticketPrice}
          AgeLimit={ageLimit}
          Color={borderColor}
          Id={id}
          Contests={Contests}
          Navigation={this.props.navigation}
          UserEnteredContest={this.props.EnteredContests}
        />
      </View>
    );
  }
  _renderImageBackground(image, eventStatus, ticketPurchaseUrl,Contests, id,SoldOut,EnteredContests) {
    const { borderColor } = this.props.navigation.state.params;
    const {
      ImageStyle,
      ButtonContainer,
      ButtonText,
      ImageDetailsContainer,
      SoldOutImageContainer,
      LottieContainer
    } = styles;
    if (EnteredContests[`${id}`] & Contests[`${id}`]) {
      return (
        <View>
          <ProgressiveImage
            JumboImage={image.jumbo.path}
            style={ImageStyle}
            imageStyle={ImageStyle}
            Thumbnail={image.squareSmall.path}
          />
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
                  this.props.navigation.navigate('Buy', { ticketPurchaseUrl })
                }
                activeOpacity={0.8}
              >
                <View
                  style={[ButtonContainer, { backgroundColor: borderColor }]}
                >
                  <Text style={ButtonText}>Buy Tickets</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    }
    if (SoldOut[`${id}`]) {
      return (
        <View>
          <View style={[LottieContainer]}>
            <LottieView
              ref={(animation) => {
          if (animation) {
            animation.play();
          }
        }}
              source={SoldOutAnimation}
              loop={true}
            />
          </View>
        </View>
      );
    }
    if (Contests[`${id}`]) {
      return (
        <View>
          <View style={LottieContainer}>
            <LottieView
              ref={(animation) => {
            if (animation) {
              animation.play();
            }
          }}
              source={Tickets}
              loop={false}
            />
          </View>
        </View>
      );
    }
    else {
      return (
        <View>
          <ProgressiveImage
            JumboImage={image.jumbo.path}
            style={ImageStyle}
            imageStyle={ImageStyle}
            Thumbnail={image.squareSmall.path}
          />
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
                  this.props.navigation.navigate('Buy', { ticketPurchaseUrl })
                }
                activeOpacity={0.8}
              >
                <View
                  style={[ButtonContainer, { backgroundColor: borderColor }]}
                >
                  <Text style={ButtonText}>Buy Tickets</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    }
  }

  render() {
    const {
      image, ticketPurchaseUrl,eventStatus,headliners, id
    } = this.props.navigation.state.params.item;
    const { Contests,SoldOut } = this.props.navigation.state.params;
    const { EnteredContests } = this.props;
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <View style={{ backgroundColor: '#ffffff', flex: 1 }}>
          {this._renderImageBackground(image,eventStatus,ticketPurchaseUrl, Contests,id, SoldOut, EnteredContests)}
          {this._renderDetails()}
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  const { Loaded, Events } = state.eventsReducer;
  const { EnteredContests } = state.userReducer;
  return { Loaded, Events,EnteredContests };
};

export default connect(mapStateToProps)(EventDetails);
