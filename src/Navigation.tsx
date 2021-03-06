import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Transitions from './';
import { Worklets } from './';
import { Dashboard } from './';
import { Custom } from './';
import { Gesture } from './';
import { Animations } from './';
import Accordion from './Accordion';
import CircularSlider from './CircularSlider';

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ header: () => null }}>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Worklets" component={Worklets} />
        <Stack.Screen name="Custom" component={Custom} />
        <Stack.Screen name="Gesture" component={Gesture} />
        <Stack.Screen name="Transitions" component={Transitions} />
        <Stack.Screen name="Animations" component={Animations} />
        <Stack.Screen name="Accordion" component={Accordion} />
        <Stack.Screen name="CircularSlider" component={CircularSlider} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
