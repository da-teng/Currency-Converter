import React from "react";
import { Image, TouchableOpacity, SafeAreaView } from "react-native";
import gear from "./images/gear.png";
import styles from "./styles";
const Header = props => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.gearContainer} onPress={props.press}>
        <Image source={gear} style={styles.icon} resizeMode="contain" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Header;
