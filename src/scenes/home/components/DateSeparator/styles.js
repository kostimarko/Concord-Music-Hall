import { Platform, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  Container: { marginTop: 5, marginBottom: 10 },
  DateTextStyle: { fontSize: 18, fontWeight: '700', color: '#191919' },
  TimeTextStyle: { fontSize: 18, fontWeight: '300', color: '#191919' }
});
