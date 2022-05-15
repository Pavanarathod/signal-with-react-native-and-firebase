import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import { AuthPramsList } from "../AppParamsList/AppPramsLIst";
import Register from "../screens/Register";

const Stack = createNativeStackNavigator<AuthPramsList>();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#2C6BED",
          },
          headerTitleStyle: {
            color: "white",
          },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
