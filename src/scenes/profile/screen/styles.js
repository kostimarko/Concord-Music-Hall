import { StyleSheet, Platform, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  SelectorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    flexWrap: 'wrap'
  },
  ButtonContainer: {
    alignItems: 'center',
    marginTop: 15
  },
  Button: {
    height: 50,
    backgroundColor: '#473bf0',
    width,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  ButtonText: {
    fontSize: 18,
    letterSpacing: 0.32,
    textAlign: 'center',
    color: '#ffffff'
  },
  CardContainer: {
    width: 100,
    height: 100,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#4a4a4a',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    padding: 15
  },
  TextStyle: {
    width: '100%',
    fontSize: 12,
    textAlign: 'center',
    color: '#4a4a4a',
    marginTop: 5,
    marginBottom: 5,
    fontWeight: '700'
  },
  SeperatorContainer: {
    height: 50,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  SeperatorText: {
    fontSize: 18,
    marginLeft: 15,
    justifyContent: 'flex-start',
    color: '#473bf0'
  }
});
