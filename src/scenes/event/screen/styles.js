import { Platform, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  ImageStyle: {
    width: width,
    height: 400,
    alignItems: 'flex-end'
  }
});
