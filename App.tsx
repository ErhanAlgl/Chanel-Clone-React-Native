import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Chanel, { assets as chanelAssets } from "./src/Chanel";

import { LoadAssets } from "./src/components";

const assets = [...chanelAssets];

const Stack = createStackNavigator();
const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name='Channel'
      component={Chanel}
      options={{
        title: "Chanel",
        header: () => null,
      }}
    />
  </Stack.Navigator>
);

const App = () => {
  return (
    <LoadAssets assets={assets}>
      <AppNavigator />
    </LoadAssets>
  );
};

export default App;
