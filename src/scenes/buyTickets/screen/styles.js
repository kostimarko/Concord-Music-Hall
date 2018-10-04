import { Platform, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  HeaderRow: {
    zIndex: 1000,
    height: 50,
    backgroundColor: '#ffffff'
  },
  IconContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#ffffff',
    elevation: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
