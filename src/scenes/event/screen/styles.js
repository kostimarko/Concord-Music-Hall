import { Platform, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  ImageStyle: {
    width: width,
    height: 400,
    flexDirection: 'column'
  },
  AgeContainer: {
    backgroundColor: '#000000',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    height: 30
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
    borderRadius: 25,
    width: 250,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  ButtonText: {
    fontSize: 21,
    fontWeight: '700',
    color: '#ffffff',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5
  },
  ImageDetailsContainer: {
    padding: 15,
    justifyContent: 'space-between',
    flex: 1
  },
  IconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    elevation: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  HeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1
  }
});
