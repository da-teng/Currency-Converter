import EStyleSheet from 'react-native-extended-stylesheet';
import { StatusBar } from 'react-native';
export default EStyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    '@media android': {
      paddingTop: StatusBar.currentHeight
    }
  },
  gearContainer: {
    alignItems: 'flex-end',
    paddingHorizontal: 18
  },
  icon: {
    width: 18
  }
});
