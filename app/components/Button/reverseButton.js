import { View, TouchableHighlight, Text, Image } from "react-native";
import React from "react";
import reverseIcon from "./images/icon.png";
import styles from "./styles";
const reverseButton = props => {
  return (
    <TouchableHighlight onPress={props.press}>
      <View style={styles.buttonContainer}>
        <Image source={reverseIcon} />
        <Text style={styles.text}>Reverse Currencies</Text>
      </View>
    </TouchableHighlight>
  );
};

export default reverseButton;
