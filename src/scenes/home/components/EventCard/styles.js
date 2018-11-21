import { Platform, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  Image: {
    width: width / 2 - 10,
    height: width / 2 - 10
  },
  SoldOutImageContainer: {
    width: width / 2 - 10,
    height: width / 2 - 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  DateTextStyle: {
    fontSize: 15,
    fontWeight: "700"
  },
  TimeTextStyle: {
    fontSize: 15,
    marginTop: 15,
    fontWeight: "700"
  },
  HeadlinerTextStyle: {
    fontSize: 24,
    fontWeight: "300"
  },
  PriceTextStyle: {
    fontSize: 15,
    fontWeight: "300"
  },
  AgeLimitTextStyle: {
    fontSize: 15,
    marginTop: 15,
    fontWeight: "700"
  },
  EventContainer: {
    width: width / 2 - 10,
    height: width / 2 - 10,
    borderWidth: 10,
    marginTop: 30,
    paddingLeft: 10,
    paddingTop: 15,
    paddingRight: 10,
    paddingBottom: 15
  }
});
