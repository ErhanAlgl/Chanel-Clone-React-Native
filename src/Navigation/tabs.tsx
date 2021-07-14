import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Channel from "../Chanel/Chanel";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          backgroundColor: "#ffffff",
          elevation: 0,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name='Home'
        component={Channel}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabScreenContainer}>
              <Image
                source={require("../Chanel/assets/home1.png")}
                resizeMode='contain'
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? "black" : "#748c94",
                }}
              />
              <Text
                style={{
                  color: focused ? "black" : "#748c94",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name='Products'
        component={Channel}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabScreenContainer}>
              <Image
                source={require("../Chanel/assets/search.png")}
                resizeMode='contain'
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? "black" : "#748c94",
                }}
              />
              <Text
                style={{
                  color: focused ? "black" : "#748c94",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                Products
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name='Services'
        component={Channel}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabScreenContainer}>
              <Image
                source={require("../Chanel/assets/service.png")}
                resizeMode='contain'
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? "black" : "#748c94",
                }}
              />
              <Text
                style={{
                  color: focused ? "black" : "#748c94",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                Services
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  tabScreenContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Tabs;
