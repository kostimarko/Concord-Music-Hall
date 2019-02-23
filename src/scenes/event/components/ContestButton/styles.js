import { StyleSheet, Platform, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  ContestButtonContainer: {
    flex: 1,
    backgroundColor: '#473bf0',
    borderRadius: 5,
    height: 100,
    flexDirection: 'row',
    marginBottom: 15,
    marginTop:25,
    padding:10
  },
  LottieContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  Header: { color: '#ffffff', fontSize: 18, fontWeight: '700' },
  Paragraph: { color: '#ffffff', fontSize: 18, fontWeight: '300' }
});
