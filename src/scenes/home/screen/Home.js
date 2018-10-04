import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import moment from 'moment';
import Calendar from 'react-native-calendar-select';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Transition } from 'react-navigation-fluid-transitions';
import { actions as Network } from '../../../network';
import { EventCard, DateSeparator } from '../components';
import { styles } from './styles';

const { getCurrentEvents, getAllEvents } = Network;
const AllEventsAction = NavigationActions.navigate({
  routeName: 'AllEvents'
});
class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Concord Music Hall',
      headerTitleStyle: {
        color: '#646872',
        fontSize: 24,
        fontWeight: '300',
        marginLeft: 10
      },
      headerStyle: {
        elevation: 0
      },
      headerLeft: null,
      headerRight: (
        <TouchableOpacity onPress={navigation.getParam('handleFilter')}>
          <View style={styles.IconContainer}>
            <MaterialCommunityIcons
              name="filter-variant"
              size={25}
              color="#646872"
            />
          </View>
        </TouchableOpacity>
      )
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment().format('YYYYMMDD'),
      endDate: moment()
        .add(7, 'days')
        .format('YYYYMMDD')
    };
    this.confirmDate = this.confirmDate.bind(this);
    this.openCalendar = this.openCalendar.bind(this);
  }
  componentDidMount() {
    const start = moment().format('YYYY-MM-DD');
    const end = moment()
      .add(7, 'days')
      .format('YYYY-MM-DD');
    this.props.getCurrentEvents(start, end);
    this.props.navigation.setParams({ handleFilter: this.openCalendar });
  }
  _GetAllEvents = () => {
    const { Events } = this.props;
    const { StartDate } = Events[Events.length - 1];
    this.props.getAllEvents(StartDate, res => {
      if (res) {
        this.props.navigation.dispatch(AllEventsAction);
      }
    });
  };
  confirmDate({ startDate, endDate, startMoment, endMoment }) {
    this.setState({
      startDate: startMoment,
      endDate: endMoment
    });
    const start = moment(startMoment).format('YYYY-MM-DD');
    const end = moment(endMoment).format('YYYY-MM-DD');
    this.props.getCurrentEvents(start, end);
  }
  openCalendar() {
    this.calendar && this.calendar.open();
  }
  _renderItem = ({ item, index }) => {
    return (
      <View>
        <DateSeparator StartDate={item.StartDate} EventId={item.EventId} />
        <Transition shared={`${index}`}>
          <EventCard
            ImageSource={item.Image.Medium}
            Price={item.TicketPrice}
            HeadLiner={item.HeadlinerInfo.name}
            NextSceeen={() =>
              this.props.navigation.navigate('Details', { item, index })
            }
          />
        </Transition>
      </View>
    );
  };
  render() {
    const { welcome } = styles;
    // It's an optional property, I use this to show the structure of customI18n object.
    let customI18n = {
      date: 'MM / DD' // date format
    };
    let color = {
      mainColor: '#E43F6F',
      subColor: '#ffffff'
    };
    const Today = moment().format('YYYYMMDD');
    const YearLater = moment()
      .add(1, 'years')
      .format('YYYYMMDD');
    if (this.props.loaded) {
      return (
        <View>
          <StatusBar backgroundColor="white" barStyle="dark-content" />
          <View style={{ padding: 10, backgroundColor: '#ffffff' }}>
            <FlatList
              data={this.props.Events}
              renderItem={this._renderItem}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => item.EventId.toString()}
            />
          </View>
          <Calendar
            i18n="en"
            ref={calendar => {
              this.calendar = calendar;
            }}
            customI18n={customI18n}
            color={color}
            format="YYYYMMDD"
            minDate={Today}
            maxDate={YearLater}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onConfirm={this.confirmDate}
          />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
        </View>
      );
    }
  }
}

const mapStateToProps = state => {
  const { loaded, Events } = state.eventsReducer;
  return { loaded, Events };
};

export default connect(
  mapStateToProps,
  { getCurrentEvents, getAllEvents }
)(Home);
