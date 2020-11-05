import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Animated from 'react-native-reanimated';

import { Card, Cards, StyleGuide } from './components';

const { width } = Dimensions.get('window');
const origin = -(width / 2 - StyleGuide.spacing * 2);
const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    padding: StyleGuide.spacing * 4,
  },
});

interface AnimatedCardProps {
  toggled: boolean;
  index: number;
  card: Cards;
}

const AnimatedCard = ({ card, toggled, index }: AnimatedCardProps) => {
  console.log(toggled);

  const rotate = toggled ? (index - 1) * Math.PI : 0;
  console.log('rotate:', rotate, index, card);

  return (
    <Animated.View
      key={card}
      style={[
        styles.overlay,
        {
          transform: [
            { translateX: origin },
            { rotate: `${rotate}deg` },
            { translateX: -origin },
          ],
        },
      ]}>
      <Card {...{ card }} />
    </Animated.View>
  );
};

export default AnimatedCard;
