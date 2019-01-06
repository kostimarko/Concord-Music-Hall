import React, { PureComponent } from 'react';
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
  WebView,
  ActivityIndicator
} from 'react-native';
import moment from 'moment';
import Svg, { Rect } from 'react-native-svg';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './styles';

class BuyTickets extends PureComponent {
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

  _renderLoading = () => {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  };

  render() {
    const { HeaderRow, IconContainer } = styles;
    const { ticketPurchaseUrl } = this.props.navigation.state.params;
    return (
      <View style={{ flex: 1 }}>
        <WebView
          source={{ uri: ticketPurchaseUrl }}
          startInLoadingState
          renderLoading={this._renderLoading}
        />
      </View>
    );
  }
}
export default BuyTickets;
