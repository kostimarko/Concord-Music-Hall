import React, { Component } from "react";
import { connect } from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  FlatList,
  ScrollView,
  TouchableOpacity
} from "react-native";
import moment from "moment";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from "./styles";
import { Headliner } from "../components";

class EventDetails extends Component {
  static navigationOptions = ({ navigation }) => {
    const { HeadlinerInfo } = navigation.state.params.item;
    return {
      headerTitle: `${HeadlinerInfo.name}`,
      headerTitleStyle: {
        color: "#191919",
        fontSize: 24,
        fontWeight: "300",
        marginLeft: 10
      },
      headerStyle: {
        elevation: 0
      },

      headerRight: null
    };
  };
  componentDidMount() {
    console.log("componentMounted");
    console.log(this.props.navigation.state.params);
  }
  _renderDetails() {
    const {
      AgeLimit,
      TicketPrice,
      StartDate,
      HeadlinerInfo,
      VenueName,
      VenueAddress,
      VenueState,
      VenueCity,
      HeadlinerDesc,
      EventStatus
    } = this.props.navigation.state.params.item;
    const { borderColor } = this.props.navigation.state.params;
    const { AgeContainer, badgeText } = styles;
    return (
      <View style={{ padding: 15 }}>
        <Headliner
          HeadlinerName={HeadlinerInfo.name}
          Day={StartDate}
          Time={StartDate}
          HeadlinerDesc={HeadlinerInfo.eventDescription}
          VenueName={VenueName}
          VenueAddress={VenueAddress}
          VenueState={VenueState}
          VenueCity={VenueCity}
          HeadlinerDesc={HeadlinerDesc}
          Price={TicketPrice}
          AgeLimit={AgeLimit}
          Color={borderColor}
        />
      </View>
    );
  }
  _renderImageBackground(Image, EventStatus, TicketLink) {
    const { borderColor } = this.props.navigation.state.params;
    const {
      ImageStyle,
      ButtonContainer,
      ButtonText,
      ImageDetailsContainer,
      IconContainer,
      SoldOutImageContainer
    } = styles;
    if (EventStatus === "Sold Out") {
      return (
        <View style={[SoldOutImageContainer, { backgroundColor: borderColor }]}>
          <View style={ImageDetailsContainer}>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text
                style={{ color: "#ffffff", fontSize: 21, fontWeight: "700" }}
              >
                {EventStatus}
              </Text>
            </View>
          </View>
        </View>
      );
    } else {
      return (
        <ImageBackground
          source={{
            uri: Image.Large
          }}
          style={ImageStyle}
        >
          <View style={ImageDetailsContainer}>
            <View
              style={{
                flex: 1,
                alignItems: "flex-end",
                justifyContent: "flex-end"
              }}
            >
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("Buy", { TicketLink })
                }
              >
                <View
                  style={[ButtonContainer, { backgroundColor: borderColor }]}
                >
                  <Text style={ButtonText}>Buy Tickets</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      );
    }
  }
  render() {
    const {
      ImageStyle,
      ButtonContainer,
      ButtonText,
      ImageDetailsContainer,
      IconContainer,
      HeaderRow
    } = styles;

    const {
      Image,
      AgeLimit,
      TicketLink,
      EventStatus
    } = this.props.navigation.state.params.item;
    const { borderColor } = this.props.navigation.state.params;
    const { index } = this.props.navigation.state.params;
    if (this.props.loaded) {
      return (
        <ScrollView showsVerticalScrollIndicator={false}>
          <StatusBar backgroundColor="white" barStyle="dark-content" />
          <View style={{ backgroundColor: "#ffffff", flex: 1 }}>
            {this._renderImageBackground(Image, EventStatus, TicketLink)}
            {this._renderDetails()}
          </View>
        </ScrollView>
      );
    } else {
      return (
        <View>
          <Text>HI</Text>
        </View>
      );
    }
  }
}

const mapStateToProps = state => {
  const { loaded, Events } = state.eventsReducer;
  return { loaded, Events };
};

export default connect(mapStateToProps)(EventDetails);
