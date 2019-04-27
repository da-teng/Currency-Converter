import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import Navigator from "./config/routes";
import { Provider } from "react-redux";
import store from "./config/store";
EStyleSheet.build({
  $primaryBlue: "#75d5ff",
  $primaryPurple: "#a65eff",
  $primaryGreen: "#54d898",
  $lightGreen: "#5effb0",
  $lightGray: "#F0F0F0",
  $border: "#979797",
  $white: "#ffffff",
  $inputText: "#797979"
});

export default () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);
