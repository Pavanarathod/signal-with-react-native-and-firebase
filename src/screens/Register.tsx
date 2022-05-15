import { View, Text, KeyboardAvoidingView, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Button, Input } from "@rneui/base";
import { AuthNavPrams } from "../AppParamsList/AppPramsLIst";
import { useForm, Controller, SubmitErrorHandler } from "react-hook-form";

const Register: React.FC<AuthNavPrams<"Register">> = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data: any) => console.log(data);

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View
        style={{
          marginBottom: 50,
        }}
      >
        <Text>Create Signla Account!</Text>
      </View>
      <View style={styles.formContainer}>
        <Controller
          control={control}
          name="userName"
          render={({ field: { value, onChange, onBlur } }) => (
            <Input
              style={styles.inputArea}
              placeholder="User name"
              value={value}
              onChangeText={(value) => onChange(value)}
            />
          )}
          rules={{
            required: {
              value: true,
              message: "Username is required",
            },
          }}
        />
        {errors.userName && (
          <Text style={styles.errorMessage}>username is required</Text>
        )}
        <Controller
          control={control}
          name="email"
          render={({ field: { value, onChange, onBlur } }) => (
            <Input
              placeholder="Enter you'r email"
              autoFocus
              value={value}
              onChangeText={(value) => onChange(value)}
            />
          )}
          rules={{
            required: {
              value: true,
              message: "Email is required",
            },
          }}
        />
        {errors.email && (
          <Text style={styles.errorMessage}>Email is required</Text>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={handleSubmit(onSubmit)} title="Register" />
        <View style={{ width: 20, height: 20 }} />
        <Button
          style={{
            marginHorizontal: 30,
          }}
          onPress={() => navigation.navigate("Login")}
          title="Login"
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    width: 300,
  },

  errorMessage: {
    color: "red",
    marginLeft: 20,
    marginTop: 0,
  },
  buttonContainer: {
    width: 300,
  },
});
