import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');
const flagWidth = width / 3;
const flagHeight = height / 6;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#E0F7FA', // Fondo amigable y claro
    padding: 10,
    //gap: 10,
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
    padding: 20,
  },
  flag: {
    width: flagWidth,
    height: flagHeight,
    //resizeMode: 'stretch',
  },
});
