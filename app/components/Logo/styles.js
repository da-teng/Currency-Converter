import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
const imageWidth = Dimensions.get('window').width / 2;
export default EStyleSheet.create({
  $backgroundImageWidth: imageWidth,
  $logoImageWidth: imageWidth / 2,
  $smallBackgroundImageWidth: imageWidth / 2,
  $smallLogoWidth: imageWidth / 4,
  container: {
    alignItems: 'center'
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '$backgroundImageWidth',
    height: '$backgroundImageWidth'
  },
  backgroundImage: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    flex: 1
  },

  logoImage: {
    width: '$logoImageWidth',
    height: '$logoImageWidth'
  },
  text: {
    marginTop: 20,
    color: '$white',
    fontWeight: '600',
    fontSize: 26,
    marginBottom: 10
  }
});
