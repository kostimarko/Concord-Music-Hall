import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';

import { styles } from './styles';
import ContestAnim from '../../../../assets/lottie/User_Enters_Contest.json';

const ContestButton = (props) => {
  const {
    ContestButtonContainer,
    LottieContainer,
    TextContainer,
    Header,
    Paragraph
  } = styles;
  return (
    <TouchableOpacity onPress={props.ContestPress}>
      <View style={ContestButtonContainer}>
        <View style={LottieContainer}>
          <LottieView
            ref={(animation) => {
          if (animation) {
            animation.play();
          }
        }}
            loop={true}
            source={ContestAnim}
          />
        </View>
        <View style={TextContainer}>
          <Text style={Header}>Enter Our Contest to Win</Text>
          <Text style={Paragraph}>Free Tickets</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default ContestButton;
