import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');
const flagWidth = width / 2 - 20;
const flagHeight = (height - 100) / 3;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F7FA', // Fondo amigable y claro
    width: '100%',
  },
  containerRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#E0F7FA', // Fondo amigable y claro
    padding: 10,
    gap: 10,
  },

  flagContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15, // Bordes redondeados
    backgroundColor: '#FFF9C4', // Fondo amarillo claro para contenedores de banderas
    //padding: 20,
  },
  flag: {
    width: flagWidth,
    height: flagHeight,
    resizeMode: 'stretch',
  },
  item: {
    //flex: 1,
    //margin: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    margin: 8,
    padding: 2,
  },
  list: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'green',
  },
  listH: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'green',
  },
});
