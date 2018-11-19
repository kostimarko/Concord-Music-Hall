import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import moment from "moment";

import { styles } from "./styles";

const EventCard = props => {
  const {
    ImageSource,
    Price,
    HeadLiner,
    NextSceen,
    BorderColor,
    StartDate,
    AgeLimit
  } = props;
  const {
    Image,
    HeadlinerTextStyle,
    EventContainer,
    DateTextStyle,
    TimeTextStyle,
    PriceTextStyle,
    AgeLimitTextStyle
  } = styles;

  return (
    <TouchableOpacity onPress={NextSceen}>
      <View style={{ marginBottom: 45, flexDirection: "row" }}>
        <View>
          <ImageBackground
            source={{ uri: ImageSource }}
            style={Image}
            imageStyle={Image}
          />
        </View>
        <View style={[EventContainer, { borderColor: BorderColor }]}>
          <View>
            <Text style={DateTextStyle}>
              {moment(StartDate).format("dddd MMM do")}
            </Text>
          </View>
          <View>
            <Text style={HeadlinerTextStyle}>{HeadLiner}</Text>
          </View>
          <View>
            <Text style={TimeTextStyle}>
              {moment(StartDate).format("h:mm a")}
            </Text>
          </View>
          <View>
            <Text style={PriceTextStyle}>{Price}</Text>
          </View>
          <View>
            <Text style={AgeLimitTextStyle}>{AgeLimit}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default EventCard;
