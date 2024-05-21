import React, {FC, useEffect, useRef, useState} from 'react';
import type {HomeScreenProps} from './types';
import Sound from 'react-native-sound';
import {
  FlatList,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import styles from './styles.ts';

const audioMap = {
  dog: require('../../assets/audios/animals/dog-english.mp3'),
  cat: require('../../assets/audios/animals/cat-english.mp3'),
  horse: require('../../assets/audios/animals/horse-english.mp3'),
  lion: require('../../assets/audios/animals/lion-english.mp3'),
  wolf: require('../../assets/audios/animals/wolf-english.mp3'),
};

const imageMap = {
  dog: require('../../assets/images/animals/dog.png'),
  cat: require('../../assets/images/animals/cat.png'),
  horse: require('../../assets/images/animals/horse.png'),
  lion: require('../../assets/images/animals/lion.png'),
  wolf: require('../../assets/images/animals/wolf.png'),
};

const data = [
  {key: 'cat', audio: audioMap.cat, image: imageMap.cat},
  {key: 'dog', audio: audioMap.dog, image: imageMap.dog},
  {key: 'horse', audio: audioMap.horse, image: imageMap.horse},
  {key: 'lion', audio: audioMap.lion, image: imageMap.lion},
  {key: 'wolf', audio: audioMap.wolf, image: imageMap.wolf},
];

const GameScreen: FC<HomeScreenProps> = () => {
  const soundRef = useRef<Sound | null>(null);
  const {width, height} = useWindowDimensions();
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>(
    'portrait',
  );

  useEffect(() => {
    const isPortrait = height > width;
    setOrientation(isPortrait ? 'portrait' : 'landscape');
  }, [width, height]);

  const playSound = (dogAudioPath: string) => {
    //onst dogAudioPath = require(`../../assets/audios/animals/${path}.mp3`); // Verifica que la ruta sea correcta
    console.log(dogAudioPath);

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
    <TouchableOpacity onPress={() => playSound(item.audio)} style={styles.item}>
      <Image source={item.image} style={styles.flag} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal={orientation === 'landscape'}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        numColumns={orientation !== 'landscape' ? 2 : undefined}
        key={orientation !== 'landscape' ? 'two-columns' : 'three-columns'}
        contentContainerStyle={
          orientation !== 'landscape' ? styles.list : styles.listH
        }
      />
    </View>
  );
};

export default GameScreen;
