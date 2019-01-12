import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Animated,
  Easing,
  Dimensions
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import moment from 'moment';
import Calendar from 'react-native-calendar-select';
import Svg, { Circle, Rect, Line } from 'react-native-svg';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ContentLoader from 'rn-content-loader';
import { actions as Network } from '../../../network';
import { EventCard, DateSeparator } from '../components';
import { styles } from './styles';

const { GetEvents } = Network;
const { width } = Dimensions.get('window');
class Featured extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Featured Events',
    headerTitleStyle: {
      color: '#191919',
      fontSize: 24,
      fontWeight: '300',
      marginLeft: 10
    },
    headerStyle: {
      elevation: 0
    },
    headerLeft: null,
  });
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment().format('YYYYMMDD'),
      endDate: moment()
        .add(7, 'days')
        .format('YYYYMMDD'),
      CustomColor: [
        'rgb(255, 181, 5)',
        'rgb(124, 234, 230)',
        'rgb(224, 89, 89)',
        'rgb(164, 61, 237)',
        'rgb(95, 244, 155)'
      ]
    };
  }
  componentDidMount() {
    this.props.navigation.setParams({ handleFilter: this.openCalendar });
  }

  // Open Calendar
  openCalendar = () => {
    this.calendar && this.calendar.open();
  };
  // Set Border Color From State
  _getColor = () => {
    const color = this.state.CustomColor[
      Math.floor(Math.random() * this.state.CustomColor.length)
    ];
    return color;
  };
  confirmDate = ({
    startDate, endDate, startMoment, endMoment
  }) => {
    this.setState({
      startDate: startMoment,
      endDate: endMoment
    });
    const start = moment(startMoment).format('YYYY-MM-DD');
    const end = moment(endMoment).format('YYYY-MM-DD');
    this.props.GetEvents(start, end);
  };
  _renderItem = ({ item, index }) => {
    const borderColor = this._getColor();
    console.log(item.id);
    return (
      <View index={index}>
        <EventCard
          Contests={this.props.Contests}
          SoldOut={this.props.SoldOut}
          BorderColor={borderColor}
          StartDate={item.startDate}
          JumboImage={item.image.jumbo.path}
          Thumbnail={item.image.squareSmall.path}
          Price={item.ticketPrice}
          HeadLiner={item.headlinersName}
          AgeLimit={item.ageLimit}
          NextSceen={() =>
            this.props.navigation.navigate('Details', { item, borderColor, Contests:this.props.Contests })
          }
          EventStatus={item.eventStatus}
          EventId={item.id}
          Loaded={this.props.Loaded}
        />
      </View>
    );
  };
  _renderHeader = () => (
    <View style={{ marginBottom: 15 }}>
      <Text style={styles.DateTextStyle}>
        {moment(this.state.startDate).format('MMM Do')} &#8211;{' '}
        {moment(this.state.endDate).format('MMM Do')}
      </Text>
    </View>
  );
  render() {
<<<<<<< HEAD
=======
    console.log(this.props.Featured);
>>>>>>> feature/featured-events
    const { FlatListContainer } = styles;
    const color = {
      mainColor: '#E43F6F',
      subColor: '#ffffff'
    };
    const Today = moment().format('YYYYMMDD');
    const YearLater = moment()
      .add(1, 'years')
      .format('YYYYMMDD');
    if (this.props.Loaded) {
      return (
        <View style={{ backgroundColor:'#ffffff', flex:1 }}>
          <StatusBar backgroundColor="white" barStyle="dark-content" hidden={false} />
          <View style={[FlatListContainer]}>
            <FlatList
<<<<<<< HEAD
              data={this.props.Featured}
=======
              data={this.props.Events}
>>>>>>> feature/featured-events
              renderItem={this._renderItem}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => item.id.toString()}
              ListHeaderComponent={this._renderHeader}
            />
            <Calendar
              i18n="en"
              ref={(calendar) => {
              this.calendar = calendar;
            }}
              color={color}
              format="YYYYMMDD"
              minDate={Today}
              maxDate={YearLater}
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              onConfirm={this.confirmDate}
            />
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <StatusBar backgroundColor="white" barStyle="dark-content" />
          <ContentLoader>
            <Rect x="0" y="13" rx="4" ry="4" width="100" height="13" />
            <Rect x="0" y="37" rx="4" ry="4" width="50" height="8" />
            <Rect x="0" y="70" rx="5" ry="5" width="400" height="200" />
          </ContentLoader>
          <ContentLoader>
            <Rect x="0" y="13" rx="4" ry="4" width="100" height="13" />
            <Rect x="0" y="37" rx="4" ry="4" width="50" height="8" />
            <Rect x="0" y="70" rx="5" ry="5" width="400" height="200" />
          </ContentLoader>
        </View>
      );
    }
  }
}

const mapStateToProps = (state) => {
  const { Loaded, Events, Featured } = state.eventsReducer;
  const { Contests, SoldOut } = state.contestReducer;
  return {
    Loaded, Events, Contests, SoldOut,Featured
  };
};

export default connect(
  mapStateToProps,
  { GetEvents }
)(Featured);
