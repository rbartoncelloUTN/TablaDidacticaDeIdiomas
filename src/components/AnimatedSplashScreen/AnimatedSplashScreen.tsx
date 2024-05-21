import React, {useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
import SplashScreen from 'react-native-splash-screen';

const AnimatedSplashScreen = ({onFinish}: {onFinish: () => void}) => {
  const logoScale = useSharedValue(0);
  const textFadeIn = useSharedValue(0);

  useEffect(() => {
    SplashScreen.hide();

    logoScale.value = withTiming(
      1,
      {duration: 1000, easing: Easing.out(Easing.cubic)},
      () => {
        textFadeIn.value = withTiming(
          1,
          {duration: 700, easing: Easing.inOut(Easing.ease)},
          () => {
            if (onFinish) {
              runOnJS(onFinish)();
            }
          },
        );
      },
    );
  }, []);

  const animatedLogoStyle = useAnimatedStyle(() => ({
    transform: [{scale: logoScale.value}],
    opacity: logoScale.value,
  }));

  const animatedTopTextStyle = useAnimatedStyle(() => ({
    opacity: textFadeIn.value,
    transform: [{translateX: textFadeIn.value * -15}],
  }));

  const animatedBottomTextStyle = useAnimatedStyle(() => ({
    opacity: textFadeIn.value,
    transform: [{translateX: textFadeIn.value * 15}],
  }));

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.topText, animatedTopTextStyle]}>
        Bartoncello Ricardo José
      </Animated.Text>
      <Animated.View style={[styles.iconContainer, animatedLogoStyle]}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.icon}
        />
      </Animated.View>
      <Animated.Text style={[styles.bottomText, animatedBottomTextStyle]}>
        PPS - 2024 - 2 - Tabla didáctica de idiomas
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#37a92b',
    padding: 20,
  },
  iconContainer: {
    backgroundColor: '#fff',
    borderRadius: 100,
    padding: 40,
    elevation: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  icon: {
    width: 140,
    height: 140,
  },
  topText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#F5F5F5',
    marginBottom: 40,
    fontFamily: 'serif',
    textAlign: 'left',
    width: '100%',
  },
  bottomText: {
    fontSize: 22,
    fontWeight: '400',
    color: '#1380d9',
    marginTop: 40,
    fontFamily: 'sans-serif',
    textAlign: 'right',
    width: '100%',
  },
});

export default AnimatedSplashScreen;
