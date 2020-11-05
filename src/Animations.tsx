import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSharedValue, withTiming } from 'react-native-reanimated';
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
  const progress = useSharedValue<null | number>(null);
  return (
    <View style={styles.container}>
      <ChatBubble progress={progress} />
      <Button
        label={play ? 'Pause' : 'Play'}
        primary
        onPress={() => {
          setPlay((prev) => !prev);
          if (progress.value === null) {
            progress.value = withTiming(1);
          }
        }}
      />
    </View>
  );
};

export default Timing;
