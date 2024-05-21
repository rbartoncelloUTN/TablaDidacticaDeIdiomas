import {FC, useEffect, useState} from 'react';
import styles from './styles';
import type {HomeScreenProps} from './types';
import {Container} from '../../components';
import {Image, TouchableOpacity, useWindowDimensions, View} from 'react-native';
import {ColorsIcon} from '../../assets/icons';
import Animals from '../../assets/images/Animals.png';
import Numbers from '../../assets/images/Numbers.png';
import useNavigator from '../../hooks/useNavigation.ts';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParams} from '../../navigation/StackNavigation.tsx';
import Routes from '../../navigation/routes.ts';
const ThemesScreen: FC<HomeScreenProps> = () => {
  const {navigate} = useNavigator();
  const {width, height} = useWindowDimensions();
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>(
    'portrait',
  );

  useEffect(() => {
    const isPortrait = height > width;
    setOrientation(isPortrait ? 'portrait' : 'landscape');
  }, [width, height]);

  return (
    <Container
      style={{backgroundColor: '#E0F7FA'}}
      accessibilityLabel="view-login-container">
      <View
        style={
          orientation === 'portrait' ? styles.container : styles.containerRow
        }>
        <TouchableOpacity style={styles.flagContainer}>
          <ColorsIcon style={styles.flag} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.flagContainer}>
          <Image source={Numbers} style={styles.flag} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.flagContainer}
          onPress={() => navigate(Routes.GAME)}>
          <Image source={Animals} style={styles.flag} />
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default ThemesScreen;
