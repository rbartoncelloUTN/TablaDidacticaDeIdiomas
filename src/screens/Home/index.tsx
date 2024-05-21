import React, {FC, useEffect, useRef, useState} from 'react';
import styles from './styles';
import type {HomeScreenProps} from './types';
import {Container} from '../../components';
import {
  FlatList,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import SpeedDial from '../../components/SpeedDial';
import Sound from 'react-native-sound';
import {data, languages, themes} from './data.ts';
import {Languages, OptionsGame, Themes} from './interefaces.ts';
import colors from '../../theme/base/colors.ts';

const HomeScreen: FC<HomeScreenProps> = () => {
  const soundRef = useRef<Sound | null>(null);
  const [game, setGame] = useState<OptionsGame>({
    language: Languages.EN,
    theme: Themes.ANIMALS,
  });

  const {width, height} = useWindowDimensions();
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>(
    'portrait',
  );

  console.log({
    height: height,
    width: width,
  });

  useEffect(() => {
    const isPortrait = height > width;
    setOrientation(isPortrait ? 'portrait' : 'landscape');
  }, [width, height]);

  const handleChangeLanguage = (language: Languages) => {
    console.log({language});
    setGame({...game, language: language});
    console.log({game});
  };

  const handleChangeTheme = (theme: Themes) => {
    console.log({theme});
    setGame({...game, theme: theme});
    console.log({game});
  };

  const playSound = (dogAudioPath: string) => {
    if (soundRef.current) {
      soundRef.current.stop(() => {
        soundRef.current?.release();
        soundRef.current = null;

        // Luego de liberar el sonido actual, cargar y reproducir el nuevo sonido
        loadAndPlaySound(dogAudioPath);
      });
    } else {
      // Si no hay sonido reproduciéndose, simplemente cargar y reproducir el nuevo sonido
      loadAndPlaySound(dogAudioPath);
    }
  };

  const loadAndPlaySound = (audioPath: any) => {
    soundRef.current = new Sound(audioPath, error => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      soundRef.current?.play(success => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
        // Libera el sonido una vez que se haya reproducido completamente
        soundRef.current?.release();
        soundRef.current = null;
      });
    });
  };

  const renderItem = ({item}: any) => (
    <TouchableOpacity
      onPress={() => playSound(item.audio)}
      style={orientation === 'landscape' ? styles.itemH : styles.item}>
      <Image source={item.image} style={styles.flag} />
      {/*<Text>{item.image}</Text>*/}
    </TouchableOpacity>
  );

  return (
    <Container style={{backgroundColor: colors.brandPrimary}}>
      <View style={styles.container}>
        {orientation === 'landscape' ? (
          <FlatList
            data={data(game)}
            renderItem={renderItem}
            numColumns={3}
            keyExtractor={(item, index) => index.toString()}
            key={'three-columns'}
            //contentContainerStyle={[styles.listH, {backgroundColor: 'red', width: 500}]}
            contentContainerStyle={styles.list}
          />
        ) : (
          <FlatList
            data={data(game)}
            renderItem={renderItem}
            keyExtractor={item => item.key}
            numColumns={2}
            key={'two-columns'}
            contentContainerStyle={styles.list}
          />
        )}
      </View>
      <SpeedDial
        data={languages}
        numberSelected={2}
        left={true}
        onPress={handleChangeLanguage}
      />
      <SpeedDial data={themes} numberSelected={2} onPress={handleChangeTheme} />
    </Container>
  );
};

export default HomeScreen;
