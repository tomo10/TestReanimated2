import * as React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  gap: {
    marginTop: 6,
  },
});

export default () => {
  const navigation = useNavigation();

  return (
    <View>
      <Button
        title="Worklets"
        onPress={() => navigation.navigate('Worklets')}
      />
      <View style={styles.gap} />
      <Button title="Gesture" onPress={() => navigation.navigate('Gesture')} />
      <View style={styles.gap} />
      <Button title="Custom" onPress={() => navigation.navigate('Custom')} />
      <View style={styles.gap} />
      <Button
        title="Animations"
        onPress={() => navigation.navigate('Animations')}
      />
      <View style={styles.gap} />
      <Button
        title="Transitions"
        onPress={() => navigation.navigate('Transitions')}
      />
      <View style={styles.gap} />
      <Button
        title="Accordion"
        onPress={() => navigation.navigate('Accordion')}
      />
      <View style={styles.gap} />
      <Button
        title="Circular Slider"
        onPress={() => navigation.navigate('CircularSlider')}
      />
    </View>
  );
};
