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
  styleH: any;
  // heightTranstion: any;
}

const AnimatedList = ({ transition, styleH }: AnimatedCardProps) => {
  const stylez = useAnimatedStyle(() => {
    const move = interpolate(transition.value, [0, 1], [0, 50]);
    return {
      transform: [{ translateY: move }],
    };
  });

  return <Animated.View style={[styles.box, stylez, styleH]} />;
};

export default AnimatedList;
