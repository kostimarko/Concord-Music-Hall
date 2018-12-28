import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import moment from "moment";
import ProgressiveImage from "../../../../components/ProgressiveImage";
import { styles } from "./styles";

const EventCard = props => {
  const {
    ImageSource,
    Price,
    HeadLiner,
    NextSceen,
    BorderColor,
    StartDate,
    AgeLimit,
    EventStatus,
    EventId,
    Loaded
  } = props;
  const {
    Image,
    HeadlinerTextStyle,
    EventContainer,
    DateTextStyle,
    TimeTextStyle,
    PriceTextStyle,
    AgeLimitTextStyle,
    SoldOutImageContainer
  } = styles;
  if (EventStatus === "Sold Out") {
    return (
      <TouchableOpacity onPress={NextSceen}>
        <View style={{ marginBottom: 45, flexDirection: "row" }}>
          <View
            style={[SoldOutImageContainer, { backgroundColor: BorderColor }]}
          >
            <Text style={{ color: "white", fontSize: 24, fontWeight: "700" }}>
              {EventStatus}
            </Text>
          </View>
          <View
            style={[
              EventContainer,
              { borderColor: BorderColor, backgroundColor: BorderColor }
            ]}
          >
            <View>
              <Text style={[DateTextStyle, { color: "#ffffff" }]}>
                {moment(StartDate).format("dddd MMM Do")}
              </Text>
            </View>
            <View>
              <Text style={[HeadlinerTextStyle, { color: "#ffffff" }]} numberOfLines={2}>
                {HeadLiner}
              </Text>
            </View>
            <View>
              <Text style={[TimeTextStyle, { color: "#ffffff" }]}>
                {moment(StartDate).format("h:mm a")}
              </Text>
            </View>
            <View>
              <Text style={[PriceTextStyle, { color: "#ffffff" }]}>
                {Price}
              </Text>
            </View>
            <View>
              <Text style={[AgeLimitTextStyle, { color: "#ffffff" }]}>
                {AgeLimit}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity onPress={NextSceen}>
        <View style={{ marginBottom: 45, flexDirection: "row" }}>
          <View>
            <ProgressiveImage
              source={{ uri: ImageSource }}
              style={Image}
              imageStyle={Image}
            />
          </View>
          <View
            style={[
              EventContainer,
              { borderColor: BorderColor, backgroundColor: "white" }
            ]}
          >
            <View>
              <Text style={[DateTextStyle, { color: "#000000" }]}>
                {moment(StartDate).format("dddd MMM Do")}
              </Text>
            </View>
            <View>
              <Text style={[HeadlinerTextStyle, { color: "#000000" }]} numberOfLines={2}>
                {HeadLiner}
              </Text>
            </View>
            <View>
              <Text style={[TimeTextStyle, { color: "#000000" }]}>
                {moment(StartDate).format("h:mm a")}
              </Text>
            </View>
            <View>
              <Text style={[PriceTextStyle, { color: "#000000" }]}>
                {Price}
              </Text>
            </View>
            <View>
              <Text style={[AgeLimitTextStyle, { color: "#000000" }]}>
                {AgeLimit}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
};

export default EventCard;
