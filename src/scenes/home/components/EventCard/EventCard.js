import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import moment from "moment";
import LottieView from 'lottie-react-native';
import ProgressiveImage from "../../../../components/ProgressiveImage";
import SoldOut from '../../../../assets/lottie/sold_out.json';
import { styles } from "./styles";

const EventCard = props => {
  const {
    JumboImage,
    Price,
    HeadLiner,
    NextSceen,
    BorderColor,
    StartDate,
    AgeLimit,
    EventStatus,
    EventId,
    Loaded,
    Thumbnail
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
            style={[SoldOutImageContainer]}
          >
            <LottieView
              ref={(animation) => {
                if (animation) {
                  animation.play();
                }
              }}
              source={SoldOut}
              loop={true}
            />
          </View>
          <View
            style={[
              EventContainer,
              { borderColor: '#ffb505', backgroundColor: '#ffb505' }
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
      <TouchableOpacity onPress={NextSceen} activeOpacity={0.5}>
        <View style={{ marginBottom: 45, flexDirection: "row" }}>
          <View>
            <ProgressiveImage
              JumboImage={JumboImage}
              style={Image}
              imageStyle={Image}
              Thumbnail={Thumbnail}
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
