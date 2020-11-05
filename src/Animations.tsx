import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Easing,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { withPause } from 'react-native-redash';
import { Button } from './components';
import ChatBubble from './components/ChatBubble';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

const Timing = () => {
  const [play, setPlay] = React.useState(false);
  // const paused = useSharedValue(!play);
  const progress = useSharedValue<null | number>(null);
  return (
    <View style={styles.container}>
      <ChatBubble progress={progress} />
      <Button
        label={play ? 'Pause' : 'Play'}
        primary
        onPress={() => {
          setPlay((prev) => !prev);
          // paused.value = !paused.value;
          if (progress.value === null) {
            progress.value = withRepeat(
              withTiming(1, {
                duration: 1100,
                easing: Easing.inOut(Easing.ease),
              }),
              -1,
              true,
            );
          }
        }}
      />
    </View>
  );
};

export default Timing;
