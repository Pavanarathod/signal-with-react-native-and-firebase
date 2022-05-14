import { View, StyleSheet } from "react-native";
import React, { useRef, useState } from "react";
import { Button, Input, Image } from "@rneui/base";
import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView } from "react-native";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{
          uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
        }}
        style={{
          width: 200,
          height: 200,
        }}
      />
      <View style={styles.inputContainer}>
        <Input
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
          autoFocus
        />
        <Input
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          secureTextEntry
          autoFocus
        />
      </View>

      <Button
        containerStyle={styles.button}
        title="Login"
        onPress={() => {
          console.log("working..");
        }}
      />

      <Button
        containerStyle={styles.button}
        title="Register"
        type="outline"
        onPress={() => {
          console.log("working..");
        }}
      />
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: {},
  button: {},
});
