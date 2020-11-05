import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
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
  box: { backgroundColor: 'blue', height: 30, width },
});

interface AnimatedCardProps {
  transition: any;
}

const AnimatedList = ({ transition }: AnimatedCardProps) => {
  const stylez = useAnimatedStyle(() => {
    const move = interpolate(transition.value, [0, 1], [0, 195]);
    return {
      transform: [{ translateY: move }],
    };
  });
  return (
    <Animated.View style={[styles.overlay, stylez]}>
      <View style={styles.box} />
    </Animated.View>
  );
};

export default AnimatedList;
