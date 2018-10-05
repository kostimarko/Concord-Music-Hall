import { Platform, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  Image: {
    width: width - 20,
    height: 250,
    padding: 15,
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  }
});
