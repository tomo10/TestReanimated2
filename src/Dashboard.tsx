import * as React from 'react';
import { Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default () => {
  const navigation = useNavigation();

  return (
    <View>
      <Button
        title="Worklets"
        onPress={() => navigation.navigate('Worklets')}
      />
      <Button title="Demo" onPress={() => navigation.navigate('Demo')} />
      <Button title="Gesture" onPress={() => navigation.navigate('Gesture')} />
      <Button
        title="Transitions"
        onPress={() => navigation.navigate('Transitions')}
      />
    </View>
  );
};
