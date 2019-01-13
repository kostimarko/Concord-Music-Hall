import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import moment from 'moment';
import { styles } from './styles';

const EventCard = (props) => {
  const {
    CardContainerStyle,
    ImageStyle,
    TextContainer,
    DateText,
    ArtistText,
    PriceText,
    Container,
    AgeLimitText
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
  } = props;
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
};
export default EventCard;
