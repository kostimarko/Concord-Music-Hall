import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";

import { styles } from "./styles";

const EventCard = props => {
  const { ImageSource, Price, HeadLiner, NextSceen, BorderColor } = props;
  const { Image, HeadlinerTextStyle, PriceTextStyle, EventContainer } = styles;

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
            <Text style={HeadlinerTextStyle}>{HeadLiner}</Text>
          </View>
          <View>
            <Text style={PriceTextStyle}>{Price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default EventCard;
