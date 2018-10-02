import { Platform, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  ImageStyle: {
    width: width,
    height: 400,
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  AgeContainer: {
    backgroundColor: '#000000',
    borderRadius: 15,
    alignItems: 'center'
  },
  badgeText: {
    fontSize: 18,
    color: '#ffffff',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5
  },
  ButtonContainer: {
    backgroundColor: '#496DDB',
    borderRadius: 15,
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  ButtonText: {
    fontSize: 21,
    color: '#ffffff',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5
  }
});
