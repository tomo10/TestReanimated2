import * as React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  card: {
    height: 100,
    width: 150,
    backgroundColor: '#B5D3E7',
  },
});

const Button = () => <View style={styles.card} />;

export default Button;
