import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';

import { styles } from './styles';

const EventCard = props => {
  const { ImageSource, Price, HeadLiner, NextSceeen } = props;
  const { Image } = styles;
  return (
    <TouchableOpacity onPress={NextSceeen}>
      <View style={{ marginBottom: 45 }}>
        <View>
          <ImageBackground source={{ uri: ImageSource }} style={Image}>
            <View style={{ backgroundColor: '#496DDB', borderRadius: 30 }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: '700',
                  color: '#ffffff',
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingTop: 5,
                  paddingBottom: 5
                }}
              >
                {HeadLiner}
              </Text>
            </View>
            <View style={{ backgroundColor: '#000000', borderRadius: 30 }}>
              <Text
                style={{
                  fontSize: 18,
                  color: '#ffffff',
                  paddingLeft: 15,
                  paddingRight: 15,
                  paddingTop: 5,
                  paddingBottom: 5
                }}
              >
                {Price}
              </Text>
            </View>
          </ImageBackground>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default EventCard;
