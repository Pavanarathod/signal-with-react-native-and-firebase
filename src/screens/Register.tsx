import { View, Text, KeyboardAvoidingView, StyleSheet } from "react-native";
import React from "react";
import { Button, Input } from "@rneui/base";
import { AuthNavPrams } from "../AppParamsList/AppPramsLIst";
import { useForm, Controller } from "react-hook-form";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../database/firebase";

const Register: React.FC<AuthNavPrams<"Register">> = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const register = async (data: any) => {
    // if (!data) return;
    // await createUserWithEmailAndPassword(auth, data.email, data.password)
    //   .then(async (authUser) => {
    //     if (authUser.user) {
    //       await updateProfile(auth.currentUser, {
    //         displayName: data?.userName,
    //       })
    //         .then(() => {})
    //         .catch(() => alert("Can't update the user profile"));
    //     }
    //     console.log(authUser.user);
    //   })
    //   .catch((error) => alert(error.message));
  };

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
        <Controller
          control={control}
          name="password"
          render={({ field: { value, onChange, onBlur } }) => (
            <Input
              placeholder="Enter you'r password"
              autoFocus
              value={value}
              onChangeText={(value) => onChange(value)}
            />
          )}
          rules={{
            required: {
              value: true,
              message: "password is required",
            },
          }}
        />
        {errors.password && (
          <Text style={styles.errorMessage}>Email is required</Text>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={handleSubmit(register)} title="Register" />
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
