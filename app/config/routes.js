import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import Options from "../screens/Options";
import Themes from "../screens/Theme";
import CurrencyList from "../screens/CurrencyList";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null
      }
    },
    CurrencyList: {
      screen: CurrencyList,
      navigationOptions: ({ navigation }) => ({
        title: navigation.state.params.title
      })
    },
    Options: {
      screen: Options,
      navigationOptions: ({ navigation }) => ({
        title: navigation.state.params.title
      })
    },
    Themes: {
      screen: Themes,
      navigationOptions: ({ navigation }) => ({
        title: navigation.state.params.title
      })
    }
  },
  {
    mode: "modal"
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);
