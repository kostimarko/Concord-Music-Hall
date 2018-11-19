import React, { PureComponent } from "react";
import { connect } from "react-redux";
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
} from "react-native";
import { NavigationActions } from "react-navigation";
import moment from "moment";
import Calendar from "react-native-calendar-select";
import Svg, { Circle, Rect } from "react-native-svg";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ContentLoader from "rn-content-loader";
import { actions as Network } from "../../../network";
import { EventCard, DateSeparator } from "../components";
import { styles } from "./styles";

const { getCurrentEvents, getAllEvents } = Network;
const AllEventsAction = NavigationActions.navigate({
  routeName: "AllEvents"
});
const { width } = Dimensions.get("window");
class Home extends PureComponent {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Concord Music Hall",
      headerTitleStyle: {
        color: "#191919",
        fontSize: 24,
        fontWeight: "300",
        marginLeft: 10
      },
      headerStyle: {
        elevation: 0
      },
      headerLeft: null,
      headerRight: (
        <TouchableOpacity onPress={navigation.getParam("handleFilter")}>
          <View style={styles.IconContainer}>
            <MaterialCommunityIcons
              name="filter-variant"
              size={25}
              color="#191919"
            />
          </View>
        </TouchableOpacity>
      )
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment().format("YYYYMMDD"),
      endDate: moment()
        .add(7, "days")
        .format("YYYYMMDD"),
      CustomColor: [
        "rgb(255, 181, 5)",
        "rgb(124, 234, 230)",
        "rgb(224, 89, 89)",
        "rgb(164, 61, 237)",
        "rgb(95, 244, 155)"
      ]
    };
    this._animated = new Animated.Value(0);
  }
  componentDidMount() {
    const start = moment().format("YYYY-MM-DD");
    const end = moment()
      .add(7, "days")
      .format("YYYY-MM-DD");
    this.props.getCurrentEvents(start, end, res => {
      Animated.timing(this._animated, {
        toValue: 1,
        duration: 800,
        easing: Easing.in(Easing.cubic)
      }).start();
    });
    this.props.navigation.setParams({ handleFilter: this.openCalendar });
  }
  _getColor = () => {
    let color = this.state.CustomColor[
      Math.floor(Math.random() * this.state.CustomColor.length)
    ];
    return color;
  };
  _GetAllEvents = () => {
    const { Events } = this.props;
    const { StartDate } = Events[Events.length - 1];
    this.props.getAllEvents(StartDate, res => {
      if (res) {
        this.props.navigation.dispatch(AllEventsAction);
      }
    });
  };
  confirmDate = ({ startDate, endDate, startMoment, endMoment }) => {
    this.setState({
      startDate: startMoment,
      endDate: endMoment
    });
    const start = moment(startMoment).format("YYYY-MM-DD");
    const end = moment(endMoment).format("YYYY-MM-DD");
    this.props.getCurrentEvents(start, end, res => {
      Animated.timing(this._animated, {
        toValue: 1,
        duration: 800,
        easing: Easing.in(Easing.cubic)
      }).start();
    });
  };
  openCalendar = () => {
    this.calendar && this.calendar.open();
  };
  _renderItem = ({ item, index }) => {
    let borderColor = this._getColor();
    const rowStyles = [
      {
        opacity: this._animated.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1]
        })
      },
      {
        transform: [
          {
            translateX: this._animated.interpolate({
              inputRange: [0, 1],
              outputRange: [width, 0]
            })
          }
        ]
      }
    ];
    return (
      <Animated.View style={rowStyles} index={index}>
        <EventCard
          BorderColor={borderColor}
          StartDate={item.StartDate}
          ImageSource={item.Image.Medium}
          Price={item.TicketPrice}
          HeadLiner={item.HeadlinerInfo.name}
          AgeLimit={item.AgeLimit}
          NextSceen={() =>
            this.props.navigation.navigate("Details", { item, borderColor })
          }
        />
      </Animated.View>
    );
  };
  render() {
    const { welcome, FlatListContainer } = styles;
    // It's an optional property, I use this to show the structure of customI18n object.
    let customI18n = {
      date: "MM / DD" // date format
    };
    let color = {
      mainColor: "#E43F6F",
      subColor: "#ffffff"
    };
    const Today = moment().format("YYYYMMDD");
    const YearLater = moment()
      .add(1, "years")
      .format("YYYYMMDD");

    if (this.props.loaded) {
      return (
        <View>
          <StatusBar backgroundColor="white" barStyle="dark-content" />
          <Animated.View style={[FlatListContainer]}>
            <FlatList
              data={this.props.Events}
              renderItem={this._renderItem}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => item.EventId.toString()}
            />
          </Animated.View>
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

const mapStateToProps = state => {
  const { loaded, Events } = state.eventsReducer;
  return { loaded, Events };
};

export default connect(
  mapStateToProps,
  { getCurrentEvents, getAllEvents }
)(Home);
