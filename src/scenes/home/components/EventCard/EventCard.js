import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';

import { styles } from './styles';

const EventCard = props => {
  const { ImageSource, AgeLimit, HeadLiner, NextSceeen } = props;
  const { Image } = styles;
  return (
    <TouchableOpacity onPress={NextSceeen}>
      <View style={{ marginBottom: 25 }}>
        <View>
          <ImageBackground
            source={{ uri: ImageSource }}
            style={Image}
            imageStyle={{ borderRadius: 15 }}
          >
            <View style={{ backgroundColor: '#000000', borderRadius: 15 }}>
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
            <View style={{ backgroundColor: '#496DDB', borderRadius: 15 }}>
              <Text
                style={{
                  fontSize: 24,
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
          </ImageBackground>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default EventCard;
