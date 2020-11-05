import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('window');
const ratio = 228 / 362;
export const CARD_WIDTH = width * 0.7;
export const CARD_HEIGHT = CARD_WIDTH * ratio;

const styles = StyleSheet.create({
  card1: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 16,
    backgroundColor: '#B5D3E7',
  },
  card2: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 16,
    backgroundColor: 'red',
  },
  card3: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 16,
    backgroundColor: 'yellow',
  },
});

export enum Cards {
  Card1 = 0,
  Card2 = 1,
  Card3 = 2,
}

export const cards = [Cards.Card1, Cards.Card2, Cards.Card3];

interface CardProps {
  card: Cards;
}

const Card = ({ card }: CardProps) => {
  return <View style={styles[`card${card.toString()}`]} />;
};

export default Card;
