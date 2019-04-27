import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';
const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;
export default EStyleSheet.create({
  container: {
    backgroundColor: '$lightGreen',
    flexDirection: 'row',
    //justifyContent: 'center',
    width: '90%',
    height: INPUT_HEIGHT,
    marginBottom: 20,
    borderRadius: BORDER_RADIUS
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS,
    paddingHorizontal: 8
  },
  separateLine: {
    width: StyleSheet.hairlineWidth,
    backgroundColor: '$border'
  },
  text: {
    fontSize: 20,
    fontWeight: '400',
    color: '$white'
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: '$inputText',
    height: INPUT_HEIGHT,
    paddingHorizontal: 8
  }
});
