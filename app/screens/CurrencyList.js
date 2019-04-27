import React from "react";
import { FlatList, SafeAreaView, StatusBar } from "react-native";
import Currencies from "../data/currency";
import { ListItem } from "../components/List";

class currencyList extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <StatusBar />
        <FlatList
          data={Currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              navigation={this.props.navigation}
              type={this.props.navigation.state.params.type}
            />
          )}
          keyExtractor={({ item }) => {
            return item;
          }}
        />
      </SafeAreaView>
    );
  }
}
export default currencyList;
