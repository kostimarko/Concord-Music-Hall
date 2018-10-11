import React from 'react';
import moment from 'moment';
import { View, Text, ImageBackground } from 'react-native';

import { styles } from './styles';

const DateSeparator = props => {
  const { StartDate, EventId } = props;
  const { Container, DateTextStyle, TimeTextStyle } = styles;
  return (
    <View style={Container}>
      <Text style={DateTextStyle}>
        {moment(StartDate).format('MMM Do YYYY')}
      </Text>
      <Text style={TimeTextStyle}>{moment(StartDate).format('h:mm A')}</Text>
    </View>
  );
};

export default DateSeparator;
