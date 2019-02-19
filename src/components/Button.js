import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  ButtonStyle:{
    width:width - 20,
  }
});

const Button = props => (
  <TouchableOpacity onPress={props.OnPress}>
    <View style={[props.style, styles.ButtonStyle]}>
      <Text style={[props.textStyle]}>{props.ButtonText}</Text>
    </View>
  </TouchableOpacity>
);
export default Button;
