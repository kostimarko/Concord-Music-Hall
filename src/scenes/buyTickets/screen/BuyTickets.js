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
import { Transition } from 'react-navigation-fluid-transitions';
import { styles } from './styles';
//import { Headliner } from '../components';

class BuyTickets extends Component {
  componentDidMount() {
    console.log('componentMounted');
    console.log(this.props.navigation.state.params.TicketLink);
  }
  render() {
    const { HeaderRow, IconContainer } = styles;
    const { TicketLink } = this.props.navigation.state.params;
    return (
      <View style={{ flex: 1 }}>
        <View style={HeaderRow}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <View style={styles.IconContainer}>
              <MaterialCommunityIcons
                name="arrow-left"
                size={25}
                color="#646872"
              />
            </View>
          </TouchableOpacity>
        </View>
        <WebView source={{ uri: TicketLink }} />
      </View>
    );
  }
}
export default BuyTickets;
