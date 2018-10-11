import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  FlatList,
  ScrollView,
  TouchableOpacity,
  WebView
} from 'react-native';
import moment from 'moment';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './styles';
//import { Headliner } from '../components';

class BuyTickets extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Buy Tickets',
      headerTitleStyle: {
        color: '#191919',
        fontSize: 24,
        fontWeight: '300',
        marginLeft: 10
      },
      headerStyle: {
        elevation: 0
      },

      headerRight: null
    };
  };
  componentDidMount() {
    console.log('componentMounted');
    console.log(this.props.navigation.state.params.TicketLink);
  }
  render() {
    const { HeaderRow, IconContainer } = styles;
    const { TicketLink } = this.props.navigation.state.params;
    return (
      <View style={{ flex: 1 }}>
        <WebView source={{ uri: TicketLink }} />
      </View>
    );
  }
}
export default BuyTickets;
