import React, { useEffect, useState } from 'react';
import { StyleSheet, Button } from 'react-native';

import Animated, { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';

const styles = StyleSheet.create({
  box: { backgroundColor: '#001a72', height: 40, width: 40, borderRadius: 10 },
});

export default () => {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value * 255 }],
    };
  });

  return (
    <>
      <Animated.View style={[styles.box, animatedStyles]} />
      <Button onPress={() => (offset.value = Math.random())} title="Move" />
    </>
  );
};
