import React, { Component } from "react";
import { StatusBar, KeyboardAvoidingView } from "react-native";
import { connect } from "react-redux";
import { Logo } from "../components/Logo";
import { Container } from "../components/Container";
import { ButtonWithInput } from "../components/TextInput";
import { ReverseButton } from "../components/Button";
import { Header } from "../components/Header";
import {
  swapCurrency,
  changeCurrencyAmount,
  initialLoading
} from "../actions/currencies";
const mapStateToProps = state => {
  console.log(state.currencies.conversion.amount);
  return {
    baseCurrency: state.currencies.baseCurrency,
    quoteCurrency: state.currencies.quoteCurrency,
    baseAmount: state.currencies.amount,
    conversionAmount: state.currencies.conversion.amount
  };
};
class Home extends Component {
  handleOnChangeText = text => {
    this.props.changeCurrencyAmount(text);
  };
  handleBaseButton = () => {
    this.props.navigation.navigate("CurrencyList", {
      title: "Base Currency",
      type: "base"
    });
  };

  handleQuoteButton = () => {
    this.props.navigation.navigate("CurrencyList", {
      title: "Quote Currency",
      type: "quote"
    });
  };

  handleGearPress = () => {
    console.log("ready");
    this.props.navigation.navigate("Options", { title: "Options" });
  };

  handleReveseButton = () => {
    this.props.swapCurrency();
  };

  componentDidMount() {
    this.props.initialLoading();
  }

  render() {
    console.log(this.props.baseCurrency);
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header press={this.handleGearPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <ButtonWithInput
            buttonText={this.props.baseCurrency || "AUD"}
            keyboardType="numeric"
            press={this.handleBaseButton}
            onChangeText={this.handleOnChangeText}
            value={this.props.baseAmount}
          />
          <ButtonWithInput
            buttonText={this.props.quoteCurrency || "CNY"}
            editable={false}
            press={this.handleQuoteButton}
            value={this.props.conversionAmount}
          />
        </KeyboardAvoidingView>
        <ReverseButton press={this.handleReveseButton} />
      </Container>
    );
  }
}
export default connect(
  mapStateToProps,
  { swapCurrency, changeCurrencyAmount, initialLoading }
)(Home);
