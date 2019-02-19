import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './styles';

const ProfileCard = (props) => {
  const {
    CardContainer,
    TextContainer,
    EditProfileContainer,
    EditProfileText,
    TextStyle
  } = styles;
  const { Animation, TextDetails, OnPress } = props;
  return (
    <TouchableOpacity onPress={OnPress}>
      <View style={CardContainer}>
        <View>
          <LottieView
            style={{ width: 60, height: 60 }}
            ref={(animation) => {
              if (animation) {
                animation.play();
              }
            }}
            loop={false}
            source={Animation}
          />
        </View>
        <View style={TextContainer}>
          <Text numberOfLines={1} style={TextStyle}>
            {TextDetails}
          </Text>
        </View>
        <View style={EditProfileContainer}>
          <Icon name="chevron-right" size={40} style={EditProfileText} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default ProfileCard;
