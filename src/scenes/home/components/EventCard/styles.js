import { Platform, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  Image: {
    width: width / 2 - 10,
    height: width / 2 - 10
  },
  DateTextStyle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#000000"
  },
  TimeTextStyle: {
    color: "#000000",
    fontSize: 15,
    marginTop: 15,
    fontWeight: "700"
  },
  HeadlinerTextStyle: {
    fontSize: 24,
    fontWeight: "300",
    color: "#000000"
  },
  PriceTextStyle: {
    color: "#000000",
    fontSize: 15,
    fontWeight: "300"
  },
  AgeLimitTextStyle: {
    color: "#000000",
    fontSize: 15,
    marginTop: 15,
    fontWeight: "700"
  },
  EventContainer: {
    width: width / 2 - 10,
    height: width / 2 - 10,
    borderWidth: 10,
    backgroundColor: "white",
    marginTop: 30,
    paddingLeft: 10,
    paddingTop: 15,
    paddingRight: 10,
    paddingBottom: 15
  }
});
