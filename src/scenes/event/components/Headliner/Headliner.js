import React from 'react';
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { ContestButton } from '../';

const Headliner = (props) => {
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
    AgeLimit,
    Color,
    Contests,
    Id,
    Navigation,
    UserEnteredContest
  } = props;
  if (Contests[`${Id}`]) {
    return (
      <View>
        <Text style={HeaderText}>Headliner</Text>
        <Text style={[HeadlinerText, { color: Color }]}>{HeadlinerName}</Text>
        <View style={IconRow}>
          <View style={IconContainer}>
            <Icon name="calendar" size={25} style={{ color: '#191919' }} />
          </View>
          <Text style={IconRowText}>{moment(Day).format('MMM Do YYYY')}</Text>
        </View>
        <View style={IconRow}>
          <View style={IconContainer}>
            <Icon name="clock" size={25} style={{ color: '#191919' }} />
          </View>
          <Text style={IconRowText}>{moment(Time).format('hA')}</Text>
        </View>
        <View style={IconRow}>
          <View style={IconContainer}>
            <Icon name="currency-usd" size={25} style={{ color: '#191919' }} />
          </View>
          <Text style={IconRowText}>{Price}</Text>
        </View>
        <View style={IconRow}>
          <View style={IconContainer}>
            <Icon name="face" size={25} style={{ color: '#191919' }} />
          </View>
          <Text style={IconRowText}>{AgeLimit}</Text>
        </View>
        <View style={IconRow}>
          <View style={IconContainer}>
            <Icon name="map-marker" size={25} style={{ color: '#191919' }} />
          </View>
          <View style={AddressContainer}>
            <Text style={IconRowText}>{VenueName}</Text>
            <Text style={IconRowText}>{VenueAddress}</Text>
            <Text style={IconRowText}>
              {VenueCity}, {VenueState}
            </Text>

            <ContestButton Id={Id} UserEnteredContest={UserEnteredContest} ContestPress={() => Navigation.navigate('Contest',{ Id,HeadlinerName,Time })} />

            <Text style={descText}>{HeadlinerDesc}</Text>
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View>
        <Text style={HeaderText}>Headliner</Text>
        <Text style={[HeadlinerText, { color: Color }]}>{HeadlinerName}</Text>
        <View style={IconRow}>
          <View style={IconContainer}>
            <Icon name="calendar" size={25} style={{ color: '#191919' }} />
          </View>
          <Text style={IconRowText}>{moment(Day).format('MMM Do YYYY')}</Text>
        </View>
        <View style={IconRow}>
          <View style={IconContainer}>
            <Icon name="clock" size={25} style={{ color: '#191919' }} />
          </View>
          <Text style={IconRowText}>{moment(Time).format('hA')}</Text>
        </View>
        <View style={IconRow}>
          <View style={IconContainer}>
            <Icon name="currency-usd" size={25} style={{ color: '#191919' }} />
          </View>
          <Text style={IconRowText}>{Price}</Text>
        </View>
        <View style={IconRow}>
          <View style={IconContainer}>
            <Icon name="face" size={25} style={{ color: '#191919' }} />
          </View>
          <Text style={IconRowText}>{AgeLimit}</Text>
        </View>
        <View style={IconRow}>
          <View style={IconContainer}>
            <Icon name="map-marker" size={25} style={{ color: '#191919' }} />
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
  }
};
export default Headliner;
