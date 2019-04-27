import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { ListItem } from "../components/List";
class Options extends React.Component {
  handleThemePress = () => {
    this.props.navigation.navigate("Themes", { title: "Theme Settings" });
  };
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <ListItem text="Themes" pressToThemeScreen={this.handleThemePress} />
        </ScrollView>
      </SafeAreaView>
    );
    s;
  }
}
export default Options;
