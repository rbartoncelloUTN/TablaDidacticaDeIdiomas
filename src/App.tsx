import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigation} from './navigation/StackNavigation.tsx';
import {useState} from 'react';
import {runOnJS} from 'react-native-reanimated';
import AnimatedSplashScreen from './components/AnimatedSplashScreen/AnimatedSplashScreen.tsx';

const App = () => {
  const [isSplashVisible, setSplashVisible] = useState(true);

  const handleFinishSplash = () => {
    runOnJS(() => setSplashVisible(false))(); // Usar runOnJS para actualizar el estado en React
  };

  return (
    <NavigationContainer>
      {isSplashVisible ? (
        <AnimatedSplashScreen onFinish={handleFinishSplash} />
      ) : (
        <StackNavigation />
      )}
    </NavigationContainer>
  );
};

export default App;
