import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type AuthPramsList = {
  Login: undefined;
  Register: undefined;
};

export type AuthNavPrams<T extends keyof AuthPramsList> = {
  navigation: NativeStackNavigationProp<AuthPramsList, T>;
  route: RouteProp<AuthPramsList, T>;
};
