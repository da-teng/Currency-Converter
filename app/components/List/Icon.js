import React from "react";
import { Image } from "react-native";
import styles from "./styles";
const Icon = ({ checked, themed, bgColor }) => {
  if (checked) {
    return (
      <Image
        source={require("./images/check.png")}
        style={styles.icon}
        resizeMode="contain"
      />
    );
  } else if (themed) {
    const themeStyle = [
      styles.themeCircle,
      {
        backgroundColor: bgColor
      }
    ];
    return <Image style={themeStyle} />;
  } else {
    return null;
  }
};

export default Icon;
