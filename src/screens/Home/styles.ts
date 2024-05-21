import {Dimensions, StyleSheet} from 'react-native';
import {ScreenWidth} from '@rneui/base';
import colors from '../../theme/base/colors.ts';

const {width, height} = Dimensions.get('window');
const flagWidth = width / 2;
const flagHeight = height / 4;
const flagHeightH = height / 6;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.brandPrimary,
    //maxHeight: height - 85,
  },
  containerRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F7FA', // Fondo amigable y claro
    padding: 10,
    gap: 10,
  },

  flagContainer: {
    width: flagHeightH * 2,
    height: flagHeightH,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15, // Bordes redondeados
    backgroundColor: '#FFF9C4', // Fondo amarillo claro para contenedores de banderas
    padding: 20,
  },
  flag: {
    width: '100%',
    height: '100%',
    borderRadius: 10, // Bordes redondeados para las banderas
    resizeMode: 'stretch',
    borderWidth: 2,
  },

  item: {
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#1380d9',
    backgroundColor: '#58ec03',
    borderRadius: 10,
    margin: 8,
    padding: 2,
    height: 165,
    width: 155,
  },

  itemH: {
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#1380d9',
    backgroundColor: '#58ec03',
    borderRadius: 10,
    margin: 8,
    padding: 2,
    height: 120,
    width: 195,
  },

  list: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'green',
  },
  listH: {
    justifyContent: 'center',
    alignItems: 'center',
    //width: height,
    flexWrap: 'wrap',
  },
});
