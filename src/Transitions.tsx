import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Button, StyleGuide, cards } from './components';

import AnimatedCard from './AnimatedCard';
import {
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StyleGuide.palette.background,
    justifyContent: 'flex-end',
  },
});

const UseTransition = () => {
  const [toggled, setToggle] = useState(false);
  const isToggled = useSharedValue(false);
  useEffect(() => {
    isToggled.value = toggled;
  }, [toggled, isToggled]);
  const transition = useDerivedValue(() => {
    return withSpring(isToggled.value);
  });
  return (
    <View style={styles.container}>
      {cards.map((card, index) => (
        <AnimatedCard key={card} {...{ index, card, transition }} />
      ))}
      <Button
        label={toggled ? 'Reset' : 'Start'}
        primary
        onPress={() => setToggle((prev) => !prev)}
      />
    </View>
  );
};

export default UseTransition;
