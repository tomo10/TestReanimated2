import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { runOnUI, useDerivedValue, useSharedValue, withSpring } from 'react-native-reanimated';
import { ReText } from 'react-native-redash';
import { Button, CARD_HEIGHT } from './components';
import AnimatedList from './components/AnimatedList';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
});

const formatDateTime = (datetime: Date) => {
  'worklet';
  return datetime.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const sayHello = (text, from) => {
  "worklet";
  text.value = `Hello from ${from} on ${formatDateTime(new Date())}`;
};

const triggerList = (height, openList) => {
  "worklet";
  height.value = height.value === 50 ? 120 : 50;
  openList.value = !openList.value;
};

export default () => {
  const text = useSharedValue('');
  const openList = useSharedValue(false); // alt way to use without State toggle
  const height = useSharedValue(50);
  const transition = useDerivedValue(() => {
    return withSpring(openList.value);
  });
  return (
    <View style={styles.container}>
      <Button
        label="Say Hello"
        primary={true}
        onPress={() => runOnUI(sayHello)(text, 'Beautiful Okavango Delta')}
      />
      <ReText text={text} />
      <Button
        label="Dropdown"
        primary={true}
        onPress={() => runOnUI(triggerList)(height, openList)}
      />
      <AnimatedList {...{ transition, height }} />
    </View>
  );
};
