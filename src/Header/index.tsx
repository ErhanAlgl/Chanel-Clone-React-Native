import React from "react";
import { View, StyleSheet, Image, Platform } from "react-native";

const Header = () => {
  return (
    <>
      <View style={[styles.container]}>
        <Image
          style={styles.logo}
          source={require("../Chanel/assets/menu.png")}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 50,
    elevation: Platform.OS === "android" ? 10 : 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  logo: {
    width: 30,
    height: 25,
    resizeMode: "contain",
    tintColor: "white",
  },
});

export default Header;
