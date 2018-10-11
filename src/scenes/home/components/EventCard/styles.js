import { Platform, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  Image: {
    width: width - 20,
    height: 250,
    padding: 15,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    borderRadius: 20
  },
  HeadlinerTextStyle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5
  },
  PriceTextStyle: {
    fontSize: 18,
    color: '#ffffff',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5
  }
});
