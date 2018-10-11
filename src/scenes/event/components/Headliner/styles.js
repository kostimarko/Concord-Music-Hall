import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  HeaderText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#191919',
    marginBottom: 5
  },
  HeadlinerText: {
    fontSize: 36,
    color: '#496DDB',
    fontWeight: 'bold'
  },
  IconContainer: {
    width: 25,
    height: 25,
    marginRight: 10
  },
  IconRow: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 15
  },
  IconRowText: {
    fontSize: 21,
    color: '#191919',
    alignSelf: 'flex-start',
    justifyContent: 'center'
  },
  AddressContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  descText: {
    marginTop: 15,
    fontSize: 15,
    color: '#191919',
    marginBottom: 45
  },
  SupportContainer: {
    marginTop: 45
  }
});
