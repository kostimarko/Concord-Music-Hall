import React from 'react';
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const Headliner = props => {
  const {
    HeaderText,
    HeadlinerText,
    IconRow,
    IconRowText,
    IconContainer,
    AddressContainer,
    descText,
    BuyButton,
    BuyButtonText
  } = styles;
  const {
    HeadlinerName,
    Day,
    Time,
    VenueName,
    VenueAddress,
    VenueState,
    VenueCity,
    HeadlinerDesc,
    Price,
    AgeLimit
  } = props;
  return (
    <View>
      <Text style={HeaderText}>HEADLINER</Text>
      <Text style={HeadlinerText}>{HeadlinerName}</Text>
      <View style={IconRow}>
        <View style={IconContainer}>
          <Icon name="calendar" size={25} style={{ color: '#646872' }} />
        </View>
        <Text style={IconRowText}>{moment(Day).format('MMM Do YYYY')}</Text>
      </View>
      <View style={IconRow}>
        <View style={IconContainer}>
          <Icon name="clock" size={25} style={{ color: '#646872' }} />
        </View>
        <Text style={IconRowText}>{moment(Time).format('hA')}</Text>
      </View>
      <View style={IconRow}>
        <View style={IconContainer}>
          <Icon name="currency-usd" size={25} style={{ color: '#646872' }} />
        </View>
        <Text style={IconRowText}>{Price}</Text>
      </View>
      <View style={IconRow}>
        <View style={IconContainer}>
          <Icon name="face" size={25} style={{ color: '#646872' }} />
        </View>
        <Text style={IconRowText}>{AgeLimit}</Text>
      </View>
      <View style={IconRow}>
        <View style={IconContainer}>
          <Icon name="map-marker" size={25} style={{ color: '#646872' }} />
        </View>
        <View style={AddressContainer}>
          <Text style={IconRowText}>{VenueName}</Text>
          <Text style={IconRowText}>{VenueAddress}</Text>
          <Text style={IconRowText}>
            {VenueCity}, {VenueState}
          </Text>
          <Text style={descText}>{HeadlinerDesc}</Text>
        </View>
      </View>
    </View>
  );
};
export default Headliner;
