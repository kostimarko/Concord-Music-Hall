import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import moment from 'moment';
import LottieView from 'lottie-react-native';
import { withNavigationFocus } from 'react-navigation';
import { styles } from './styles';
import SoldOutAnim from '../../../../assets/lottie/sold_out.json';
import Tickets from '../../../../assets/lottie/Tickets.json';

class EventCard extends Component {
  componentDidMount() {
    this._sub = this.props.navigation.addListener(
      'didFocus',
      this._animation
    );
  }

  _animation =() => {
    if (this.animation) {
      this.animation.play();
    }
  }

  componentWillUnmount() {
    this._sub.remove();
  }
  render() {
    const {
      CardContainerStyle,
      ImageStyle,
      TextContainer,
      DateText,
      ArtistText,
      PriceText,
      Container,
      AgeLimitText,
      SoldOutImageStyle
    } = styles;
    const {
      JumboImage,
      Price,
      HeadLiner,
      NextSceen,
      BorderColor,
      StartDate,
      AgeLimit,
      EventStatus,
      EventId,
      Loaded,
      Thumbnail,
      Contests,
      SoldOut
    } = this.props;
    if (SoldOut[`${EventId}`]) {
      return (
        <TouchableOpacity onPress={NextSceen} activeOpacity={0.5}>
          <View style={Container}>
            <ImageBackground source={{ uri: JumboImage }} style={SoldOutImageStyle}>
              <View style={{ width:100,height:100 }}>
                <LottieView
                  ref={(animation) => {
                  this.animation = animation;
                }}
                  source={SoldOutAnim}
                  loop={true}
                  autoPlay={true}
                />
              </View>
              <View style={{ flexDirection:'row' }}>
                <View style={CardContainerStyle}>
                  <View style={TextContainer}>
                    <Text style={DateText}>{moment(StartDate).format('MMM Do')}</Text>
                    <Text style={[{ color:BorderColor },AgeLimitText]}>{AgeLimit}</Text>
                  </View>
                  <View style={[{ marginBottom:15 },TextContainer]}>
                    <Text style={ArtistText}>{HeadLiner}</Text>
                  </View>
                  <View style={TextContainer}>
                    <Text style={DateText}>{moment(StartDate).format('h:mm a')}</Text>
                  </View>
                  <View style={TextContainer}>
                    <Text style={PriceText}>{Price}</Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      );
    }
    if (Contests[`${EventId}`]) {
      return (
        <TouchableOpacity onPress={NextSceen} activeOpacity={0.5}>
          <View style={Container}>
            <ImageBackground source={{ uri: JumboImage }} style={SoldOutImageStyle}>
              <View style={{ width:100,height:100 }}>
                <LottieView
                  ref={(animation) => {
                this.animation = animation;
              }}
                  source={Tickets}
                  loop={false}
                  autoPlay={true}
                />
              </View>
              <View style={{ flexDirection:'row' }}>
                <View style={CardContainerStyle}>
                  <View style={TextContainer}>
                    <Text style={DateText}>{moment(StartDate).format('MMM Do')}</Text>
                    <Text style={[{ color:BorderColor },AgeLimitText]}>{AgeLimit}</Text>
                  </View>
                  <View style={[{ marginBottom:15 },TextContainer]}>
                    <Text style={ArtistText}>{HeadLiner}</Text>
                  </View>
                  <View style={TextContainer}>
                    <Text style={DateText}>{moment(StartDate).format('h:mm a')}</Text>
                  </View>
                  <View style={TextContainer}>
                    <Text style={PriceText}>{Price}</Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      );
    }
    else {
      return (
        <TouchableOpacity onPress={NextSceen} activeOpacity={0.5}>
          <View style={Container}>
            <ImageBackground source={{ uri: JumboImage }} style={ImageStyle}>
              <View style={CardContainerStyle}>
                <View style={TextContainer}>
                  <Text style={DateText}>{moment(StartDate).format('MMM Do')}</Text>
                  <Text style={[{ color:BorderColor },AgeLimitText]}>{AgeLimit}</Text>
                </View>
                <View style={[{ marginBottom:15 },TextContainer]}>
                  <Text style={ArtistText}>{HeadLiner}</Text>
                </View>
                <View style={TextContainer}>
                  <Text style={DateText}>{moment(StartDate).format('h:mm a')}</Text>
                </View>
                <View style={TextContainer}>
                  <Text style={PriceText}>{Price}</Text>
                </View>
              </View>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      );
    }
  }
}

export default withNavigationFocus(EventCard);
