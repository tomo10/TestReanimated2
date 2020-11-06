import React from 'react';
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  runOnUI,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  box: {
    backgroundColor: 'orange',
    flexDirection: 'row-reverse',
    width,
  },
});

const list = ['Attending', 'Maybe', 'Not Going', 'Washing Hair'];

const menuDrop = (height) => {
  'worklet';
  height.value = height.value === 0 ? 100 : 0;
};

const PressableDropDown = () => {
  // const [toggle, setToggle] = React.useState(false);
  const height = useSharedValue(0);
  const heightZ = useAnimatedStyle(() => {
    return {
      height: withSpring(height.value),
    };
  });

  return (
    <>
      <Pressable onPress={() => runOnUI(menuDrop)(height)}>
        <View style={[styles.box, { height: 50 }]} />
      </Pressable>
      <Animated.View style={[styles.box, heightZ]}>
        {list.map((item, key) => (
          <Text key={key} style={{ color: 'blue' }}>
            {item}
          </Text>
        ))}
      </Animated.View>
    </>
  );
};

export default PressableDropDown;
