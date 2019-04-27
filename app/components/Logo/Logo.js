import React from 'react';
import { Animated, View, Text, ImageBackground, Keyboard, Platform } from 'react-native';
import logoImage from './images/logo.png';
import backgroundImage from './images/background.png';
import styles from './styles';
class Logo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newBackgroundWidth: new Animated.Value(styles.$backgroundImageWidth),
      newLogoWidth: new Animated.Value(styles.$logoImageWidth)
    };
    this.keyboardWillShow = this.keyboardWillShow.bind(this);
    this.keyboardWillHide = this.keyboardWillHide.bind(this);
  }
  componentDidMount() {
    const showName = Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow';
    const hideName = Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide';
    this.keyboardWillShowListener = Keyboard.addListener(showName, this.keyboardWillShow);
    this.keyboardWillHideListener = Keyboard.addListener(hideName, this.keyboardWillHide);
  }
  keyboardWillShow() {
    console.log('ready to Show keyboard');
    const { newBackgroundWidth, newLogoWidth } = this.state;
    Animated.parallel([
      Animated.timing(newBackgroundWidth, {
        toValue: styles.$smallBackgroundImageWidth,
        duration: 300
      }),
      Animated.timing(newLogoWidth, {
        toValue: styles.$smallLogoWidth,
        duration: 300
      })
    ]).start();
    console.log(this.state.newBackgroundWidth);
  }

  keyboardWillHide() {
    console.log('ready to show');
    console.log(this.state);
    const { newBackgroundWidth, newLogoWidth } = this.state;
    Animated.parallel([
      Animated.timing(newBackgroundWidth, {
        toValue: styles.$backgroundImageWidth,
        duration: 200
      }),
      Animated.timing(newLogoWidth, {
        toValue: styles.$logoImageWidth,
        duration: 200
      })
    ]).start();
  }
  render() {
    const { newBackgroundWidth, newLogoWidth } = this.state;
    const containerImageStyle = [
      styles.imageContainer,
      {
        width: newBackgroundWidth,
        height: newBackgroundWidth
      }
    ];
    const logoStyle = [
      styles.logoImage,
      {
        width: newLogoWidth
      }
    ];
    return (
      <View style={styles.container}>
        <Animated.View style={containerImageStyle}>
          <ImageBackground
            source={backgroundImage}
            resizeMode="contain"
            style={styles.backgroundImage}
          >
            <Animated.Image source={logoImage} resizeMode="contain" style={logoStyle} />
          </ImageBackground>
        </Animated.View>
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    );
  }
}

export default Logo;
