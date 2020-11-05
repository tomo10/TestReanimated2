import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { StyleGuide } from './';
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  overlay: {
    // ...StyleSheet.absoluteFillObject,
    // justifyContent: 'center',
    // alignItems: 'center',
    // padding: StyleGuide.spacing * 4,
  },
  box: { backgroundColor: 'blue', width },
});

interface AnimatedCardProps {
  transition: any;
  height: any;
}

const AnimatedList = ({ transition, height }: AnimatedCardProps) => {
  const stylez = useAnimatedStyle(() => {
    // const height = interpolate(transition.value, [0, 1], [30, 100]);
    const move = interpolate(transition.value, [0, 1], [0, 50]);
    return {
      transform: [{ translateY: move }],
    };
  });
  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: height.value,
    };
  });

  return <Animated.View style={[styles.box, stylez, animatedStyle]} />;
};

export default AnimatedList;
