import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { runOnUI, useSharedValue } from 'react-native-reanimated';
import { ReText } from 'react-native-redash';
import { Button } from './components';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    // alignItems: 'center',
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
  'worklet';
  text.value = `Hello from ${from}`;
};

export default () => {
  const text = useSharedValue('');
  return (
    <View style={styles.container}>
      <Button
        label="Say Hello"
        primary={true}
        onPress={() => runOnUI(sayHello)(text, 'Beautiful Okavango Delta')}
      />
      <ReText text={text} />
    </View>
  );
};
