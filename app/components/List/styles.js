import EStyleSheet from "react-native-extended-stylesheet";
import { StyleSheet, Dimensions } from "react-native";
import { StatusBar } from "react-native";
export default EStyleSheet.create({
  icon: {
    backgroundColor: "$lightGreen"
  },
  list: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 15
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "$border"
  },
  themeCircle: {
    width: 30,
    height: 30,
    borderRadius: 15
  }
});
