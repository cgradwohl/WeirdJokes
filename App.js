import 'react-native-gesture-handler';

import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/Home';
import Joke from './src/Joke';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Joke"
          component={Joke}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
