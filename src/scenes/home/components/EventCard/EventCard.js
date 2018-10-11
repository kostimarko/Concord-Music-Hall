import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';

import { styles } from './styles';

const EventCard = props => {
  const { ImageSource, Price, HeadLiner, NextSceeen } = props;
  const { Image, HeadlinerTextStyle, PriceTextStyle } = styles;
  return (
    <TouchableOpacity onPress={NextSceeen}>
      <View style={{ marginBottom: 45 }}>
        <View>
          <ImageBackground
            source={{ uri: ImageSource }}
            style={Image}
            imageStyle={Image}
          >
            <View style={{ backgroundColor: '#496DDB', borderRadius: 30 }}>
              <Text style={HeadlinerTextStyle}>{HeadLiner}</Text>
            </View>
            <View style={{ backgroundColor: '#000000', borderRadius: 30 }}>
              <Text style={PriceTextStyle}>{Price}</Text>
            </View>
          </ImageBackground>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default EventCard;
