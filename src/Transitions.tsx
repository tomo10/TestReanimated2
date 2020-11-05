import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Button, StyleGuide, cards } from './components';

import AnimatedCard from './AnimatedCard';
import {
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StyleGuide.palette.background,
    justifyContent: 'flex-end',
  },
});

const useSpring = (state) => {
  const value = useSharedValue(0);
  useEffect(() => {
    value.value = typeof state === 'number' ? state : state ? 1 : 0;
  }, [state, value]);
  return useDerivedValue(() => {
    return withSpring(value.value);
  });
};

const useTiming = (state, config) => {
  const value = useSharedValue(0);
  useEffect(() => {
    value.value = typeof state === 'number' ? state : state ? 1 : 0;
  }, [state, value]);
  return useDerivedValue(() => {
    return withTiming(value.value, config);
  });
};

const UseTransition = () => {
  // const [toggled, setToggle] = useState(false);
  const toggled = useSharedValue(false); // alt way to use without State toggle
  const transition = useDerivedValue(() => {
    return withSpring(toggled.value);
  });
  // const transition = useSpring(toggled);

  return (
    <View style={styles.container}>
      {cards.map((card, index) => (
        <AnimatedCard key={card} {...{ index, card, transition }} />
      ))}
      <Button
        label={toggled ? 'Reset' : 'Start'}
        primary
        onPress={() => (toggled.value = !toggled.value)} // atl way to use without state
        // onPress={() => setToggle((prev) => !prev)}
      />
    </View>
  );
};

export default UseTransition;
