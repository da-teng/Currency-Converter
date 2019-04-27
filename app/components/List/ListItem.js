import React from "react";
import { connect } from "react-redux";
import {
  changeBaseCurrency,
  changeQuoteCurrency
} from "../../actions/currencies";
import { TouchableOpacity, Text, View } from "react-native";
import Separator from "./Separator";
import Icon from "./Icon";
import styles from "./styles";

class ListItem extends React.Component {
  handlePress = () => {
    if (this.props.text == "Themes") {
      this.props.pressToThemeScreen();
    } else if (this.props.theme) {
      console.log("theme choose to be finished");
    } else {
      console.log("you choose currency" + this.props.text);
      const currency = this.props.text;
      console.log("type is" + this.props.type);
      if (this.props.type == "base") {
        this.props.dispatch(changeBaseCurrency(currency));
        this.props.navigation.goBack();
      }
      if (this.props.type == "quote") {
        this.props.dispatch(changeQuoteCurrency(currency));
        this.props.navigation.goBack();
      }
    }
  };
  render() {
    return (
      <View>
        <TouchableOpacity style={styles.list} onPress={this.handlePress}>
          <Text style={styles.text}>{this.props.text}</Text>
          <Icon
            checked={this.props.chekced}
            bgColor={this.props.color}
            themed={this.props.theme}
          />
        </TouchableOpacity>
        <Separator />
      </View>
    );
  }
}

export default connect(null)(ListItem);
