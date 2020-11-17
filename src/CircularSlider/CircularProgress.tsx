import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, { useAnimatedProps } from 'react-native-reanimated';
import Svg, { Circle, G } from 'react-native-svg';

import { StyleGuide } from '../components';

const { PI } = Math;
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface CircularProgressProps {
  theta: Animated.SharedValue<number>;
  altTheta: Animated.SharedValue<number>;
  r: number;
  strokeWidth: number;
}

const CircularProgress = ({
  r,
  strokeWidth,
  theta,
  altTheta,
}: CircularProgressProps) => {
  const radius = r - strokeWidth / 2;
  const circumference = radius * 2 * PI;
  const props = useAnimatedProps(() => {
    const delta = theta.value - altTheta.value;
    return {
      strokeDashoffset: delta * radius,
    };
  });
  return (
    <Svg style={StyleSheet.absoluteFill}>
      {/* <G rotation="-90" origin={`${r}, ${r}`}> */}
      <Circle
        cx={r}
        cy={r}
        fill="transparent"
        stroke="white"
        r={radius}
        {...{ strokeWidth }}
      />
      <AnimatedCircle
        animatedProps={props}
        cx={r}
        cy={r}
        fill="transparent"
        stroke={StyleGuide.palette.primary}
        r={radius}
        {...{ strokeWidth }}
        strokeDasharray={`${circumference}`}
      />
      {/* </G> */}
    </Svg>
  );
};

export default CircularProgress;
