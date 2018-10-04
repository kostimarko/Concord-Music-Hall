import { Platform, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    alignItems: 'center'
  },
  ButtonContainer: {
    backgroundColor: '#E43F6F',
    borderRadius: 15,
    width: width - 20,
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
  },
  HeaderStyle: {
    marginTop: 5,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  IconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ffffff',
    elevation: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
