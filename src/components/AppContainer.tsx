import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import { LoginPramsList } from "../AppParamsList/AppPramsLIst";

const Stack = createNativeStackNavigator<LoginPramsList>();

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
