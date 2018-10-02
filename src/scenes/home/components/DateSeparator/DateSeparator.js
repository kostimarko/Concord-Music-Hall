import React from 'react';
import moment from 'moment';
import { View, Text, ImageBackground } from 'react-native';

import { styles } from './styles';

const DateSeparator = props => {
  const { StartDate, EventId } = props;
  return (
    <View style={{ marginTop: 5, marginBottom: 15 }}>
      <Text style={{ fontSize: 18, fontWeight: '700' }}>
        {moment(StartDate).format('MMM Do YYYY')}
      </Text>
      <Text style={{ fontSize: 18, fontWeight: '300' }}>
        {moment(StartDate).format('h:mm A')}
      </Text>
    </View>
  );
};

export default DateSeparator;
