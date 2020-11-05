import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Pan } from './';
import { Worklets } from './';
import { Dashboard } from './';
import { Demo } from './';
import { Gesture } from './';

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Worklets" component={Worklets} />
        <Stack.Screen name="Demo" component={Demo} />
        <Stack.Screen name="Gesture" component={Gesture} />
        <Stack.Screen name="Pan" component={Pan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};