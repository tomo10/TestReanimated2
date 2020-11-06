import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Animated, {
  useAnimatedRef,
  measure,
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
  withTiming,
  runOnUI,
} from 'react-native-reanimated';

import Chevron from './Chevron';
import Item, { ListItem } from './ListItem';

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    backgroundColor: 'white',
    padding: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  items: {
    overflow: 'hidden',
  },
});

export interface List {
  name: string;
  items: ListItem[];
}

interface ListProps {
  list: List;
}

const List = ({ list }: ListProps) => {
  const height = useSharedValue(0);
  const open = useSharedValue(false);
  const headerStyle = useAnimatedStyle(() => ({
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  }));
  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          if (height.value === 0) {
            runOnUI(() => {
              'worklet';
              height.value = measure(aref).height;
            })();
          }
          open.value = !open.value;
        }}>
        <Animated.View style={[styles.container, headerStyle]}>
          <Text style={styles.title}>Total Points</Text>
          <Chevron open={open} />
        </Animated.View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default List;
