import * as React from 'react';
import LoginScreen from '../screens/Login';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import {Header} from '../components';
import {useSessionStore} from '../state/session/slice.ts';
import Routes from './routes.ts';
import ThemesScreen from '../screens/Themes';
import GameScreen from '../screens/Game';

export type RootStackParams = {
  [Routes.LOGIN]: undefined;
  [Routes.HOME]: undefined;
  [Routes.THEMES]: undefined;
  [Routes.GAME]: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

const options = {
  header: (props: any) => <Header {...props} />,
};

export const StackNavigation = () => {
  const {token} = useSessionStore();

  return (
    <Stack.Navigator
      initialRouteName={token ? Routes.HOME : Routes.LOGIN}
      screenOptions={options}>
      <Stack.Screen
        options={{headerShown: false}}
        name={Routes.LOGIN}
        component={LoginScreen}
      />
      <Stack.Screen name={Routes.HOME} component={HomeScreen} />
      <Stack.Screen name={Routes.THEMES} component={ThemesScreen} />
      <Stack.Screen name={Routes.GAME} component={GameScreen} />
    </Stack.Navigator>
  );
};
