import { StyleSheet, Platform, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  CardContainer: {
    width,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    marginBottom: 15,
    padding: 5,
    marginTop:15,
  },
  TextContainer: {
    flexDirection: 'column',
    flex: 3,
    alignSelf: 'center',
    alignItems: 'center',
    paddingLeft: 15
  },
  LottieImageContainer: {
    width: 75,
    height: 75
  },
  EditProfileText: {
    alignSelf: 'flex-end',
    color: '#000000'
  },
  EditProfileContainer: {
    alignSelf: 'center',
    flex: 1
  },
  TextStyle: { fontSize: 18, fontWeight: '700', color: '#000000' }
});
