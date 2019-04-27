import React, { Component } from "react";
import { View, TouchableHighlight, TextInput, Text } from "react-native";
import styles from "./styles";
export default class ButtonWithInput extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.buttonContainer}
          onPress={this.props.press}
        >
          <Text style={styles.text}>{this.props.buttonText}</Text>
        </TouchableHighlight>
        <View style={styles.separateLine} />
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          {...this.props}
        />
      </View>
    );
  }
}
