import React from "react";
import { SafeAreaView, ScrollView } from "react-native";

import { ListItem } from "../components/List";
const Theme = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <ListItem text="Blue" color="#75d5ff" theme={true} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Theme;
