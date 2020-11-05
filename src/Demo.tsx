import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { runOnUI, useSharedValue } from 'react-native-reanimated';
import { ReText } from 'react-native-redash';
import { Button } from './components';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  box: {
    height: 100,
    width: 150,
    backgroundColor: '#B5D3E7',
  },
});

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.box} />
    </View>
  );
};
