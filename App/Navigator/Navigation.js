import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardScreen from "../Screens/Dashboard/DashboardScreen";
import SigninScreen from "../Screens/SignIn/SigninScreen";
import VerificationCode from "../Screens/VarificationCode/VarificationCode";
import CreateNFTScreen from "../Screens/CreateNFT/CreateNFTScreen";
import PreviewNFT from "../Screens/CreateNFT/PreviewNFT";
import SendNFT from "../Screens/SendNFT/SendNFT";
import CreateAccount from "../Screens/CreateAccount/CreateAccount";
import SecureAccount from "../Screens/SecureAccount/SecureAccount";
import login from "../Screens/SignIn/login";
import ClaimNFT from "../Screens/ClaimNFT/ClaimNFT";
import Settings from "../Screens/Settings/Settings";

const Stack = createNativeStackNavigator();

const DashboardStack = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Signin" component={SigninScreen} />
      <Stack.Screen name="login" component={login} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
      <Stack.Screen name="SecureAccount" component={SecureAccount} />
      <Stack.Screen
        name="Home"
        component={DashboardScreen}
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen name="Verify" component={VerificationCode} />
      <Stack.Screen name="createNFT" component={CreateNFTScreen} />
      <Stack.Screen name="PreviewNFT" component={PreviewNFT} />
      <Stack.Screen name="SendNFT" component={SendNFT} />
      <Stack.Screen name="ClaimNFT" component={ClaimNFT} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

const AppNavigator = (props) => {
  return (
    <NavigationContainer>
      <DashboardStack />
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  drawerStyle: {
    width: "70%",
    elevation: 30,
    shadowOpacity: 5,
    borderBottomWidth: 1,
  },
});
export default AppNavigator;
