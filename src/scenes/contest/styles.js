import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#473BF0' },
  lottieContainer: {
    width,
    height: width
  },
  titleText: {
    fontSize: 18,
    color: '#ffffff'
  },
  titleTextContainer: {
    padding: 20,
    alignItems: 'center'
  },
  boldText: {
    fontWeight: 'bold'
  },
  ButtonContainer: {
    alignItems: 'center',
    marginTop: 15
  },
  Button: {
    height: 50,
    backgroundColor: '#1abc9c',
    width: width - 25,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 50,
    alignSelf: 'center'
  },
  ButtonText: {
    fontSize: 18,
    letterSpacing: 0.32,
    textAlign: 'center',
    color: '#ffffff'
  },
  LottieContainer: {
    alignSelf: 'center',
    width: width - 100,
    height: width - 100
  }
});
