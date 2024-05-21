import {Dimensions, StyleSheet} from 'react-native';
import {ScreenWidth} from '@rneui/base';
import colors from '../../theme/base/colors.ts';

const {width, height} = Dimensions.get('window');
const flagWidth = width / 2;
const flagHeight = height / 4;
const flagHeightH = height / 6;

export default StyleSheet.create({
  speedDial: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: colors.brandSecondary,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  left: {
    left: 20,
  },

  actionsContainer: {
    position: 'absolute',
    bottom: 90, // Ajusta esto según sea necesario
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderWidth: 1,
    borderRadius: 50,
    width: width - 60,
    paddingVertical: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    elevation: 50,
  },
  actionButton: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    //marginRight: 10,
  },
  actionSelected: {
    backgroundColor: 'green',
  },
  actionIcon: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});
