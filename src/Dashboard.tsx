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
    </View>
  );
};
