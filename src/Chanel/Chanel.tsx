import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

import Item, { MAX_HEIGHT } from "./Item";
import { items } from "./Model";

import Tabs from "../Navigation/tabs";
import Header from "../Header/index";

const styles = StyleSheet.create({
  container: {
    height: (items.length + 1) * MAX_HEIGHT,
    backgroundColor: "black",
  },
});

const Channel = () => {
  const y = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset: { y: value } }) => {
      y.value = value;
    },
  });
  return (
    <>
      <StatusBar hidden />
      <Header />
      <Animated.ScrollView
        onScroll={onScroll}
        snapToInterval={MAX_HEIGHT}
        decelerationRate={"fast"}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View style={styles.container}>
          {items.map((item, index) => (
            <Item item={item} key={index} y={y} index={index} />
          ))}
        </Animated.View>
      </Animated.ScrollView>
    </>
  );
};

export default Channel;
