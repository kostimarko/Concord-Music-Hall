import { Platform, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  Image: {
    width: width / 2 - 10,
    height: width / 2 - 10
  },
  HeadlinerTextStyle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000000",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5
  },
  PriceTextStyle: {
    fontSize: 18,
    color: "#000000",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5
  },
  EventContainer: {
    width: width / 2 - 10,
    height: width / 2 - 10,
    borderWidth: 10,
    backgroundColor: "white",
    marginTop: 30
  }
});
