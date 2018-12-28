import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Text,
  View,
  ImageBackground,
  StatusBar,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { styles } from "./styles";
import { Headliner } from "../components";
import ProgressiveImage from "../../../components/ProgressiveImage";

class EventDetails extends Component {
  static navigationOptions = ({ navigation }) => {
    const { headlinersName } = navigation.state.params.item;
    return {
      headerTitle: `${headlinersName}`,
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
  _renderDetails() {
    const {headlinersName,startDate, headliners, venue,ticketPrice,ageLimit} = this.props.navigation.state.params.item;
    const { borderColor } = this.props.navigation.state.params;
    return (
      <View style={{ padding: 15 }}>
        <Headliner
          HeadlinerName={headlinersName}
          Day={startDate}
          Time={startDate}
          HeadlinerDesc={headliners["0"].eventDescription}
          VenueName={venue.name}
          VenueAddress={venue.address1}
          VenueState={venue.stateProvince}
          VenueCity={venue.city}
          Price={ticketPrice}
          AgeLimit={ageLimit}
          Color={borderColor}
        />
      </View>
    );
  }
  _renderImageBackground(image, eventStatus, ticketPurchaseUrl) {
    const { borderColor } = this.props.navigation.state.params;
    const {
      ImageStyle,
      ButtonContainer,
      ButtonText,
      ImageDetailsContainer,
      SoldOutImageContainer
    } = styles;
    if (eventStatus === "Sold Out") {
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
                {eventStatus}
              </Text>
            </View>
          </View>
        </View>
      );
    } else {
      return (
        <ImageBackground
          source={{
            uri: image.jumbo.path
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
                  this.props.navigation.navigate("Buy", { ticketPurchaseUrl })
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
    const { image, ticketPurchaseUrl,eventStatus,headliners } = this.props.navigation.state.params.item;
    const {urlSoundcloud} = headliners["0"];
    console.log(this.props.navigation.state.params.item)
    if (this.props.Loaded) {
      return (
        <ScrollView showsVerticalScrollIndicator={false}>
          <StatusBar backgroundColor="white" barStyle="dark-content" />
          <View style={{ backgroundColor: "#ffffff", flex: 1 }}>
            {this._renderImageBackground(image,eventStatus,ticketPurchaseUrl)}
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
  const { Loaded, Events } = state.eventsReducer;
  return { Loaded, Events };
};

export default connect(mapStateToProps)(EventDetails);
